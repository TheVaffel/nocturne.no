import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostHeader } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';

const PrefaceEn = (props: TutorialPostProps) => (
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
    <Db />
    The goal of this blog series is to give you, my dear reader, an introduction to <b>programming</b> (or <b>coding</b>) in Python.
    I want to give you an understanding of how programming works, and what it can be used for.
    <Db />
    I've already spent way too much space defining the word <i>understanding</i> in the sentence above.
    Just like the process it is to <i>understand</i> a car, the process of <i>understanding</i> programming is never really finished,
    and you will likely have many questions left after having read through what I have to say, no matter how much I let my mouth (or fingers) run.
    <Db />
    Therefore, I first and foremost want to give you an introduction that is <i>good enough</i> to do a number of interesting things
    with programming, and that is <i>good enough</i> for you to be able to find the way forward with other resources 
    in order to learn about whatever you want.
    <Db />
    At the time of writing, I still haven't started on the programming content for this blog (but I will very soon, promise!).
    That means there's a chance that this blog is still unfinished when you start reading.
    I have no rigid plan regarding when new posts will be published, or even how many posts I want there to be in the end,
    but in the introductory part of this blog, I want there to be at most a few days, maximum a week between posts.
    You can keep an eye on the <a href="https://github.com/TheVaffel/nocturne.no">Github-page</a> for this website
    to get an idea of what part of this site I'm putting work into at each point in time (if I'm not going all-in on 
    some totally different project).
    <Db />
    At the end of this preface, I want to say something directly about programming: Programming consists of two main elements.
    The first is to learn the basic concepts and the "programmatic way of thinking", which are essential for making
    ideas into reality through programming. The majority of this blog is dedicated to help you with this part.
    However, in order to work with more advanced (and exciting?) concpts, like creating and drawing to windows,
    sound playback, creating web servers or any other thing you may want to make, you must also be able to 
    use other people's code as building blocks. A lot of things (like e.g. windows) are extremely inpractical to construct
    from scratch, especially in Python, such that making use of other people's code (often called <b>libraries</b>), is totally necessary.
    Searching for and reading the documentation for such libraries becomes easier with training, and examples of this
    will be given towards the end of this introduction.
    <Db />
    The fact that using other people's code is such a fundamental part of all things programming,
    means you need to be prepared for learning a lot when coding. Most, if not all, fields of study boast with
    the fact that "you will never learn everything", and this is absolutely also the case in programming as well.
    Searching for new knowledge is a very important part of coding.
    <Db />
    That's enough vague hand-waving for now, it's time to get some coding under our nails!
    <Db />
    Regardless of whether you have started on this blog with the concrete goal of learning programming for future use,
    or are just curious about what programming is (and whether it's up your alley), I hope you find what you are
    looking for in this blog!
    <Db />
    Good luck and have fun!
    
    </>
);

export default PrefaceEn;