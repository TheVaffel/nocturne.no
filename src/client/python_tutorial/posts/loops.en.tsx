import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostHeader, NoticeBlock } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';


const LoopsEn = (props: TutorialPostProps) => (
    <>
    <PostHeader metadata={props.metadata} />

    In this post, we will review loops. Loops is, in many ways, the
    biggest reason that programming is such a useful tool.
    Loops makes it possible to run the same code many times, which
    enables us to process large amounts of data quickly.

    <h2><Ic>while</Ic>-loops</h2>

    Specifically, we will go through <Ic>while</Ic>-loops in this
    post. There is also another type of loops in Python
    - <Ic>for</Ic>-loops - which we will review in a later post.
    <Db />
    Loops are not very hard to understand, but it can take
    a long time to get used to thinking about and working with loops.
    Therefore, they are introduced on its own in this post, so
    that we have room to show a few examples to get the gears
    turning.
    <Db />
    A <Ic>while</Ic>-loop is of the form
    <CodeBlock>
        {`while <condition>:
    <loop block>`}
    </CodeBlock>

    It starts with a line that begins with <Ic>while</Ic>, followed
    by a condition, and ending with a colon. Then follows
    an indented block, just like we saw with the if-statement in
    the previous post.
    <Db />
    The <Ic>while</Ic>-loop is run like this:
    When Python comes to the line starting with <Ic>while</Ic>,
    it checks whether the condition is true. If it is true,
    Python runs through the code in the loop block. After having
    reached the end of the indented block, it goes <i>back</i> to
    the <Ic>while</Ic>-line and checks the condition again. If
    the condition is true now, it runs through the block again,
    and continues like this again and again until the condition is
    false when Python reads the <Ic>while</Ic>-line. When that
    happens, Python continues running the program from the first
    line <i>after</i> the loop block.
    <Db />
    One run through the loop block is called an <i>iteration</i>,
    which is the term we will use going forward.
    <Db />
    Let's jump right at an example:

    <CodeBlock>
        {`i = 0
while i < 5:
    print('Now, i = ' + str(i))

    i += 1`}
    </CodeBlock>

    When we run this code, we get:
    <CodeBlock>
       {`Now, i = 0
Now, i = 1
Now, i = 2
Now, i = 3
Now, i = 4`}
    </CodeBlock>
    Alright, so what happened?

    <Db />
    First, we define a variable <Ic>i</Ic> to be 0. <Ic>i</Ic> is
    a variable we will increment every time we traverse the
    loop block, and which we will use in the condition on
    the <Ic>while</Ic>-line. Then, we arrive at the <Ic>while</Ic>-line,
    and Python checks if <Ic>i</Ic> is less than 5. That
    is absolutely true, so we step into the loop block.
    Here, we run a <Ic>print()</Ic> statement, giving rise
    to the first output line, telling us that <Ic>i</Ic> is 0.
    <Db />
    At the end of the loop block, we see an operator we
    haven't seen before: <Ic>i += 1</Ic>. This is just
    a short form of <Ic>i = i + 1</Ic>, which just
    increments the value of <Ic>i</Ic> by one.

    <Db />
    Having reached the end of the loop block, Python returns to
    the <Ic>while</Ic> line, this time with <Ic>i</Ic> having the
    value 1.

    <Db />
    Python continues running the loop like this. As we can see in the
    output, the <Ic>print()</Ic>-line is run in each iteration of the loop,
    and the value of <Ic>i</Ic> is incremented by one each time.
    <Db />
    In the last iteration of the loop block, <Ic>i</Ic> is equal to 4. The
    value is written to screen as before, and <Ic>i</Ic> is incremented
    to 5. When Python then returns to the <Ic>while</Ic> line,
    it finds that the condition no longer holds. This is
    because the inequality
    operator <Ic>{`<`}</Ic> evaluates to false if the two values are equal.
    If we wanted to include an iteration for <Ic>i</Ic> set to 5, we could
    have used <Ic>{`<=`}</Ic> instead. After having
    found that the loop condition is false, Python jumps to after the
    loop block, and reaches the end of the program.
    <Db />
    When we reason about loops in programming, it's easy to do a miscalculation
    in what values will be used in the last iteration of the loop,
    often called by the common name <b>off-by-one</b>-errors.
    In the above code, it might be tempting to predict that <Ic>i</Ic> in
    the last iteration will have the value 5, although, as we discussed
    above, that is not the case.
    <Db />
    A useful way of avoid such errors, is by thinking thoroughly about what
    happens in the <i>first</i> and <i>last</i> iterations, and make
    sure it fits with the intentions you have with the code.
    <Db />
    Notice that we only need to change one number in the program to decide
    how many iterations to run. This is a re-occuring pattern in programming:
    If we are able to do something onnce, it is very easy to do it many times.
    The effort of doing the thing more than once, is handled by the computer,
    not the programmer. Try to change the 5 in the above program to e.g. 100
    and let Python do its job!

    <NoticeBlock>
        When writing your own <Ic>while</Ic>-loops, it's easy to forget to increment
        the variable you are using in your loop condition. In such cases, you may
        end up with Python running the loop again and again forever, since the condition
        never changes and stays true. If you see that your program uses an
        unreasonable amount of time, or prints out extremes amounts of output, it's
        very likely that this is the cause. Don't panic, it's not dangerous!
        <Db />
        To end such an infinite loop, you can interrupt the program. In IDLE, this
        can be done by clicking <Ic>{`Shell -> Restart Shell`}</Ic>,
        or <Ic>Ctrl+F6</Ic> (<Ic>Cmd+F6</Ic> on Mac) on your keyboard. If you
        are running the program in a terminal, you can usually use <Ic>Ctrl+C</Ic>.
    </NoticeBlock>

    <h2>We put a block inside a block</h2>

    In the following example, we will use the <Ic>%</Ic>-operator, also called the modulo operator.
    It is used with integers, and give the rest after dividing the left hand side by the right.
    This means that e.g. 5 % 3 gives 2 as an answer, and 7 % 2 gives 1.
    <Db />
    If you don't feel a hundred percent sure of how module computations work,
    the details aren't that important at the moment. What you need to know, is that
    if <i>a</i> % <i>b</i> gives the answer 0, then <i>a</i> is divisible by <i>b</i>, and
    in particular, this means that if <i>a</i> is an even number, <i>a</i> % 2 will give 0
    as the answer.
    <Db />
    Have a look at the following program:
    <CodeBlock>
        {`i = 0
while i <= 10:
    if i % 2 == 0:
        print(str(i) + ' is even')

    i += 1`}
    </CodeBlock>

    Here, we have thrown an if-statement into our <Ic>while</Ic>-loop, making our code write
    all even numbers from zero to ten, both inclusive, to screen:
    <CodeBlock>{`0 is even
2 is even
4 is even
6 is even
8 is even
10 is even`}</CodeBlock>
    It's not really anything mysterious about this code, we just have to breathe calmly and
    stay focused to be sure we understand what is happening:
    <Db />
    When Python arrives at the loop for the first time, <Ic>i</Ic> is 0. 0 is even, so
    that <Ic>i % 2</Ic> evaluates to true and the if-block is run, giving us
    an output line at the screen. Then the if-block ends, since the next line has
    less indentation than the <Ic>print()</Ic>-line. This causes the line <Ic>i += 1</Ic> to
    be run in every iteration of the loop, regardless of whether <Ic>i</Ic> is even or not:
    In the next iteration, <Ic>i</Ic> is 1, which is not an even number, causing the
    if-block not to be run, but the value of <Ic>i</Ic> is incremented to 2 nevertheless.
    <Db />
    Notice that we used <Ic>{`<=`}</Ic> in the <Ic>while</Ic> condition to ensure the last
    iteration had <Ic>i = 10</Ic>.
    <Db />
    As we can see above, there is no problem in combining <Ic>while</Ic> loops
    with if-statements. We can also insert more if-statements into the loop block.
    As an example, we could rewrite the above program to give special treatment for the
    number 2:

    <CodeBlock>
        {`i = 0
while i <= 10:
    is_even = i % 2 == 0;
    if is_even:
        if i == 2:
            print('2 is even, but we already knew that')
        else:
            print(str(i) + ' is even')

    i += 1`}
    </CodeBlock>

    Here, we have included a new if-statement. This if-statement is only checked by Python if the
    condition in the first if-statement is true. The new if-statement only checks if <Ic>i</Ic> is 2,
    and if so, writes a special message to the screen. Otherwise, Python writes the
    same as before. Output becomes:

    <CodeBlock>
        {`0 is even
2 is even, but we already knew that
4 is even
6 is even
8 is even
10 is even`}
    </CodeBlock>

    An attentative reader may have noticed that we created a new variable in the above code: <Ic>is_even</Ic>,
    which we have set to be equal to <Ic>i % 2 == 0</Ic>. We have then used the variable <Ic>is_even</Ic> directly
    as the condition in the <Ic>if</Ic>-statement. When we store a condition in a variable, the variable
    is of the datatype <Ic>bool</Ic>, short for <i>boolean</i>. A boolean variable is either true (<Ic>True</Ic> in Python)
    or false (<Ic>False</Ic>). The capitalization in <Ic>True</Ic> and <Ic>False</Ic> is important.
    <Db />
    The behaivour of the program is the same although we put the condition in a variable first, but it may make
    the code more readable. By rewriting the code like above, it is becomes more apparent to a reader that the point of
    the condition <Ic>i % 2 == 0</Ic> in the code, is to check whether a number is even. We won't care too much
    about readability in this blog series, but it is an important topic for anyone who want to code professionally;
    it is necessary for other people to collaborate on your code.

    <h2><Ic>break</Ic> and <Ic>continue</Ic></h2>

    Sometimes we can't be sure how long our loop needs to run, and sometimes we may want to skip iterations.
    The two commands <Ic>break</Ic> and <Ic>continue</Ic> come to our assistance! They are made
    to give us more control over how the loop is run.

    <h3><Ic>break</Ic></h3>

    When you write <Ic>break</Ic> on a line inside a loop, it quits the loop, and Python continues executing
    the program after the loop block. Let's say we want to find the first number larger than zero that
    is divisible by both 24 and 17. Then, our code could look like this:

    <CodeBlock>
        {`i = 1
while True:
    if i % 24 == 0 and i % 17 == 0:
        break
    i += 1

print('The number ' + str(i) + ' is divisible by both 24 and 17')`}
    </CodeBlock>

    The first thing you might notice, is that we have written <Ic>True</Ic> instead
    of a condition in the <Ic>while</Ic>-statement. This works fine because <Ic>True</Ic> in
    itself is a value of a condition (a boolean value) which always evaluates to true.
    In practice, this means that whenever Python reads the <Ic>while</Ic>-statement to figure
    out whether to run the loop block, it will find that the answer is <i>yes</i>. If we're
    not careful, this will lead the loop to never exit, but we have naturally thought of this:
    <Db />
    The if-statement inside the loop block evaluates to true if our number (the variable <Ic>i</Ic>) is
    divisible by both 24 and 17 - which is the kind of number we
    want. Thus, when this condition is true, we immediately run <i>break</i> to exit the loop. In this case,
    we know that the value in the variable <Ic>i</Ic> is the number we want, so that we can write
    it to screen after the loop.
    <Db />
    The output from the above program is
    <CodeBlock>
        {`The number 408 is divisible by both 24 and 17`}
    </CodeBlock>
    This is well and good, but now we wonder; what would the <i>next</i> number that fulfills this condition be?
    We rewrite the program to search for the next number. A way of doing this, would be to set the initial value
    of <Ic>i</Ic> to 409 to start the search from there, but we could also solve this by using <Ic>continue</Ic>.

    <h3>continue</h3>

    When we write <Ic>continue</Ic> inside a loop, Python starts directly at the next iteration, that is, it goes
    back to the <Ic>while</Ic>-line and evaluates the condition again, and continues execution accordingly.
    We can use <Ic>continue</Ic> to <i>skip</i> iterations we don't want to run. Thus, to find
    the <i>second</i> number that is divisible by both 24 and 17, after having found that the first is 408,
    is the following:

    <CodeBlock>{`i = 1
while True:
    if i == 408:
        i += 1
        continue

    if i % 24 == 0 and i % 17 == 0:
        break
    i += 1

print('The number ' + str(i) + ' is also divisible by 24 and 17')`}</CodeBlock>

    The only thing we have done here, is to put another if-statement at the beginning of the loop block.
    The purpose of this if-statement is to skip the iteration if <Ic>i</Ic> is 408, so that the next
    if-statement is not run, and loop continues the search beyond 408.
    <Db />
    It is tempting to just write <Ic>continue</Ic> alone inside the if-block, but this would cause
    the next iteration to also have a value of 408 in the variable <Ic>i</Ic>, and Python will
    enter the if-statement and run continue again and again forever, until someone stops the program by
    force. When running <Ic>continue</Ic>, we will skip all that is left of the loop block, including the
    line <Ic>i += 1</Ic>, which is what ensures that we will start anew with a new number
    in the next iteration. Thus, we need to make sure that the effect of this line is included
    also when we run <Ic>continue</Ic>, which is done by adding the line before the <Ic>continue</Ic>.
    <Db />
    <Ic>continue</Ic> may be a bit risky to run with <Ic>while</Ic>-loops, as we can see above.
    <Ic>continue</Ic> is easier to use with <Ic>for</Ic>-loops, which we will have a look at
    in a few posts.

    <h2>Loops in loops</h2>

    At last, we will look at an even more complicated example where we put a loop inside another loop
    block. If you already feel you have had your daily dose of loops (which is absolutely legitimate),
    you can skip this section and rather revisit it later, when you have had more experience in
    reasonning with loops.
    <Db />
    We will make a program that prints every prime number below 1000. A prime number is a number that is
    only divisible by itself and the number 1. The easiest way to find every prime number below 1000,
    is to work us through every number from 1 to 1000 and for each of those, check every number
    between 1 and the number itself to see if any of them divides the number. If no other number
    divides it, we know it is a prime number.
    <Db />
    The code looks like this:
    <CodeBlock>{`i = 2
while i < 1000:
    is_prime = True
    j = 2
    while j < i:
        if i % j == 0:
            is_prime = False
            break
        j += 1

    if is_prime:
        print(str(i) + ' is a prime number')

    i += 1`}
    </CodeBlock>

    There is much to digest here:
    <Db />
    First, we set <Ic>i</Ic> to 2. This is the variable we will increment in every iteration, and
    each time check whether it is a prime number. We start with 2 because 1 is not considered a prime number.
    <Db />
    Inside the loop, we have created a variable <Ic>is_prime</Ic>, which we have set to be true. The idea
    is that we start by "guessing" that <Ic>i</Ic> is a prime number, but if we ever find out in the
    inner loop that <Ic>i</Ic> cannot be a prime number, we set this variable to false. In addition, we
    are initializing the variable <Ic>j</Ic>, which we will use in iterating the inner loop. We will
    let <Ic>j</Ic> start from 2 and increment up to (but not included) the value of <Ic>i</Ic>, and check
    for every number whether it divides <Ic>i</Ic>.
    <Db />
    This divisibility check happens in the condition in the inner if-statement. If it happens to be the
    case that <Ic>j</Ic> divides <Ic>i</Ic>, we can say for sure that <Ic>i</Ic> is not a prime number, and
    we set <Ic>is_prime</Ic> to false and exit the loop. Be aware that running <Ic>break</Ic> inside a double
    loop only exits the <i>innermost</i> of the two.
    <Db />
    When we at last is done in the inner loop, we check the value of <Ic>is_prime</Ic>. If <Ic>is_prime</Ic> is
    true, it means that we did not find a number between 1 and <Ic>i</Ic> that divides <Ic>i</Ic>, so <Ic>i</Ic> must
    be prime. Otherwise, <Ic>is_prime</Ic> must have been set to false in the if-statement above because we found
    a number between 1 and <Ic>i</Ic> that divided <Ic>i</Ic>, and so we know that <Ic>i</Ic> is not a prime number.

    An easier way of thinking about this construction, is to only consider the large loop block (the one belonging
    to the first <Ic>while</Ic>-statement) in isolation first, and see whether you understand how it determines whether
    a number <Ic>i</Ic> is prime.

    <Db />
    That was a mouthfull! There are several easy mistakes that could occur in this code. For example, it's
    important to only check divisibility by numbers from 2 and to, but not included, <Ic>i</Ic>, since primes
    can be divisible by 1 and itself. If you understood everything in this section, you have a very good understanding
    of loops, which is definitely the hardest of the basic programming concepts.

    <h2>Summary</h2>

    Loops is an extremely powerful tool which can take time to master. Don't be afraid if you feel you are lagging
    behind; understanding loops is something that takes time. I would, nevertheless, recommend you to try the exercises
    at the end of this post, in order to be comfortable in writing loops on your own.
    <Db />
    This can be said to be among the most challenging posts in this blog. In the next post we will calm down
    a bit and talk about functions.

    <h2>Exercises</h2>

    Before going ahead with the exercises, I just want to remind you of the yellow notice block further up in this
    post. It gives you tips on how to stop infinite loops, should you happen to make them - and that is a very easy
    thing to do.
    <Db />

    1. Create a program that writes the square (that is, a number times itself) for all numbers from 1 to 10.
    <Db />
    2. Create a program that writes all square numbers that are less than 1000.
    <Db />
    3. Create a program that asks the user to provide a number, and then writes a sentence
    that many times to the screen.
    <Db />
    4 (Difficult). Create a guessing game - initiate a variable to a number between 0 and 100 that you choose yourself.
    Let the user try to guess the number, and tell them for each guess whether the number they guessed is
    too large or too small. Let the user guess anew until they get it right, and exit the program.

    </>
);

export default LoopsEn;
