import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const ModulesEn = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Hi again! This will be the last post where we focus on introducing new concepts in this series. The next post will largely be about working through a complex example where we put together most of what we've learnt in one project.
            <Db />
            But before that, we need to talk about <i>modules</i>. Modules is the door into a world where we can create all sorts of programs by building on top of code written by others. Modules or similar concepts exist in all serious programming languages and are often known as <i>libraries</i>.
        </PostWrapper>
    </>
);

export default ModulesEn;