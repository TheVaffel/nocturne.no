import * as React from 'react';

import { Metadata } from '../../server/update_metadata.ts';
import { tutorialUrlEn } from './tutorial_wrapper.tsx';
import { PostListEntry } from '../common/post_utils.tsx';

import { Db } from '../common/utils.tsx';

export const TutorialIndexEn = (props: {metadatas: Metadata[][]}) => (
    <div>
        <h2>Introduction to This and That</h2>
        <div>
            Do you like learning new stuff?
            <Db />
            It might be you answered "no" on the question above. In that case, I hope you
            look through the articles I've written below and are able to convince yourself
            that you're wrong.
            <Db />
            If your answer was "yes", then you're in for a treat!
            <Db />
            This is an introduction to programming, using the programming language Python.
            It is written for beginners.
            <Db />
            If this sounds interesting to you, you could go forth and read the <a href={tutorialUrlEn + '/preface'}>preface</a> for 
            a more in-depth presentation of this blog series.
        </div>
        {
            props.metadatas[1].map((met: Metadata) =>
                (<PostListEntry key={met.hash} metadata={met} blogUrl={tutorialUrlEn}/>))
        }
    </div>
);