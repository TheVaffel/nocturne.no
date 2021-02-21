import * as React from 'react';
import { Suspense } from 'react';

import { Route, Switch, Link, } from 'react-router-dom';
import { DevBlogWrapper } from './dynamic_components/devblog/devblog_wrapper.tsx'

import { SettingUpABlog0,
         SiteIndex } from './dynamic_components/dynamics.tsx';


export const ContentWrapper = () => (<div>
       <hr/>
       <Switch>
       <Route exact path="/">
              <SiteIndex />
       </Route>
       <Route path="/dev_blog" >
              <DevBlogWrapper />
       </Route>
       <Route path="/post0" >
              <SettingUpABlog0 param="blogzz" />
       </Route>
       </Switch>
       </div>);
