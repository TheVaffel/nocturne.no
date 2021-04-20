import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostHeader } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const UserInteractionAndConditionsEn = (props: TutorialPostProps) => (
    <>
    <PostHeader metadata={props.metadata} />
    In this post, we will explore how we can interact with a user of our program.
    The interaction we will discuss will be strictly text-based: The program writes something to
    the screen, and the user writes something back.
    As a part of the introduction to interaction, we will also introduce <i>conditions</i>,
    which is an important concept in programming in general.

    <h2><Ic>print()</Ic> and <Ic>input()</Ic></h2>

    As previously mentioned, our goal will be to create a program that writes text <i>to</i> the 
    user, and receives text <i>from</i> the user. The first part we have already peeked at, when
    we wrote our "Hello world!"-program. Let's have a look at that program again:

    <CodeBlock>
    {`print('Hello world!')`}
    </CodeBlock>

    After having read the previous post, you might recognize <Ic>'Hello world!'</Ic> as a string.
    The string is put inside the parantheses of <Ic>print()</Ic>. Here, <Ic>print()</Ic> is a function.
    We will expand upon what a function is in the near future. All you need to know for now, is 
    that we can write any value between the parantheses of the <Ic>print()</Ic> function
    to make Python write that value to screen.

    <Db />
    When we used the interactive console in the previous chapter, we could write any value or variable
    on a line on its own to make Python print it. In running programs, this will not work, and we will
    hav eto rely on <Ic>print()</Ic> to see the values.
    <Db />
    What about receiving input from the user? For this, Python has another function: <Ic>input()</Ic>.
    When Python runs and reads through a program, and it comes across a line with the <Ic>input()</Ic>-function,
    it will stop and wait for the user to write something. When the user has written something and pressed
    enter/newline, <Ic>input()</Ic> will be evaluated to a string containing the text that the user wrote.
    When the input is received, Python continues running the program.

    <Db />

    In practice, this means that in order to store the input text into a variable, we only need to write
    <CodeBlock>
        text_from_the_user = input()
    </CodeBlock>
    and subsequently do whatever we need to do with the variable <Ic>text_from_the_user</Ic> which is a string.
    <Db />
    Let's look at what using <Ic>print()</Ic> and <Ic>input()</Ic> in a program may look like:
    <CodeBlock>
        {`print('Write something!')
text = input()
print(text)`}
    </CodeBlock>

    Here, we prompt the user to write something, stores whatever the user writes into a variable, and print
    that text back to the user.
    Create a new file, fill it with the code above, save with a reasonable name, and run!
    The result will look something like this:
    <CodeBlock>
        {`Write something!
I am a potato
I am a potato`}
    </CodeBlock>
    Here, the second line is the user's sophisticated input and the last line is the program
    writing the input text back to screen, that is, the result of the <Ic>print()</Ic>-function in the
    last line of the code.
    <Db />
    We can be a bit more creative and create a small greeting to the user:
    <CodeBlock>{`print('Write your name!')
name = input()
print('Hi, ' + name + '!')`}
    </CodeBlock>

    which will look a bit like this on runtime:
    
    <CodeBlock>
        {`Write your name!
Voldemort
Hi, Voldemort!`}
    </CodeBlock>
    
    Here, we have used the plus operator to join together the reply string directly inside 
    the <Ic>print()</Ic> parantheses.

    <h2>Conditions</h2>

    When we talk about conditions in the context of programming, we
    generally refer to running a piece of code only if some condition is fulfilled
    or not. In Python (and many other languages), the most important mechanism for 
    conditions is <i>if-statements</i>.

    <Db />
    An if-statement is in the form 
    <CodeBlock>
        {`if <condition>:
    <code to run if the condition is fulfilled>`}
    </CodeBlock>
    
    There are multiple thing to take note of here:
    An if-statement always starts with the word <Ic>if</Ic>, and is then followed by a condition 
    (separated by a space from the word <Ic>if</Ic>). We will examine such conditions more closely in 
    very soon. The end of the first line is marked with a colon ":".
    <Db />
    The code to run when the condition is fulfilled, will be referred to as the if-block. It 
    can consist of arbitrarily many lines, but must contain at least one.
    The if-block must be <i>indented</i>. The easiest way of inserting an indent is by pressing
    tab (the key above the Caps Lock to the left on your keyboard). Alternatively, you can insert
    two or more spaces. It's important that you are consistent in whether you use tab or spaces,
    and, if using spaces, in how many spaces you use, or Python will be sure to let you know something is up.
    <Db />
    The if-block lasts until we arrive at a line of code where the code is no longer indented. If 
    the condition is fulfilled, and Python therefore ran the code in the if-block, it will
    continue running the unindented code right after it is done with the if-block. If the 
    condition is not fulfilled, Python will ignore the entire if-block and continue running
    from the first unindented line instead.
    <Db />
    So what does a condition look like? A typical condition is to check whether two values are equal.
    We can check whether two values are equal by using the <Ic>==</Ic>-operator, e.g. <Ic>a == 0</Ic>.
    This condition is fulfilled, or true, if the variable <Ic>a</Ic> has the value <Ic>0</Ic>, and 
    unfulfilled (false) if <Ic>a</Ic> has any other value (and the code crashes if <Ic>a</Ic> is undefined).
    There might be some mixup between <Ic>=</Ic> and <Ic>==</Ic> for beginners, but to be clear:
    The first is used to set a variable to a value, while the other checks whether two values are
    equal. Python will be sure to let you know if you get this wrong at some point.

    <Db />
    A program which uses an if-statement can look like this:
    <CodeBlock>
        {`a = 1
if a == 1:
    print('a was equal to 1!')
print('The program is finished, goodbye!')`}
    </CodeBlock>
    If we run this code, we get:
    <CodeBlock>
        {`a was equal to 1!
The program is finished, goodbye!`}
    </CodeBlock>

    Notice that the last <Ic>print()</Ic>-statement is without indentation, and therefore
    marks the end of the if-block. This line will be run regardless of whether <Ic>a</Ic>
    is <Ic>1</Ic> or not.
    <Db />
    This isn't a very exciting result, since we already know what <Ic>a</Ic> is beforehand.
    <Db />
    A (slightly) more exciting program is this: Using if-statements, we can make conditional
    greetings - a program that only greet certain users:
    <CodeBlock>{`print('Write your name:')
name = input()
if name == 'Larry':
    print('Hi, Larry!')`}
    </CodeBlock>
    Here, the program will only greet you if you tell it that your name is <Ic>Larry</Ic>. If you
    try writing anything else, the program will exit without printing anything else. Also, be aware
    that it will not recognize <Ic>larry</Ic> written in lower case either. The equality operator
    <Ic>==</Ic> checks that all letters are equal, and higher- and lower-case letters are considered different.
    <Db />


    </>
);

export default UserInteractionAndConditionsEn;