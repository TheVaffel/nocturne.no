import * as React from 'react';
import { Route, useHistory, useLocation} from 'react-router-dom';

import { useFetch } from '../common/utils.tsx';
import { DynamicComponentWrapper } from '../dynamics.tsx';
import { Metadata } from '../../server/update_metadata';
import { LangContext, LangContextStruct } from '../infrastructure/root.tsx';

import { TutorialIndexNo } from './index.no.tsx';
import { TutorialIndexEn } from './index.en.tsx';

export const tutorialUrlNo = "/no/introduksjon_til_python";
export const tutorialUrlEn = "/en/introduction_to_python";

export const rootTutorialUrls = [tutorialUrlNo, tutorialUrlEn];

export const localUrl = 'python_tutorial';

interface MetadataMap {
    [key: string]: Metadata[];
};

const stripSuffixes = (fileName: string) => {
    // Strip suffix of form ".xx.tsx"
    return fileName.substring(0, fileName.length - 7);
}

const mashEmUpFileName = function(mets: Metadata[][]) : MetadataMap {
    const ob: MetadataMap = {};
    mets.forEach((metArr: Metadata[], index: number) => {
        metArr.forEach((met: Metadata) => {
            const newName = stripSuffixes(met.fileName);
            if (newName in ob) {
                ob[newName][index] = met;
            } else {
                ob[newName] = [null, null];
                ob[newName][index] = met;
            }
        });
    });

    return ob;
}

const mashEmUpUrl = function(mets: Metadata[][]) : MetadataMap {
    const ob: MetadataMap = {};
    mets.forEach((metArr: Metadata[], index: number) => {
        metArr.forEach((met: Metadata) => {
            const newName = met.urlPath;
            if (newName in ob) {
                ob[newName][index] = met;
            } else {
                ob[newName] = [null, null];
                ob[newName][index] = met;
            }
        });
    });

    return ob;
}

export interface TutorialPostProps {
    metadata: Metadata;
}

const getUrlLangIndex = (url: string) => {
    const spl = url.split('/');
    if (spl.length <= 1) {
        return 0;
    }
    if (spl[1] == 'no') {
        return 0;
    }

    return 1;
}

export const TutorialWrapper = (props: {}) => {
    
    const langState: LangContextStruct = React.useContext(LangContext);
    const inferredRootUrl = rootTutorialUrls[langState.langIndex];
    const langIndex = langState.langIndex;

    const history = useHistory();
    const location = useLocation();

    const curPath = location.pathname;
    const urlLangIndex = getUrlLangIndex(curPath);
    
    const metadataLists: Metadata[][] = useFetch('/tutorial_lists', [[],[]]);

    const [uState, setUState]: [[MetadataMap, MetadataMap], (met: [MetadataMap, MetadataMap]) => void] = 
        React.useState(null);
    
    if (uState == null && metadataLists[0].length > 0) {
        setUState([mashEmUpFileName(metadataLists), mashEmUpUrl(metadataLists)]);
    }
    

    const getMetFromUrl = (url: string, urlLangIndex: number) : Metadata => {
        const spl = url.split('/');
        if (spl.length <= 3 || uState == null) {

            return null;
        }

        return uState[1][spl[spl.length - 1]][urlLangIndex];
    }

    const hasTwin = (met: Metadata) => {
        const pathRoot = stripSuffixes(met.fileName);
        const arr = uState[0][pathRoot];
        const bothPresent = arr[0] != null && arr[1] != null;
        return bothPresent;
    }

    const getTwinUrl = (met: Metadata) => {
        if (met == null || uState == null) {
            return null;
        }
        const pathRoot = stripSuffixes(met.fileName);
        const arr = uState[0][pathRoot];
        let otherMet;
        if (arr[0].fileName == met.fileName) {
            otherMet = arr[1];
        } else {
            otherMet = arr[0];
        }

        const newPath = inferredRootUrl + '/' + otherMet.urlPath;
        return newPath;
    }

    const currentMet = getMetFromUrl(location.pathname, urlLangIndex);

    const sameLangIndex = langIndex == urlLangIndex;
    const inferredCanChange = currentMet == null || (uState != null && hasTwin(currentMet));
    const sameCanChange = langState.canChange == inferredCanChange;

    
    React.useEffect(() => {
        if (!sameLangIndex || !sameCanChange) {
            if (langIndex == -1 || !sameCanChange) {
                // Url is correct, set langState
                langState.setLangIndexAndCanChange({langIndex: urlLangIndex, canChange: inferredCanChange});
            } else {
                // Url is wrong, set new
                
                // If on root URL
                let nextUrl;
                if (curPath == rootTutorialUrls[urlLangIndex]) {
                    nextUrl = rootTutorialUrls[langIndex];
                } else {
                    nextUrl = getTwinUrl(currentMet);
                }
        
                if (nextUrl != null) {
                    history.push(nextUrl);
                }
            }
        } 
    }, [sameLangIndex, sameCanChange, curPath]);


    const indexRoute = (<>
        <Route key = {0} exact path={tutorialUrlNo}>
        <TutorialIndexNo metadatas={metadataLists} />
        </Route>
        <Route key = {1} exact path={tutorialUrlEn}>
        <TutorialIndexEn metadatas={metadataLists} />
        </Route>
    </>);

    return (<>
        { indexRoute }
        { (metadataLists[0].length == 0 || langIndex == -1) ? <></> : metadataLists[langIndex].map((met: Metadata) =>
            {
                const urlPart = met.urlPath;
                return (<Route key={met.hash} exact path={inferredRootUrl + '/' + urlPart}>
                    <DynamicComponentWrapper metadata={met}
                        _dcw_fileName={localUrl + '/posts/' + met.fileName} />
                </Route>);
            })
        }
    </>);
};