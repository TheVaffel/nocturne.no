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
    </>
);

export default UserInteractionAndConditionsEn;