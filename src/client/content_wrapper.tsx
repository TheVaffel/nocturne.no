import * as React from 'react';
import { Suspense } from 'react';

import { BrowserRouter, Route, Switch, Link, /* browserHistory,*/ } from 'react-router-dom';

import { DynamicComponent0, DynamicComponent1 } from './dynamic_components/dynamics.tsx';


export const ContentWrapper = () => (<div>
       <h2>Content Wrapper</h2>
       <hr/>
       { /* <BrowserRouter> */ }
       <ul>
       <li><Link to="/programming_tutorial">Tutorial</Link> </li>
       <li><Link to="/dev_blog">Dev blog</Link> </li>
       </ul>
       <Switch>
       <Route path="/programming_tutorial" >
              <DynamicComponent0 param="This is a programming tutorial now" />
       </Route>
       <Route path="/dev_blog" >
              <DynamicComponent1 param="This is a dev blog now" />
       </Route>
       </Switch>
       { /* </BrowserRouter> */ }
       { /* this.props.children */}
       </div>);
