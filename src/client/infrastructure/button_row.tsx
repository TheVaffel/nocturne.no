import * as React from 'react';
import { Link } from 'react-router-dom';

import { devblogPathUrl } from '../devblog/devblog_wrapper.tsx'

const tabTitleStyle = { backgroundColor: "powderblue", 
                        display: "inline",
                        padding: "5px",
                        margin: "5px",
                        cursor: "pointer"
                     }
const TabTitle: React.FunctionComponent<React.PropsWithChildren<{}>> =
 (props) => 
 (<div style={tabTitleStyle}>{props.children}</div>)

export const TopButtonRow = () => (<div>
       <Link to="/"><TabTitle>Home</TabTitle></Link>
       <Link to={devblogPathUrl}><TabTitle>Tech Blog</TabTitle></Link>
       </div>);