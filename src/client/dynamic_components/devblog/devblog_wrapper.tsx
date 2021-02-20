import * as React from 'react';
import { Route } from 'react-router-dom';

import { SettingUpABlog0 } from '../dynamics.tsx';
import { DevBlogIndex } from './index.tsx';

interface Post {
    path: string;
    component: React.ComponentType;
}

const devblogPath = "/dev_blog"
const posts: Post[] = [{ path: "/post0", component: SettingUpABlog0 }, { path: "/", component: DevBlogIndex }];

export const DevBlogWrapper: React.FunctionComponent<{}> = () => (<div>{posts.map((post) => 
    (<Route exact path={devblogPath + post.path}>
        <post.component />
    </Route>))}</div>);