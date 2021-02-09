import * as React from 'react';
import { Header } from './header.tsx';
import { IndexContent } from './index_content.tsx';
import { BrowserRouter, Route } from 'react-router-dom';
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
