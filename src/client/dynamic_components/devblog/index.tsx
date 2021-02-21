import * as React from 'react';
import { Link } from 'react-router-dom';

import { Db } from '../../common/utils.tsx';

interface PostDesc {
    title: string;
    description: string;
    url: string;
};

const PostListEntry: React.FunctionComponent<PostDesc> = (props) => (
    <div>
        <Link to={props.url}><h3>{props.title}</h3></Link>
        {props.description}
    </div>
);

export const DevBlogIndex: React.FunctionComponent<{}> = () => (
    <div>
        <h2>Development Blog</h2>
        <div>
            Boy, are you in for a treat. This blog will focus on different development adventures I find worthy of noting down. 
            In general, I'm a graphic-intensive and playful guy, meaning computer graphics and game programming may quickily become the most prominent topics around here. 
            Otherwise, I will note down different procrastination projects as well - like how I set up this blog.
            <Db/>
            The latest posts upon which you can feast your eyes are found here:

            <PostListEntry title="How to Start Blogging" description="How I started blogging, and how you (if you really want to) can too!" url="/dev_blog/post0"/>
        </div>
    </div>
);