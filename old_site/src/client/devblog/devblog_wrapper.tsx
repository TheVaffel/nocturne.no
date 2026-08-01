import * as React from 'react';
import { Route } from 'react-router-dom';

import { useFetch } from '../common/utils.tsx';
import { useSetLangContext } from '../infrastructure/root.tsx';
import { DynamicComponentWrapper } from '../dynamics.tsx';
import { DevBlogIndex } from './index.tsx';
import { Metadata } from '../../server/update_metadata';

export interface DevBlogPostProps {
    metadata: Metadata;
};

export const devblogPathUrl = "/devblog";
export const devblogPathLocal = "/devblog";

export const getURLPart = function(metadata: Metadata) : string {
    return metadata.fileName.substring(0, metadata.fileName.length - 4);
}

export const DevBlogWrapper = (props: {}) => {
    const metadataList = useFetch('/devblog_list', []);
    const indexRoute = (<Route key = {0} exact path={devblogPathUrl + '/'}>
        <DevBlogIndex metadata={metadataList} />
    </Route>);

    const langState = useSetLangContext({langIndex: 1, canChange: false});

    return (<>
        { indexRoute }
        { metadataList.map((met: Metadata) =>
            {
                const urlPart = getURLPart(met);
                return (<Route key={met.hash} exact path={devblogPathUrl + '/' + urlPart}>
                    <DynamicComponentWrapper metadata={met}
                        _dcw_fileName={devblogPathLocal.substring(1) + '/posts/' + met.fileName} />
                </Route>);
            })
        }
    </>);
};