import * as React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { devblogPath } from '../devblog/devblog_wrapper.tsx'

const tabTitleStyle = { backgroundColor: "powderblue", 
                        display: "inline",
                        padding: "5px",
                        margin: "5px"}
const TabTitle: React.FunctionComponent<React.PropsWithChildren<{}>> = (props) => (<div style={tabTitleStyle}>{props.children}</div>)

export const TopButtonRow = () => (<div>
       <Link to="/"><TabTitle>Home</TabTitle></Link>
       <Link to={devblogPath}><TabTitle>Tech Blog</TabTitle></Link>
       </div>);