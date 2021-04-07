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

const homeText = ["Hjem", "Home"];
const techBlogText = ["Utviklerblogg", "Devblog"];
const pythonTutorialText = ["Innføring i Python", "Introduction to Python"];

export const TopButtonRow = () => {
   const langState: LangContextStruct = React.useContext(LangContext);
   const langInd = Math.max(langState.langIndex, 0);

   return (<div>
       <Link to="/"><TabTitle>{homeText[langInd]}</TabTitle></Link>
       <Link to={devblogPathUrl}><TabTitle>{techBlogText[langInd]}</TabTitle></Link>
       <Link to={rootTutorialUrls[Math.max(langState.langIndex, 0)]}><TabTitle>{pythonTutorialText[langInd]}</TabTitle></Link>
       </div>);
}