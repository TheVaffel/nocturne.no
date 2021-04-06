import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostHeader } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';

const PrefaceEn= (props: TutorialPostProps) => (
    <>
    <PostHeader metadata={props.metadata} />
    There's a lot by which to be annoyed in this world.
    <Db />
    One of the things I spend the most time being annoyed about, are all the things I don't understand in this world. And that's quite a lot.
    <Db />
    For instance, how does a car work? Fuel or electric energy goes in, smoke comes out, the wheels roll forward -
    but many questions still stand unanswered. If you're lucky, you may know a thing or two about how e.g. a traditional car turns
    gasoline into forward momentum, perhaps you even have an overview of the physical laws that are at play.
    <Db />
    But when do you <i>understand</i> how a car works?
    <Db />
    Where do you draw the line?
    <Db />
    Do I need to <i>understand</i> a car to talk about it?
    <Db />
    Do I need to <i>understand</i> a car to drive it?
    <Db />
    Do I need to <i>understand</i> a car to repair it?
    <Db />
    Do I need to <i>understand</i> a car to create it?
    <Db />
    You may have an opinion on where you would draw the line for what you agree on and not, but
    the word <i>understand</i> does not entail an exact criterium which must be fulfilled in order for something to be <i>understood</i>.
    <Db />
    What do we actually want to convey when boasting that we <i>understand</i> how a car works?
    I could have said it to convey that I know how the fuel moves inside the care, is burned and creates a forward momentum 
    (in other words, I would have lied).
    I could have pronounced the same sentence in order to tell you that I know where to push, step and turn in order to drive it 
    (also a lie, at the moment of writing).
    <Db />
    What it means to <i>understand</i> how cars work is seemingly dependent on what exactly I want to convey. It is the context
    that determines what the word <i>understand</i> means. The search for an <i>understanding</i> could be an eternal
    hunt for knowledge and relations, but in practice, there is always a level of knowledge that is <i>good enough</i> for
    each meaning of the world <i>understand</i>.
    <Db />
    <Db />
    Anyway, let's talk about programming.

    </>
);