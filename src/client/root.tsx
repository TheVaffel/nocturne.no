import * as React from 'react';
import { Header } from './header.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ContentWrapper } from './content_wrapper.tsx';


export const Root = () =>
        (
            <div>
                <BrowserRouter>
                <Header />
                <hr/>
                <ContentWrapper />
                </BrowserRouter>
            </div>
        );
