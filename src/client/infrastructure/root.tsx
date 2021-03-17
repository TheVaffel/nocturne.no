import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import { ContentWrapper } from './content_wrapper.tsx';
import { Header } from './header.tsx';



export function replaceCurrentUrlLangPrefix(pref: string, url: string) : string {
    const globSplt = url.split('/');
    const newSplt = globSplt.splice(0, 2);
    const res =  '/' + pref + '/' + globSplt.join('/');
    console.log("replaceCurrentUrlLangPrefix returning " + res);
    return res;
}

interface LangState {
    isNorwegian: boolean,
    canChange: boolean,
}

export interface LangContextStruct {
    isNorwegian: boolean,
    canChange: boolean,
    setNorwegianAndCanChange: (newState: LangState) => void,
}

export const useSetLangContext = (state: LangState) => {
    const langContext: LangContextStruct = React.useContext(LangContext);
    React.useEffect(() => {
        langContext.setNorwegianAndCanChange(state);
    }, [state.isNorwegian, state.canChange]); // ensures this doesn't get called again in an infinite loop
    
    console.log("Setting state = ");
    console.log(state.isNorwegian, state.canChange);

    return state;
}

const defaultLangContext = { isNorwegian: false, 
    canChange: false,
    setNorwegianAndCanChange: (newState: LangState) => { } };

export const LangContext: React.Context<LangContextStruct> = React.createContext(defaultLangContext);

export const Root = (props: {}) => {
    const [langState, setLangState] = useState({ isNorwegian: defaultLangContext.isNorwegian,
                                               canChange: defaultLangContext.canChange});

    return (
    <LangContext.Provider value={{...langState, setNorwegianAndCanChange: setLangState}} >
        <BrowserRouter>
        <Header />
        <hr/>
        <ContentWrapper />
        </BrowserRouter>
    </LangContext.Provider>);
}