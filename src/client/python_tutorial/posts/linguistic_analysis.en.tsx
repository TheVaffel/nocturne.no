import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const LinguisticAnalysisEn = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Hello again! This is a <i>project post</i>, which means we will go through a programming project to show how you can use what you've learn in the previous posts. On the paper, you have learnt enough Python to do these projects on your own. In reality however, it can be hard to know where to begin when you want to program something yourself. Hopefully this project post will help you find the way on your own when you go out on coding adventures on your own later on.

            <Db />

            In this post we will be doing som <i>linguistic analysis</i> . Linguistic analysis can mean many things, but we will focus primarily on using large amounts of text to explore some aspects of the English language; written American English, to be exact.
        </PostWrapper>
    </>
);

export default LinguisticAnalysisEn;