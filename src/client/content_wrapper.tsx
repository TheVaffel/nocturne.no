import * as React from 'react';
import { Suspense } from 'react';

import { Route, Switch, Link, } from 'react-router-dom';
import { DevBlogWrapper, devblogPath } from './dynamic_components/devblog/devblog_wrapper.tsx'

import { // SettingUpABlog0,
         SiteIndex } from './dynamic_components/dynamics.tsx';


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
