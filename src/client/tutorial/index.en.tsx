import * as React from 'react';

import { Metadata } from '../../server/update_metadata.ts';
import { tutorialUrlEn } from './tutorial_wrapper.tsx';
import { PostListEntry } from '../common/post_utils.tsx';

export const TutorialIndexEn = (props: {metadatas: Metadata[][]}) => (
    <div>
        <h2>Introduction to This and That</h2>
        <div>
            Do you like learning new stuff?

            It might be you answered "no" on the question above. In that case, I hope you
            look through the articles I've written below and are able to convince yourself
            that you're wrong.

            If your answer was "yes", then you're in for a treat!

            The articles discuss topics I find interesting, fun and actually useful, and 
            I hope you find yourself agreeing with me by the time you've read them!
        </div>
        {
            props.metadatas[1].map((met: Metadata) =>
                (<PostListEntry key={met.hash} metadata={met} blogUrl={tutorialUrlEn}/>))
        }
    </div>
);