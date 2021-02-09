import * as React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export const TopButtonRow = () => (<div>
       <Link to="/programming_tutorial">Tutorial Blog</Link>
       <Link to="/dev_blog">Tech Blog</Link>
       <Link to="/dev_blog">Rant Blog</Link>
       <Link to="/programming_tutorial">Abandon All Hope Ye Who Click Here</Link>
       <a href="/lol">Hmmmm</a>
       </div>);