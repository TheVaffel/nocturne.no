import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const InteractiveVariablesEn = (props: TutorialPostProps) => (
    <>
    <PostWrapper metadata={props.metadata} >
    In this post, we will go through what is perhaps the most fundamental concept of Python and 
    many other programming languages: Variables.
    <Db />
    But before we embark on <i>that</i> journey, we will first learn about <i>interactive</i> Python,
    which we will use actively in understanding variables afterwards.

    <h2>The Interactive Python Console</h2>

    In the previous post, we made a file, wrote code into it, and ran it as a program. This is
    mostly how we will work with Python going forward, but there is an alternate way of 
    using Python: The <i>interactive mode</i>.

    <Db />
    When at first you open IDLE, you will get a window with some text in it, looking a bit like this:
    <CodeBlock>{`Python 3.9.2 (default, Apr 10 2021, 20:34:18) 
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license()" for more information.
>>> `}</CodeBlock>
    The exact form of this text, will depend strongly on your operating system and Python version.
    Notice the <Ic>{`>>>`}</Ic> at the bottom - this is a prompt, inviting us to write something there. 
    This window is the <i>interactive Python console</i>, and here we will write some Python!
    <Db />
    Python is an <i>interpreted</i> language. The exact content of that term will be expanded upon
    in a later post, but an important aspect that we will make use of right away, is that Python is
    read line by line when it is run. In the interactive console, we can similarily write in code
    line by line and make Python run the code at each line immediately.
    <Db />
    To see how this work, let's write the line that constituted the program we made in the last post:
    <CodeBlock>{`print('Hello world!`}</CodeBlock>
    After having written this line into the interactive console, press newline / enter.
    It will look like this:
    <CodeBlock>{`>>> print('Hello world!')
Hello, world!
>>>`}</CodeBlock>
    
    The interactive console read the line and ran it, and we can see the result right away,
    just underneath where we entered the line of code.
    Finally, the console has written <Ic>{`>>>`}</Ic> on the screen once again, signalling that it
    is waiting for us to write the next line of code.
    <Db />
    You could write the same line again to get the same result, but it quickly grows old. Let's
    learn something new to write into the console!
    
    <h2>Variables</h2>
    In the context of programming, <i>variables</i> are names we give to values. Values could be numbers,
    text, lists etc. The idea is that we <i>store</i> values into variables, and subsequently use the
    variable names when refering to the values.
    <Db />
    Let's look at a few examples, before I've confused you too much: Write <Ic>a = 1</Ic> in the console.
    This line tells Python to put the value <Ic>1</Ic> into the variable <Ic>a</Ic>.
    <CodeBlock>
    {`>>> a = 1
>>>`}</CodeBlock>
    This is the general form of setting a variable to have a value:  <Ic>{`<variable name> = <value>`}</Ic>.
    Seemingly, nothing has happened.
    If we now write just <Ic>a</Ic> in the console, it should look like this:
    <CodeBlock>{`>>> a
1
>>>`}</CodeBlock>
    What we are doing here, is asking Python to give us the value of <Ic>a</Ic>, or <i>evaluate</i> <Ic>a</Ic>,
    and Python answers at the line below, that the value is currently 1, just like we said it should
    be on the previous input line.
    <Db />
    In comparison, try writing <Ic>b</Ic> in the console:
    <CodeBlock>
        {`>>> b
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    b
NameError: name 'b' is not defined
>>> `}
    </CodeBlock>
    Alright - apparently, something is amiss. The last line tells us what the main problem is: <Ic>b</Ic> is
    not defined. It makes sense that Python complains about this, we just told it to give us the value
    of the variable <Ic>b</Ic>, but we have never told it what the value of <Ic>b</Ic>, so it can't know!
    <Db />
    Variable names is something we can choose ourselves. They can contain letters and numbers, and also underscore
    (<Ic>_</Ic>), and they can be as long as we want. They can not, however, <i>begin</i> with a digit, and cannot
    include space. Thus, the names <Ic>a</Ic>, <Ic>number</Ic> and <Ic>HarryPotter_1</Ic> are all valid variable
    names, while the names <Ic>5number</Ic> and <Ic>two words</Ic> are invalid.
    <Db />
    We are free to choose whatever variable names we want, but in practice, it's always a good idea
    to choose a name that describes the value that the variable contains.

    <Db />
    A new experiment:
    Try writing <Ic>1 + 1</Ic> in the console:
    <CodeBlock>
        {`>>> 1 + 1
2
>>>`}
    </CodeBlock>
    We see that Python automatically compute the result of math expression it is given. In some sense,
    Python is an overcomplicated calculator - which programmers use to their advantage.
    We start seeing some of the strength of Python. Let's write <Ic>a + 1</Ic>:
    <CodeBlock>
        {`>>> a + 1
2
>>>`}
    </CodeBlock>
    Earlier, we defined <Ic>a</Ic> to hold the value 1, and Python replaces <Ic>a</Ic> with the number
    1 in order to compute the value of the expression. This works, assuming you didn't restart the console
    since you defined <Ic>a</Ic>. If you close the console, the variables you defined will not be saved.
    <Db />
    We have learnt (at least) two things: Python works very well as a calculator, and lets us 
    put values into names, which we can in turn use to everywhere where we would have used the values themselves!
    We can show a few more operations to show the flexibility of Python:
    <CodeBlock>
    {`>>> a = 1
>>> b = 2
>>> c = a + b
>>> d = b + c * a
>>> e = 1234.5 * 67890 * a
>>> a
1
>>> b
2
>>> c
3
>>> d
5
>>> e
83810205.0
`}
    </CodeBlock>
    The <Ic>*</Ic>-sign is the multiplication operator in Python, and in virtually any other
    programming language. Mathematical operations follow normal priority rules. As you can see in the 
    definition of the variable <Ic>d</Ic> above, <Ic>c * a</Ic> is computed before <Ic>b</Ic> is added.
    <Db />
    You can also give new values to variables that are already defined:
    <CodeBlock>{`
>>> a = 1
>>> a
1
>>> a = 2
>>> a
2
>>>`}
    </CodeBlock>
    When redefining variables like this, the variable will contain the last value it was given.

    <h2>Text Strings</h2>
    Variables can hold other values than just numbers. Throughout this blog series, we will see
    that a lot of weird things can be put into variables. We start here by looking at 
    strings of text, or just <i>strings</i>.
    <Db />
    Strings are nothing more than values that represent text.
    <Db />
    To define a string of text, we just write the relevant piece of text between two apostrophes.
    Let's dive right into an example in the interactive console:
    <CodeBlock>
        {`>>> 'Hello!'
'Hello!'
>>>`}
</CodeBlock>
    Not too much going on here; we asked Python to evaluate the string <Ic>'Hello!'</Ic>, and it was
    evaluated to be the string <Ic>'Hello!'</Ic>.
    <Db />
    As you might guess, perhaps because I've already hinted to it a couple of times, variables can hold 
    strings as well:
    
    <CodeBlock>
        {`>>> a = 'Hey there!'
>>> b = 'a'
>>> c = a
>>> a
'Hey there!'
>>> b
'a'
>>> c
'Hey there!'
>>>`}
    </CodeBlock>

    This code has potential for generating confusion.
    We stored the string <Ic>'Hey there!'</Ic> in the variable <Ic>a</Ic>,
    the string <Ic>'a'</Ic> in the variable <Ic>b</Ic>, and we set <Ic>c</Ic> to
    be equal to <Ic>a</Ic>, which in result makes it evaluate to <Ic>'Hey there!</Ic> as well.
    Here, "a" shows up both as a string, and as a variable name. We refer to the former without
    quotes, and the latter <i>with</i> quotes. In this case, and in general, the distinction is 
    important, since <Ic>a</Ic> and <Ic>'a'</Ic> may evaluate to different values, as here.
    <Db />

    Thus, every time you want to create a string, you must put it between apostrophes, otherwise Python will try
    to evaluate it as a variable.
    <Db />
    
    We can put two strings together by using the plus sign <Ic>+</Ic>. In the following example,
    we also show that we can create strings by using quotation marks (<Ic>""</Ic>) and that we can use
    backslash in front of an apostrophe (or a quotation mark) to tell Python that it does not 
    signify the end of the string.
    <CodeBlock>
        {`>>> a_string = "less children?\\""
>>> another_string = "He said \\"Do you need some help"
>>> another_string + a_string
'He said "Do you need some helpless children?"'`}
    </CodeBlock>
     Notice that the resulting string uses apostrophes and not quotation marks. Apostrophes are the standard
     way of marking a string in Python, and this blog series will adhere to that. You can choose yourself
     which of the two you prefer, but it is a good idea to use only one consistently. Another thing: A string
     that is opened with an apostrophe must be closed with an apostrophe, and the other way around.

     <h2>Data Types</h2>

     In the context of programming, numbers and strings are very different things. Formally, we say that
     they have different <i>data types</i>. We have seen that the plus operator can be used 
     both for numbers - for adding their values - and for strings - to join two together to a single one.
    <Db />
    What happens if we try to join a number and a string together?
    <CodeBlock>
        {`>>> a_number = 7
>>> a_string = ' clever boys'
>>> a_number + a_string
Traceback (most recent call last):
  File "<pyshell#8>", line 1, in <module>
    a_number + a_string
TypeError: unsupported operand type(s) for +: 'int' and 'str'`}
    </CodeBlock>
    Once again, Python makes sure we know something is wrong, and once again, the core problem is 
    seen at the last line: <Ic>TypeError: unsupported operand type(s) for +: 'int' and 'str'</Ic>.
    It tells us that the variable <Ic>a_number</Ic> is of the type <Ic>int</Ic> (short for <i>integer</i>),
    while <Ic>a_string</Ic>is of the type <Ic>str</Ic> (short for string), and that the operator
    <Ic>+</Ic> cannot be used with two operands of these two types.
    <Db /> 
    It can be argued that Python should know that we want to put our number and our string together
    to a new string, but the designers of Python has chosen to throw an error message in our faces instead.
    This is a pattern that is very common in programming: The language designers will try to 
    avoid <i>guessing</i> what the programmer meant at all cost in cases where it's unclear, and will rather 
    throw you an error. This might seem annoying, but for a programmer it is far less annoying to get an
    explicit error message, than ending up with a programming with weird behavior without
    any clue as to why.
    <Db />
    Some languages (e.g. Java) allow the programmer to just put a string and a number together with the 
    plus operator directly, so the Python designers' choice in this situation is absolutely debatable.
    <Db />
    Anyway, we still want to put together a number and a string, so how do we do that?
    The simplest would be to convert the number to a string, and then perform the above operation. To convert
    a number (or other data types) to a string, we can use the <Ic>str()</Ic>-operator:
    <CodeBlock>
        {`>>> number_as_string = str(a_number)
>>> number_as_string + a_string
'7 clever boys'`}
    </CodeBlock>
    And now it works! We could also have written <Ic>str(a_number) + a_string</Ic> directly.
    Here, <Ic>str()</Ic> is what we call a <i>function</i>, which is something we examine
    more closely in a later post. Be aware that <Ic>str()</Ic>  does not <i>change</i> the value
    in the variable <Ic>a_number</Ic>. After the operation above, <Ic>a_number</Ic> will still 
    contain the number <Ic>7</Ic>, while the variable <Ic>number_as_string</Ic> will contain
    the <i>string</i> <Ic>'7'</Ic>.

    <h2>Two types of numbers</h2>
    You might have noticed that I wrote <i>integer</i> in the above paragraph, rather than just <i>number</i>.
    This is because there are two data types in Python that represent numbers:
    <Db />
    The first is integer, or <Ic>int</Ic>, which we have been using most of the time in this post. Values of
    the type <Ic>int</Ic> represent integers, or "whole" numbers, such as 0, 1, 237 and negative integers like -13.
    But integers do not include fractions, like 0.1 or -21.3.
    <Db />
    To represent fractional numbers, we must use the datatype <b>floating point number</b>, or <Ic>float</Ic>.
    Python automatically interpret a number as a floating point number if it contains the decimal mark ".".
    We did see one example of floating point numbers above, but here is another one:
    <CodeBlock>
        {`>>> a = 0.3
>>> b = 10
>>> a * b
3.0`}
    </CodeBlock>
    Here, <Ic>a</Ic> is a floating point number and <Ic>b</Ic> is an integer. When Python computes an operation
    that involves both a float and an integer, the answer will be a float. We see this above from the decimal
    mark in the result, even though the result is a whole number. Also, the answer from a division between
    two integers will also always be a float (see the example below).
    <Db />
    If you ever get confused as to what types your variables have, fear not! You can use the <Ic>type()</Ic>-function
    to find the type of a variable, or just a value:
    <CodeBlock>
        {`>>> a = 1
>>> b = 2
>>> c = a / b
>>> d = 'hallo'
>>> type(a)
<class 'int'>
>>> type(b)
<class 'int'>
>>> type(c)
<class 'float'>
>>> type(d)
<class 'str'>`}
</CodeBlock>
    It's tempting to ask why we can't use floating point numbers instead of integer everywhere,
    since floats can do seemingly everything an integer can, in addition to representing fractions.
    In short, you should not. First and foremost because floats have limited <i>precision</i>. Let's
    see what that means:
    <CodeBlock>
        {`>>> 0.1 * 0.1
0.010000000000000002`}
    </CodeBlock>
    As any human with a certain level of familiarity to numbers could tell you, the answers here 
    should be <Ic>0.01</Ic>, but Python seems to have added a tiny bit more to the result. This is 
    not Python's fault, but a consequence of how numbers are represented on the computer. Results from
    floating point operations should not be treated as exact, only approximate. 
    <Db />
    Another reason to be careful when using floats, is that floats can only remember a certain number
    of digits. If e.g. the numbers you are handling are very large, the floating point numbers will be unable
    to represent small changes, for example:
    <CodeBlock>{`>>> 1e16 + 1
1e+16`}</CodeBlock>
    Here, <Ic>1e16</Ic> means a 1 followed by 16 zeroes, interpreted as a floating point number.
    It is indeed a very large number! In fact, it's so large that the computer can only handle the first
    digits, and does not have digits concerned about whatever is on the right-most zero, it is just assumed
    to be zero. Therefore, since adding 1 would only change the right-most zero, the computer 
    is unable to differ between the first operand and the result.
    <Db />
    This is a somewhat simplified explanation, since computers do not directly represent every position in 
    our human decimal number system (base-10 system), but rather uses a binary number system (base-2 system).
    The explanation still gives the right intuition. Had we used a large integer instead, we would have
    gotten a precise result back.

    <h2>Summary</h2>
    That was a mouthful of information! Throughout this post, we have learnt about the interactive Python
    console, variables and data types, plus a deep dive into the difference between integers and floating
    point numbers.
    The Python console can be very useful for trying out new things, to perform demonstrations and run tests, and
    you can use it to explore all that we will learn in the coming posts.
    <Db />
    We will not, however, be using the console much more in this series explicitly, because in the next
    post, we will start writing programs. We are going to learn how to receive input from the user and give
    back output that depends on what the user wrote. It's time for user interaction and conditionals!
    </PostWrapper>
</>);

export default InteractiveVariablesEn;
