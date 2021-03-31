import * as React from 'react';
import { Link } from 'react-router-dom';

import { LangContext } from '../infrastructure/root.tsx';
import { devblogPathUrl } from '../devblog/devblog_wrapper.tsx'
import { rootTutorialUrls } from '../tutorial/tutorial_wrapper.tsx';
import { LangContextStruct } from './root.tsx';

const tabTitleStyle = { backgroundColor: "powderblue", 
                        display: "inline",
                        padding: "5px",
                        margin: "5px",
                        cursor: "pointer"
                     }
const TabTitle: React.FunctionComponent<React.PropsWithChildren<{}>> =
 (props) => 
 (<div style={tabTitleStyle}>{props.children}</div>)

export const TopButtonRow = () => {
   const langState: LangContextStruct = React.useContext(LangContext);
   return (<div>
       <Link to="/"><TabTitle>Home</TabTitle></Link>
       <Link to={devblogPathUrl}><TabTitle>Tech Blog</TabTitle></Link>
       <Link to={rootTutorialUrls[Math.max(langState.langIndex, 0)]}><TabTitle>Tutorial</TabTitle></Link>
       </div>);
}