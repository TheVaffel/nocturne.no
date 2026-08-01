import * as React from 'react';
import { useState } from 'react';
import { useHistory, BrowserRouter } from 'react-router-dom';

import { ContentWrapper } from './content_wrapper.tsx';
import { Header } from './header.tsx';

export interface LangState {
    langIndex: number,
    canChange: boolean,
}

export interface LangContextStruct {
    langIndex: number,
    canChange: boolean,
    setLangIndexAndCanChange: (newState: LangState) => void,
}

export const useSetLangContext = (state: LangState) => {
    const langContext: LangContextStruct = React.useContext(LangContext);
    React.useEffect(() => {
        langContext.setLangIndexAndCanChange(state);
    }, [state.langIndex, state.canChange]); // ensures this doesn't get called again in an infinite loop
    
    return state;
}

const defaultLangContext = { langIndex: -1, // -1 = undefined, 0 = Norwegian, 1 = English
    canChange: false,
    setLangIndexAndCanChange: (newState: LangState) => { } };

export const LangContext: React.Context<LangContextStruct> = React.createContext(defaultLangContext);

export const Root = (props: {}) => {
    const [langState, setLangState] = useState({ langIndex: defaultLangContext.langIndex,
                                               canChange: defaultLangContext.canChange});
    const history = useHistory();

    return (
    <LangContext.Provider value={{...langState, setLangIndexAndCanChange: setLangState}} >
        <BrowserRouter>
        <Header />
        <hr/>
        <div style={{fontFamily: 'sans-serif'}} >
            <ContentWrapper />
        </div>
        </BrowserRouter>
    </LangContext.Provider>);
}