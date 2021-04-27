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
    an indented block, just like we saw with the if-sentence in 
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

    

    </>
);