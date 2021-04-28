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
    </>
);