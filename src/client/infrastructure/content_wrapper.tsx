import * as React from 'react';
import { Suspense } from 'react';

import { Route, Switch, Link, } from 'react-router-dom';
import { DevBlogWrapper, devblogPath } from '../devblog/devblog_wrapper.tsx'

import { SiteIndex } from '../dynamics.tsx';


export const ContentWrapper = () => (<div>
       <Switch>
       <Route exact path="/">
              <SiteIndex />
       </Route>
       <Route path={devblogPath} >
              <DevBlogWrapper />
       </Route>
       </Switch>
       </div>);
