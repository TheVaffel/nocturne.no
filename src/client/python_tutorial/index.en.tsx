import * as React from 'react';

import { Metadata } from '../../server/update_metadata.ts';
import { tutorialUrlEn } from './tutorial_wrapper.tsx';
import { PostListEntry } from '../common/post_utils.tsx';

import { Db } from '../common/utils.tsx';

export const TutorialIndexEn = (props: {metadatas: Metadata[][]}) => (
    <div>
        <h2>Introduction to Programming in Python</h2>
        <div>
            Hey!
            <Db />
            This is an introduction to programming with Python. The goal of this tutorial is to take a human, without any prior experience in programming, on a journey where we cover basic theory and practice regarding programming, using Python as the first language. 
            <Db />
            If this sounds interesting to you, you could go forth and read the <a href={tutorialUrlEn + '/preface'}>preface</a> for 
            a more in-depth presentation of this blog series.
            <Db />
            Good luck on your journey!
        </div>
        {
            props.metadatas[1].map((met: Metadata) =>
                (<PostListEntry key={met.hash} metadata={met} blogUrl={tutorialUrlEn}/>))
        }
    </div>
);