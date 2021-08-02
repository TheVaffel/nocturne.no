import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { LangContext, LangContextStruct } from '../infrastructure/root.tsx';
import { DevBlogWrapper, devblogPathUrl } from '../devblog/devblog_wrapper.tsx'
import { TutorialWrapper, rootTutorialUrls } from '../python_tutorial/tutorial_wrapper.tsx';

import { SiteIndexEn, SiteIndexNo } from '../dynamics.tsx';
import { devblogPathLocal } from '../devblog/devblog_wrapper';

interface BackgroundState {
       backgroundUrl: string;
};

const getBackgroundFromUrl = (url: string) =>  {
       if ((rootTutorialUrls as string[]).some(patternUrl => url.startsWith(patternUrl))) {
              return 'url(/images/python_background.png)';
       } else {
              return 'none';
       }
}

export const ContentWrapper: React.FunctionComponent<{}> = () => {
       const langState: LangContextStruct = React.useContext(LangContext);
       const [backgroundState, setBackgroundState]: [BackgroundState, (newState: BackgroundState) => void] = 
              React.useState({ backgroundUrl: 'none' });
       
       const location = useLocation();
       const backgroundUrl = getBackgroundFromUrl(location.pathname);

       React.useEffect(() => setBackgroundState({ backgroundUrl: backgroundUrl}), [backgroundUrl])

       return (
              <div style={{width: '100%',
                     backgroundImage: backgroundState.backgroundUrl}}>              
                     <div style={{
                            maxWidth: '800px', 
                            margin: '0 auto',}} >
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
              </div>
       </div>);
}
