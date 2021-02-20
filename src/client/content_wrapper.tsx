import * as React from 'react';
import { Suspense } from 'react';

import { Route, Switch, Link, } from 'react-router-dom';
import { DevBlogWrapper } from './dynamic_components/devblog/devblog_wrapper.tsx'

import { DynamicComponent0, 
       DynamicComponent1,
       SettingUpABlog0 } from './dynamic_components/dynamics.tsx';


export const ContentWrapper = () => (<div>
       <h2>Content Wrapper</h2>
       <hr/>
       <ul>
       <li><Link to="/programming_tutorial">Tutorial</Link> </li>
       <li><Link to="/dev_blog">Dev blog</Link> </li>
       <li><Link to="/post0">Actual content</Link></li>
       </ul>
       <Switch>
       <Route path="/programming_tutorial" >
              <DynamicComponent0 param="This is a programming tutorial now" />
       </Route>
       <Route path="/dev_blog" >
              { /* <DynamicComponent1 param="This is a dev blog now" /> */ }
              <DevBlogWrapper />
       </Route>
       <Route path="/post0" >
              <SettingUpABlog0 param="blogzz" />
       </Route>
       </Switch>
       </div>);
