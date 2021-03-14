import * as React from 'react';
import { Suspense } from 'react';

import { Route, Switch, Link, } from 'react-router-dom';
import { DevBlogWrapper, devblogPathUrl } from '../devblog/devblog_wrapper.tsx'

import { SiteIndexEn, SiteIndexNo } from '../dynamics.tsx';
import { GlobalProps, getLangIsNorwegian } from './root.tsx';


export const ContentWrapper: React.FunctionComponent<GlobalProps> = (props) => (<div>
       <Switch>
       <Route exact path={["/en", "/eno", "/"]}>
              <SiteIndexEn {...props} />
       </Route>
       <Route exact path={["/no", "/noo"]}>
              <SiteIndexNo {...props} />
       </Route>
       <Route path={devblogPathUrl} >
              <DevBlogWrapper />
       </Route>
       </Switch>
       </div>);
