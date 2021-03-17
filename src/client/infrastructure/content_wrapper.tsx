import * as React from 'react';
import { Suspense } from 'react';

import { Route, Switch } from 'react-router-dom';
import { DevBlogWrapper, devblogPathUrl } from '../devblog/devblog_wrapper.tsx'

import { SiteIndexEn, SiteIndexNo } from '../dynamics.tsx';


export const ContentWrapper: React.FunctionComponent<{}> = () => (<div>
       <Switch>
       <Route exact path={["/en", "/eno", "/"]}>
              <SiteIndexEn />
       </Route>
       <Route exact path={["/no", "/noo"]}>
              <SiteIndexNo />
       </Route>
       <Route path={devblogPathUrl} >
              <DevBlogWrapper />
       </Route>
       </Switch>
       </div>);
