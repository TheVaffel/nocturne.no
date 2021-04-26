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
    </>
);