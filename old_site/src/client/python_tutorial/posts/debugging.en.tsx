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
            After having finished implementing the code, and the program works like it should, you are, in the simplest cases, done. In practice, however, development often continues long after the program is up and running. This development usually focusses on adding more functionality and fixing errors that are discovered while the program is in use. We may call this part the <i>maintenance step</i>. In the industry, this is probably the step where most of the time is spent. For companies creating software with some kind of functionality, it often makes sense to add more functionality (to e.g. meet demands from the market) in the same software, rather than creating an entirely new one. This is also an important reason that it pays off writing <i>readable</i> code, which we will talk a little about here, and even more in later posts.
            <Db />

            Out of all the above stages, we will here focus on the <i>implementation step</i>, which will be the most laborious step in the beginning. More specifically, we will first discuss a bit about readability and then look closer at the part of the implementation step that usually takes the most time: Debugging.

            <h2>Readability</h2>
            
            <i>Readability</i> means how easy it is for someone who does not have the code freshly in mind, to understand what it does. Readability may seem unnecessary when you start out programming, but will be helpful both when someone else looks at your code, when you take a pause from a programming project and come back after a few days, or when the code is too big for you to have a good overview of everything at once. How easy it is to understand code, will of course depend on how big and complicated it is, but there are multiple things we can do to ensure readability even when the code is getting complex.
            <Db />
            The first and most important thing we can do, is to give reasonable names to our variables. This first and foremost means not to give too short names, but find meaningful and descriptive names for the content of the variables. This is something that becomes easier with training, and may be hard to be strict at in the beginning. You will benefit greatly from using longer, more descriptive names when you start working on larger programming projects, however.
            <Db />
            Another important way of gaining readability, is by splitting the code into logical parts with the help of <i>functions</i>. You don't need to think about this just yet, we will visit functions in a later post.
            <Db />
            The last tip for readability is to use <i>comments</i>. Comments is text that you can write in your code, which will not be read by Python when the program is run. In other words, comments can be used to describe the code, if needed.
            <Db />
            Comments are written as <Ic>{`# <comment>`}</Ic>. When Python3 finds a square <Ic>#</Ic> on a line, either at the beginning, or after some actual Python code, it will ignore everything written after the <Ic>#</Ic> on the line.
            <Db />
            To make a concrete example, have a look at the following code:
            <CodeBlock>{`if name == 'Alice':
    print('Hey, Ecila')`}</CodeBlock>

            You may understand what the code does, but not necessarily why the programmer chose to write this code. A comment may solve the mystery:
            <CodeBlock>{`# If the user is called Alice, reverse the name and write a greeting
if name == 'Alice':
    print('Hey, Ecila')`}</CodeBlock>
            Perhaps the reason for the code seems a bit weird, but we now have a better understanding of what the programmer was thinking when they wrote the code, since they were nice enough to provide us with this comment.
            <Db />
            Another use for comments is to deactivate ("comment out") code that is not in use. This is useful when you want to remove some part of the code and replace it with something else, but want to keep the old code close in case the new one turns out not to work. We will not use comments much in the following posts, but don't be afraid of making use of them when coding your own programs!

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

            Syntax errors are caught before the program is even run. Unfortunately, a lot of bad things may happen that cannot be predicted just by looking at the code. One example is the user giving you a general string when the program expects a number, ore perhaps you are trying to open a file that doesn't exist (we will talk about files in a later post). When such events occur, <i>runtime errors</i> arise. Python stops the program in these situations.
            <Db />
            When Python crashes the program because of a runtime error, it will output a message like this:
            <CodeBlock>{`Traceback (most recent call last):
  File "/home/user/path/to/program/test.py", line 11, in <module>
    print(int('tretten'))
ValueError: invalid literal for int() with base 10: 'thirteen'`}</CodeBlock>

            Once again, we are told at what line we should focus (line 11 in this case), and a short message about what went wrong. How this message looks and how descriptive it is, can vary strongly from error to error. In this case, we get to know that <Ic>int()</Ic> was not able to convert the string <Ic>'thrirteen'</Ic> to a number.
            <Db />
            When developing a program, there are two types of runtime errors that are particularily likely to occur, which we will mention here.
            <Db />
            The first is <Ic>NameError</Ic>, which signifies that the code uses a variable name that Python has not seen a definition for, in some operation. If you receive this error, it almost always means that you have a typo in your code, maybe as little as a mixup of a small and a big letter. Remember that the line at which Python tells you it found the error, the variable name may be correct, while the variable was misspelt when it was first defined so that Python does not recognize it when you spell it out correctly.
            <Db />
            The second common runtime error, is <Ic>TypeError</Ic>, which occurs when there is a mismatch between the datatype of the variable you use, and what type was expected in the operation in which you are using it. An example that we have already seen, is when we try adding together a string and a number. These errors will appear more often when we introduce the function concept, where there is often an implicit expectations of what type certain values must have.
            <Db />
            In most cases, type errors can be fixed by converting a value to the right type, while other situations require a larger re-evaluation of the code.
            <Db />
            In many other languages, name errors and type errors are found <i>before</i> the code is run. The reason this does not happen in Python, is that it cannot have an overview over what variables are defined an not at a certain point in a program, and not what types they have either, without running the code.  Languages that have stricter rules for variable definitions and use (e.g. C++, Java and Rust, to mention a few) can deduce such things from the code without running it.
            <Db />
            It is possible to predict and write code to handle such errors when they appear and avoid having the program crash, which we will have a look at in a later post.

            <h3>Logical Errors</h3>

            At last we talk about <i>logical errors</i>. A logical error is simply that your program does something else than what you want it to do. This usually appears from the output of the program - either because the program writes more, less or just something else than what you'd expect. Sadly, it says little about where the cause of the error is to be found - the error may be at the beginning of the program even if the effect is only visible at the end. 
            <Db />
            A logical error is what we often call a <i>bug</i>.
            <Db />
            Python cannot help you discover or pinpoint these kinds of errors; Python has just done exactly what your code says, which is not necessarily what you wanted your code to say. It is entirely your own responsibility to see if your program has done what you want and, if relevant, find the reason for why it does not.
            <Db />
            In practice, this is the error type that takes the most time to find and fix, and they become harder to find and fix the more complex your program is. The process of finding errors, first and foremost logical errors, is what we call <i>debugging</i>, removal of bugs. How to best debug your code depends entirely on what kind of error you have encountered, but there are some general methods that can be used in most cases.

            <h4><Ic>print</Ic>-debugging</h4>
            <Ic>print</Ic>-debugging is a relatively unsofisticated method of tackling the error by putting <Ic>print</Ic>-lines at different places in the program to see what parts of it is run, and to see what kind of values certain variables have at certain points. This method is simple, but usually very effective. Often we have some idea of what the program should do, and what the variables should contain at certain points in the code, which makes it easy to see if something is wrong when we write what the program is doing to screen while it is running. 
            <Db />
            Which variables and what lines in the code you should use for the print lines, is entirely specific to your program. If you don't know where to start, try to reason backwards from the output and print the variables that are used to create the erronous output to see if you can figure out the problem from there.

            <Db />

            For many programmers, <Ic>print</Ic>-debugging is the preferred method of debugging, and it is a method we recommend using when you first start touching upon logical errors.

            <h4>Debuggers</h4>

            Some more advanced editors often have built-in <i>debuggers</i>. Debuggers are systems that let you put "break points" one some lines in your code, to make Python stop when those lines are run and to let you inspect all the variables and their values at that point in time. Practically speaking, this is just a somewhat more convenient way of finding out how the program works than with <Ic>print</Ic> debugging, but it can require more setup to work.

            <h4>Rubber Duck Debugging</h4>

            Then there's <i>rubber duck debugging</i>. Get a rubber duck and put it on the table in front of you. Then go through your code step by step and explain to the rubber duck what the code does. Often you will end up at a place in the code where you realize that the code does not do what you want it to do. At this point you make changes to the code and run it anew. Repeat these steps until the program works exactly like you want it to. Remember thanking the rubber duck for the patience afterwards!

            <Db />
            You may have already guessed that it is not the rubber duck that is the important part here, even though we call this rubber duck debugging. In practice, you can use any object or person.
            <Db />
            This process forces you to think through what your code actually does and compare it to what you want it to do. This makes rubber duck debugging surprisingly effective, but it can take some time if the amount of code you need to go through is large. This method is mainly useful in situations where you don't have a good feeling of what values certain variables should have at certain times, or if you don't have an easy way of recreating the error. This is especially the case for complex programs, often with loads of mathematical operations that can be hard to study intuitively. Therefore, you will likely not need to use the rubber duck method at first, but it may be nice to know about.

            <Db />

            In addition to these methods, only fantasy sets limits for how you can debug your program. Sometimes sending special inputs may make the error easier to find, other times it may pay off to code the program to crash somewhere if some condition is satisfied. There is probably some obscure but effective way of debugging just the errors in your program, so don't be afraid to think outside the box!

            <h2>Tips and Tricks</h2>

            Finally, we will come forth with some informal tips that may be of great help when you get at programming going forwards.

            <Db />

            First of all: There is no shame in searching for answers on the Internet. Actually, many professional programmers do this a large portion of their time, just because it's almost impossible to have an overview of everything that may be relevant to the project they are working on.
            <Db />
            If you want to do some specific operation, but is unsure of how to write it in Python, try formulating it as a question and use the question as a search term in a search engine. If you get an error message when you run a program, you can use the entire error message as search text to find notes from people who have met the same problem. Many programming related questions are being answered at <a href="stackoverflow.com">StackOverflow.com</a>, which is a question/answer-page primarily directed towards programmers. It is commen to end up here after a search with any search engine with a programming related question.

            <Db />
            Apart from that, it is important not to lose patience. It may be tempting to do so when you spend loads of time figuring out an error that may seem entirely obvious in hindsight. Don't feel down if this happens to you, such embarrasing moments are common even for experienced programmers.

            <h2>Summary</h2>

            We haven't introduced that many new concepts here, just talked a bit about programming in practice. Hopefully you already have a few tags to pin this information to, but some of this will only become relevant when you learn more concepts and create larger programs throughout this series.

            <Db />

            Here's hoping you're ready for learning more programming! Next post will introduce loops, which is a very important concept within programming. It is when we explore loops that the real power of programming begins to appear.
        </PostWrapper>
    </>
);

export default DebuggingEn;