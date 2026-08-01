import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const UserInteractionAndConditionsEn = (props: TutorialPostProps) => (
    <>
    <PostWrapper metadata={props.metadata} >
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
    that it will not recognize <Ic>larry</Ic> written in lower case either. The equality operator <Ic>==</Ic> checks 
    that all letters are equal, and higher- and lower-cased letters are considered different.
    <Db />
    It's a bit rude of the program to just exit without saying anything, just because your name isn't Larry, isn't it?
    We can fix this with another form of the if-statement:
    <CodeBlock>
        {`if <condition>:
    <if-block>
elif <another condition>:
    <an else-if-block>
else:
    <an else-block>`}
    </CodeBlock>
    Here, we have included two new types of blocks in our if-statement!
    The first one, the <Ic>elif</Ic>-block can be read as "else, if", which requires
    its own condition.
    This "else, if"-sentence will only be evaluated if the condition in the original if-statement was not
    fulfilled. Otherwise, the elif-statement works just like the first if-statement: The associated
    block is marked by indentation and will only be run if the else-if condition is true.
    <Db />
    We can have as many <Ic>elif</Ic>-statements with blocks we want after the first if-statement, including
    zero. Python will only run the code in the first of the blocks where the associated condition is true,
    the rest of the blocks will be skipped.
    <Db />
    The last block is an <Ic>else</Ic>-block, which has no associated condition. The <Ic>else</Ic>-block
    will be run only if none of the preceding <Ic>if</Ic>- or <Ic>elif</Ic>-blocks where run.
    There can only be a maximum of one <Ic>else</Ic>-block in such a series of <Ic>if</Ic>- and <Ic>elif</Ic>-blocks.
    Out of all the blocks in an <Ic>if</Ic>-<Ic>elif</Ic>-<Ic>else</Ic>-series, only one can be run (and
    potentially zero, if there is no <Ic>else</Ic>-block).
    <Db />
    Let's make our program more responsive towards users whose name is not Larry:
    <CodeBlock>
        {`print('Write your name:')
name = input()
if name == 'Larry':
    print('Hi, Larry!')
else:
    print('You\\'re not Larry, go away!')`}
    </CodeBlock>
    Beautiful, now the user will get a response no matter what their name is! Notice
    that we have no <Ic>elif</Ic>-blocks here, only an <Ic>else</Ic>-block that makes sure
    we print something in the case where the condition in the introductory if-statement is not fulfilled.

    <h2>Input as an integer</h2>
    
    As already mentioned, <Ic>input()</Ic> will return the user's input as a string,
    which makes sense, since it will necessarily be given in text form. But what 
    if we want the user to give us a number, and we want to perform mathematical operations
    with the number? We cannot perform mathematics with a string directly, so we will
    first have to convert the string to an integer.
    <Db />
    In the same way that we used <Ic>str()</Ic> to convert an integer to a string in the previous
    post, we can use <Ic>int()</Ic> to convert a string to an integer. We could also use <Ic>float()</Ic> in
    order to convert the string to a floating point number instead, but we will only need integers here. 
    For example:
    <CodeBlock>
        {`print('How old are you?')
age_as_string = input()
age_as_number = int(age_as_string)
age_in_two_years = age_as_number + 2
print('In two years, you will be ' + str(age_in_two_years) + ' years old!')`}
    </CodeBlock>
    If we run this example, we get something like
    <CodeBlock>
{`How old are you?
67
In two years, you are 69 years old!`}
    </CodeBlock>

    In this program, we need to add two to the number the user gives us, in order 
    to inform them of how old they will be in two years. To do that, we ensure
    that we are working with numbers by converting the input string to an integer. After
    having computed the new age, we convert it back to a string and put it into
    the response text we send back to the user.
    <Db />
    If the string we try to convert with <Ic>int()</Ic> is <i>not</i> a number, Python will
    give us an error message. We will have a brief look at how we can handle such errors, and avoid 
    having the program crash, towards the end of this blog series.
    <Db />
    As a sidenote, we could have written the entire program above much shorter like this:
    <CodeBlock>
        {`print('How old are you?')
print('In two years, you will be ' + str(int(input()) + 2) + ' years old!')`}
    </CodeBlock>
    If you want a challenge, see if you can understand how this work!

    <h2>Different Ways of Creating Conditions</h2>
    At last in this post, we will look at different ways of making conditions. So far,
    we have only used the <Ic>==</Ic>-operator to compare two strings, but we have many
    more tools in the shed:
    <ul>
        <li><Ic>==</Ic> - makes the condition true if the values on the left and right of the operator are equal</li>
        <li><Ic>!=</Ic> - makes the condition true if the values are different</li>
        <li><Ic>{`>`}</Ic> - true if the left side is <i>larger</i> than the right</li>
        <li><Ic>{`<`}</Ic> - true if the left side is <i>smaller</i> than the right</li>
        <li><Ic>{`>=`}</Ic> and <Ic>{`<=`}</Ic> - works just like the bigger than- and less than-operators
        above, but are also true if the values are equal</li>
    </ul>

    The operators that compare the sizes of differnet values, will first and foremost be used to compare
    numbers.
    <Db />
    Let's create a program that prints a secret only if the user is old enough:
    <CodeBlock>
        {`print('How old are you?')
        
age = int(input())

if age >= 18:
    print('You are old enough! The secret is "https://www.youtube.com/watch?v=dQw4w9WgXcQ"')
else:
    print('You aren\\'t old enough, away with you!')`}
    </CodeBlock>

    You can check yourself that the program only gives the user the secret if they are 18 years old or older (or a liar).
    <Db />
    What if we want to make sure that the secret is only passed to people that are at least 18 years of age and go
    by the name Larry? There are multiple operators we can use to join together conditions to new conditions:
    <ul>
        <li><Ic>and</Ic> - evaluates to true only if the conditions before and after the operator are true</li>
        <li><Ic>or</Ic> - evaluates to true only if at least one of the conditions are true</li>
        <li><Ic>not</Ic> - evaluates to true if the following condition is false, and the other way around</li>
    </ul>

    With this, we can write the following program:
    <CodeBlock>{`print('How old are you?')
age = int(input())

print('What\\'s your name?')
name = input()

if age >= 18 and name == 'Larry':
    print('You\\'re old enough and called Larry! The secret is "https://www.youtube.com/watch?v=dQw4w9WgXcQ"')
elif not name == 'Larry':
    print('You\\'re not Larry, go away!')
else:
    print('Hi, Larry, you can come back when you\\'re old enough!')`}</CodeBlock>

    There are a lot of things going on here:
    <Db />
    First, we take the user's age as an integer and their name as a string.
    Then we have a series of three if- and else-blocks. The first is run if <i>both</i> the name 
    is <Ic>'Larry'</Ic> and the age is at least 18. If both of these are true, we give the user the secret.
    If one (or both) of these conditions are false, the first if-statement is evaluated to false, and Python
    continues by checking the <Ic>elif</Ic>-statement.
    <Db />
    The else-if-statement is true if the name is <i>not</i> <Ic>'Larry'</Ic>. Here, we could have used the
    <Ic>!=</Ic>-operator as well.
    If this statement is true, that is, if the name is not Larry, we ask the user to go away. Otherwise, if the name
    is Larry, Python jumps down to the last block in the if-else-statement series. This block is an else-block
    and will be run if none of the other statements in the series were true. If none of them were true,
    it must be the case that the user's name is 'Larry', but is not at least 18 years old, 
    and the message in the <Ic>print()</Ic>-
    statement fits the theme.
    <Db />
    The result is thus a program that behaves nicely as long as you tell it your name is Larry, and 
    even gives you a secret if your name is Larry and you are old enough.
    <Db />
    If you're not exactly sure how the code above works, you can try running it with different combinations of 
    name and age, and observe the behavior of the program.

    <h2>Summary</h2>

    Congratulations! You have read your way through yet another post!
    We will encounter if-statements and user interaction in mostly all posts going forward,
    so it will pay off to invest in getting a good understanding of these concepts, both for the sake
    of following this blog, but also programming in general.
    <Db />
    The next post will review loops, which is also an important part of understanding programming.
    With loops, the power of programming is starting to reveal itself for real.

    <h2>Exercises</h2>
    Now that we have learned different fundamental programming concepts, you can already start making your
    own small programs! These exercises are very voluntary, but are made as to help you make use of the concepts
    you have learnt.
    <Db />
    To be a good programmer, practical experience is of the essence. Therefore, if programming is 
    something you want to go on with in the future, I will absolutely recommend you to make an 
    attempt at the exercises, or program ideas that you come up with on your own.
    <Db />
    1. Create a program that computes how many years the user was / will be on his/her birthday this year,
        after the user has given their year of birth.
    <Db />
    2. Create a program that writes different messages if the user gives their name as Huey, Dewey and Louie,
    or a "default" message if the user writes anything else.
    <Db />
    3. Write a program that computes the BMI (Body Mass Index) of a user, given their height and weight.
    The formula for BMI is <Ic>weight / (height * height)</Ic>. Be aware: The height must be in meters,
    and will need to be handled as a float. The weight must be in kilograms. If you don't want the user
    to know these units of measurements themselves, you can do the conversion in the program.
    Check that the program computes the BMI of a person of 1.80 meters and with a weight of 80 kg to be 
    about 24.7. If you're feeling adventurous, you can also write a short message to screet assessing
    the health status of the user, based on the BMI:
    BMI between 18.5 and 25 is considered normal, lower may suggest that the user is underweight,
    while higher may mean overweight.
    </PostWrapper>
    </>
);

export default UserInteractionAndConditionsEn;
