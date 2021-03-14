import * as React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import { ContentWrapper } from './content_wrapper.tsx';
import { Header } from './header.tsx';


let globalUrl: string = '';

export function getLangIsNorwegian() : boolean {
    const pref = getUrlLangPrefix();
    return pref == 'no' || pref == 'noo';
}

export function getLangCanChange() : boolean {
    const pref = getUrlLangPrefix();
    return pref.length < 3;
}


export function replaceCurrentUrlLangPrefix(pref: string) : string {
    const globSplt = globalUrl.split('/');
    const newSplt = globSplt.splice(0, 2);
    const res =  '/' + pref + '/' + globSplt.join('/');
    console.log("replaceCurrentUrlLangPrefix returning " + res);
    return res;
}

export function getUrlLangPrefix() : string {
    const globSplt = globalUrl.split('/');
    let res: string = '';
    
    if (globSplt.length == 2) {
        res = 'en';
    } else {
        res = globSplt[1];
    }

    console.log("getUrlLangPrefix returning " + res);
    return res;
}

const UrlSetter: React.FunctionComponent<{}> = () => {
        const loc = useLocation();
        globalUrl = loc.pathname;
        console.log("Set globalUrl to " + globalUrl);
        return (<></>);
}


export interface GlobalProps {
    norwegian: boolean;
    setNorwegian: (p: boolean) => void;
};

interface RootState {
    norwegian: boolean;
};

export class Root extends React.Component<{}, RootState> {
    state : RootState = {
      norwegian: false   
    };

    constructor(p : {}) {
        super(p);
    }

    render() {
        const downProps: GlobalProps = {
            norwegian: this.state.norwegian,
            setNorwegian: (p: boolean) => (this.setState({norwegian: p}))
        };

        return (
            <div>
                <BrowserRouter>
                <UrlSetter />
                <Header {...downProps} />
                <hr/>
                <ContentWrapper {...downProps} />
                </BrowserRouter>
            </div>
        );
    }
}