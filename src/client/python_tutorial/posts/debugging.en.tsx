import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const DebuggingEn = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Before jumping on introducing more Python concepts, we will put aside some time to talk about the development process in practice. Then we will talk more closely about something that will definitely be of use when you work with exercises further into this series, and when you create your own programs: debugging.
            
            <h2>Development in Practice</h2>
            
            This may seem like obvious information to some, but we include a short section about how we create programs in general. Here is a rough explanation of how a program is usually born in practice:

            <Db />
            It starts with an idea about what you want to create. If you follow this series, you will be given examples of "ideas" in the exercise sections of each post. However, ideas can of course come from anywhere, including yourself.

            <Db />
            The next step is planning out the structure of the program. This involves tracing the big lines - figuring out what overarching steps your program must go through in order to realize the idea. You don't need to think about code at this point, only focus on the larger steps, which for a simple program could be input, computation and output. This part may not be too relevant in the exercises you do in the beginning, but will be more and more useful when the programs become larger and more complex. Then it will also be easier and make more sense to think of it as a series of larger and more extensive steps.
            <Db />
            Then comes the <i>implementation step</i>, where you code (implement) the program itself. This step may be very time consuming. Sometimes it will be because there is a lot of code that must be written, while other times (and especially in the beginning), it is because errors appear in the code, that may take time to straighten. Don't be afraid if you feel that you spend much of your time fixing errors, it is not uncommon that the majority of time is spent on this.
            <Db />
            After having finished implementing the code, and the program works like it should, you are, in the simplest cases, done. In practice, however, development often continues long after the program is up and running. This development usually focusses on adding more functionality and fixing errors that are discovered while the program is in use. We may call this part the <i>maintenance step</i>. In the industry, this is probably the step where most of the time is spent. For companies creating software with some kind of functionality, it often makes sense to add more functionality (to e.g. meet demands from the market) in the same software, rather than creating an entirely new one. This is also an important reason that it pays off writing <i>readable</i> code, which we will talk more about in later posts.
            <Db />

            Here, we will concentrate a bit more on the <i>implementation step</i>, which will be the most laborious step in the beginning. More specifically, we will look closer at the part of the implementation step that usually takes the most time: Debugging.
            
            <h2>Bugs and Debugging</h2>

            If you put your newly-found skills to the test on some of the exercises in the previous post, you may already have discovered how exact you need to be when writing code in order for Python to accept and run the program. There are a multitude of different error types our program may run into. We talk about each of them here, and provide some advice on how to tackle them.

            <Db />

            In this post, we put errors into three categories:
            <ul>
                <li>Syntax errors</li>
                <li>Runtime errors</li>
                <li>Logical errors</li>
            </ul>

            Because you, similarily to all other programmers, are a non-perfect human, the chance of meeting all of these errors sooner or later, is very large. In the following sections, we will discuss each of them, what signifies them, and what to do about them.
            
            <h3>Syntax Errors</h3>

            Before Python starts running your program, it will read through all the code once in order to <i>parse</i> it. The parsing involves identifying the constituents of the program - Python figures out what letters and symbols in the code belong to what linguistic components, e.g. what parts are variable names, what parantheses belong to each other, and where the if-blocks are and what they contain. During this process, you may encounter <i>syntax errors</i>.

            <Db />
            Syntax errors means that your program does not fulfill the grammatical rules of Python. It may be that you are missing a terminating paranthesis, that you have forgotten to indent an if-block or similar. In these cases, Python will do you a solid one and tell you where in the file the error was found. If you, say, forget a colon after the if-line like this:
            <CodeBlock>{`if 1 == 2
    print('1 seems to equal 2')`}</CodeBlock>
            Python will tel you that

            <CodeBlock>{`  File "/home/user/path/to/program/test.py", line 1
    if 1 == 2
             ^
SyntaxError: invalid syntax`}</CodeBlock>

            You are given a small arrow (<Ic>{`^`}</Ic>) that tells you exactly where on the line there was found an error. Be aware - this arrow can be misleading, it only tells you where Python found out that something was amiss, and not necessarily where you need to change the code in order to fix it. This is particularily the case with parathesis errors, where Python may often complain about the line <i>after</i> where the parathesis was forgotten. If you are told you have syntax error, but have trouble finding out what's wrong, there's a great chance that the error resides on the line above.

            <Db />

            Much of Python's nitpicking may seem unnecessary. Often it should be pretty obvious what you meant to write, e.g. when you miss a parathesis at the end of a line. The reason Python complains nevertheless, is that Python requires the program to be entirely <i>unambiguous</i> in order to run it. This is not to annoy the programmer, rather the opposite. The programmer should be in full control of what the program does, and is responsible for everything that is written there. If Python starts filling in and correct you code, it is a short way before it starts doing something the programmer doesn't ask for or doesn't want Python to do. And that kind of erronous behavior can be far harder to figure, than being prompted to just correct the grammar to begin with.

            <h3>Runtime Errors</h3>

            Syntax errors are caught before the program is even run. Unfortunately, a lot of bad things may happen that cannot be predicted just by looking at the code. One example is the user giving you a general string when the program expects a number, ore perhaps you are trying to open a file that doesn't exist (we will talk about files in a later post).
        </PostWrapper>
    </>
);

export default DebuggingEn;