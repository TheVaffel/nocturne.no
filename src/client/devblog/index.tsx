import * as React from 'react';
import { Link } from 'react-router-dom';

import { Db } from '../common/utils.tsx';
import { Metadata } from '../../server/update_metadata.ts';
import { devblogPathUrl, getURLPart } from './devblog_wrapper.tsx';

const PostListEntry: React.FunctionComponent<{metadata: Metadata}> = (props) => (
    <div>
        <Link to={devblogPathUrl + '/' + getURLPart(props.metadata)}><h3>{props.metadata.title}</h3></Link>
        {props.metadata.description}
        <br/>
    </div>
);

export const DevBlogIndex: React.FunctionComponent<{metadata: Metadata[]}> = (props) => {
    return (
    <div>
        <h2>Development Blog</h2>
        <div>
            Boy, are you in for a treat. This blog will focus on different development adventures I find worthy of noting down. 
            In general, I'm a graphic-intensive and playful guy, meaning computer graphics and game programming may quickily become the most prominent topics around here. 
            Otherwise, I will note down different procrastination projects as well - like how I set up this blog.
            <Db/>
            The latest posts upon which you can feast your eyes are found here:

            {
                props.metadata.map((met: Metadata) =>
                    (<PostListEntry key={met.hash} metadata={met}/>))
            }
        </div>
    </div>
    );
}