import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ContentWrapper } from './content_wrapper.tsx';
import { Header } from './header.tsx';

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
