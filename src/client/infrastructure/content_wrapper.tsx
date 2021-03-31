import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LangContext, LangContextStruct } from '../infrastructure/root.tsx';
import { DevBlogWrapper, devblogPathUrl } from '../devblog/devblog_wrapper.tsx'
import { TutorialWrapper, rootTutorialUrls } from '../tutorial/tutorial_wrapper.tsx';

import { SiteIndexEn, SiteIndexNo } from '../dynamics.tsx';


export const ContentWrapper: React.FunctionComponent<{}> = () => {
       const langState: LangContextStruct = React.useContext(LangContext);
       return (<div>
       <Switch>
       <Route exact path={['/', '/en', '/no']} >
              { langState.langIndex == 0 ? <SiteIndexNo /> : <SiteIndexEn /> }
       </Route>

       <Route path={devblogPathUrl} >
              <DevBlogWrapper />
       </Route>
       <Route path={rootTutorialUrls} >
              <TutorialWrapper />
       </Route>
       </Switch>
       </div>);
}
