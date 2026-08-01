import * as React from 'react';

import { Db } from '../common/utils.tsx';
import { Metadata } from '../../server/update_metadata.ts';
import { PostListEntry } from '../common/post_utils.tsx';
import { devblogPathUrl } from './devblog_wrapper.tsx';

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
                    (<PostListEntry key={met.hash} metadata={met} blogUrl={devblogPathUrl}/>))
            }
        </div>
    </div>
    );
}