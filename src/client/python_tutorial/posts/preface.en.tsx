import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostHeader } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';

const PrefaceEn = (props: TutorialPostProps) => (
    <>
    <PostHeader metadata={props.metadata} />
    Welcome to an introduction to Python!
    <Db />
    The goal of this blog series is to give you an introduction to <b>programming</b> (or <b>coding</b>) in Python.
    I want to give you an understanding of how programming works, and what it can be used for.
    <Db />
    The word <i>understanding</i> is boldly vague, and is, all in all, difficult to define precisely.
    Here is another (possible even more vague) perspective: I want to give you an introduction that
    is good enough that you become able to do a plethora of interesting things with Python <i>and</i> that you
    become able to find your way further on with other resources to learn more about <i>exactly</i>
    what you find the most interesting.
    <Db />
    At the time of writing, I still haven't started on the programming content for this blog (but I will very soon, promise!).
    That means there's a chance that this blog is still unfinished when you start reading.
    I have no rigid plan regarding when new posts will be published, or even how many posts I want there to be in the end,
    but in the introductory part of this blog, I want there to be at most a few days, maximum a week between posts.
    You can keep an eye on the <a href="https://github.com/TheVaffel/nocturne.no">Github-page</a> for this website
    to get an idea of what part of this site I'm putting work into at each point in time (if I'm not going all-in on 
    some totally different project). At that page, you can also give me suggestions for improvements
    in case you find something in the blog unclear or uncomfortable. There is a chance that this blog
    gets its own comment field at some point in the future. In that case, the discussion
    will be conveniently moved here.
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