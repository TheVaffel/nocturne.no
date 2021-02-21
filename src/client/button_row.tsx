import * as React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';


const tabTitleStyle = { backgroundColor: "powderblue", 
                        display: "inline",
                        padding: "5px",
                        margin: "5px"}
const TabTitle: React.FunctionComponent<React.PropsWithChildren<{}>> = (props) => (<div style={tabTitleStyle}>{props.children}</div>)

export const TopButtonRow = () => (<div>
       <Link to="/"><TabTitle>Home</TabTitle></Link>
       { /* <Link to="/programming_tutorial"><TabTitle>Tutorial Blog</TabTitle></Link> */ }
       <Link to="/dev_blog"><TabTitle>Tech Blog</TabTitle></Link>
       {/* <Link to="/dev_blog"><TabTitle>Rant Blog</TabTitle></Link> */ }
       </div>);