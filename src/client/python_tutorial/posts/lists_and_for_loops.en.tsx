import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const ListsAndForLoopsEn = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Here we will introduce lists, which will let us handle large amounts of data in our programs. Then we will introduce <Ic>for</Ic>-loops, which gives us an easy way to iterate through lists.

            <h2>Lists</h2>

            <i>Lists</i> are objects that can contain zero, one, or more values, called <i>elements</i>. We can create a list in the folowing way:
            <CodeBlock>{`[<first element>, <second element>, <third element>...]`} </CodeBlock>
            In other words, a comma-separated list of zero or more elements, surrounded by square brackets <Ic>[]</Ic>. For example, we may write
            <CodeBlock>{`a_list = [1, 4, 9, 'hello', True]`}</CodeBlock>
            to create a list with five elements and put it in the variable <Ic>a_list</Ic>. The list we have created here, contains values of different data types: Integers, a string and a boolean value. We are fully allowed to mix values of different data types in the same list in Python, but it is the most common case that all the elements are of the same type. The list itself has the datatype <Ic>list</Ic>.
            <Db />
            One of the most common operations we want to perform on lists, is to read the values they contain. We can do this by writing a couple of brackets after the list with a number, an <i>index</i>, which specifies what element we want:
            <CodeBlock>{`a_list[<index>]`}</CodeBlock>
            Python and most other programming languages use a somewhat special convention: The first element in the list has index <b>0</b>. The second element then has index 1, the third has index 2 and so on. For instance, we may write
            <CodeBlock>{`a = a_list[0]
b = a_list[1]
c = a_list[4]`}</CodeBlock>

            If <Ic>a_list</Ic> is as defined above, <Ic>a</Ic> will be set to 1, the first element in the list. <Ic>b</Ic> will be set to the second element in the list: 4. <Ic>c</Ic> is set to <Ic>True</Ic>, which is the fifth and last element in the list.
            <Db />
            It might take a while to get used to lists starting on index 0, and thus that the last element has index equal to the length of the list minus one (just like index 4 gives the last element in the list above, even though the list has 5 elements). Fortunately, this is a consequent phenomenon in Python and other languages, which we will get to see more of later in this post when talking about the <Ic>range()</Ic>-function.
            <Db />
            In addition to getting elements out of the list, we can also change the elements in the list by using an index as above, and place it on the left side of the <Ic>=</Ic>-operator:
            <CodeBlock>{`a_list[3] = 0`}</CodeBlock>
            Now the list contains the elements 1, 4, 9, 0 and <Ic>True</Ic>: In other words, we have replaced element number four (at index 3), which was <Ic>'hello'</Ic>, with the integer 0.
            <Db />
            Python will throw an error in your face if you use an index that is outside the extent of the list - for example, you should not try to use index 5 on the list above if you want to stay on Python's good side.

            <h2>A Couple of Functions that We Can Use with Lists</h2>

            We have already seen how to change elements that are in the list, but how about adding more elements? Lists have the member function <Ic>append()</Ic>, which lets us add another element at the end of the list:
            <CodeBlock>{`a_list = []
a_list.append(3)
a_list.append(2)
a_list.append(1)
print(a_list)`}</CodeBlock>
            
            Here, we begin by creating the variable <Ic>a_list</Ic> and set it to <Ic>[]</Ic>, which is just a list that does not contain any elements. Then we add one and one element on the following lines. At the last line, we write the list to screen: <Ic>print()</Ic> allows us to use lists as arguments directly, which makes it easy to write them to screen to check what they contain. We receive:
            <CodeBlock>{`[3, 2, 1]`}</CodeBlock>
            As we can see, the elements lie in the same order as we appended them to the list.

            <h2>Lists and loops</h2>

            We are often interested in doing some operation on every element in a list, e.g. writing each to its own line. We can do this with a <Ic>while</Ic>-loop. In order to tell the <Ic>while</Ic>-loop when it should stop, we need to know the length of the list. We can get this by calling the function <Ic>len</Ic> with the list as an argument. For instance, <Ic>len([])</Ic> will give 0 as a result, since it is used on an empty list, while <Ic>len([1, 2, 3])</Ic> will give 3 as an answer. To go (or <i>iterate</i>) through a list, we can thus do as follows:
            <CodeBlock>{`a_list = [2, 3, 5, 7, 11]
i = 0
while i < len(a_list):
    print(a_list[i])
    i += 1`}</CodeBlock>
        Here, we first create a list with a few numbers, and set our iteration variable <Ic>i</Ic> to 0. The condition in the <Ic>while</Ic>-statement says that the loop is to run as long as <Ic>i</Ic> is less than the length of the list, which is 5 in this case. For every iteration in the loop, we run <Ic>print(a_list[i])</Ic>, in other words, we print the element at index <Ic>i</Ic> in the list to the screen. Since <Ic>i</Ic> is an integer that starts at 0 and increments up until the length of the list, this will eventually write all the elements in the list to the screen. As usual, the value of <Ic>i</Ic> is incremented by 1 in every iteration of the loop. The result becomes:
        <CodeBlock>{`2
3
5
7
11`}</CodeBlock>
        It may take some effort to see that this code actually iterates through all the elements in the list. The essence is that we start at 0, which is the first index in the list, and continue upwards until (but not included!) the length of the list. <Ic>i</Ic> will be equal to the length of the list minus one in the last iteration of the loop. This is exactly the index of the last element of the list! If you find this troublesome to reason about at this point, worry not. Iterating through loops will be easier when we introduce <Ic>for</Ic>-loops in a bit.
        <Db />
        Another example - this code creates a list and computes the sum of its elements:
        <CodeBlock>{`a_list = [1, 2, 3, 4, 5, 6, 7]
i = 0
sum = 0
while i < len(a_list):
    sum += a_list[i]
    i += 1

print('The sum is', sum)`}</CodeBlock>

        Here we have created the variable <Ic>sum</Ic> that starts at zero and then is incremented by each element in the list in order using the <Ic>+=</Ic> operator, so that it eventually holds the sum of all the elements in the list, which is printed to screen on the last line.
        <Db />
        Python has the built-in function <Ic>sum()</Ic>, which we could have used to write the above program as <Ic>print('The sum is', sum(a_list))</Ic>, but we have written it with a loop above for the sake of demonstration.
        <Db />
        Finally, we show a more complex example. The code below asks the user to write a series of names, which are put in a list, until the user writes "done". Then the list is sorted, and the names are written back to the user on their separate lines.
        <Db />
        An adventurous soul might have implemented a sorting function that sorts the list on their own, but we will resort to use the function <Ic>sort()</Ic>, which is a member function on lists. <Ic>sort()</Ic> is often used with lists of numbers, but we can also us it on lists of strings, in which case it sorts the list alphabetically:
        <CodeBlock>{`name_list = []

while True:

    name = input('Write a name or "done": ')

    if name == 'done':
        break

    name_list.append(name)


name_list.sort()

i = 0
while i < len(name_list):
    print(name_list[i])

    i += 1`}</CodeBlock>

        Apart from the function <Ic>sort()</Ic> there is nothing new here, although this example is a bit more complex that the ones we have seen so far. See if you can understand how this program performs what was described above!

        <NoticeBlock>Note: When comparing two characters in Python and other programming languages, all upper-case letters will be sorted before all lower-case letters. Thus, the string "Bob" will be put before the string "anna" during sorting.</NoticeBlock>

        <h2><Ic>for</Ic>-loops</h2>

        From the above example, a repetetive pattern emerges. We write several <Ic>while</Ic>-loops on the form
        <CodeBlock>{`i = 0
while i < len(<some list>):
    ...
    
    i += 1`}</CodeBlock>
        We quickly grow tired of writing those lines again and again. In addition, there are many details that can be easy to miss. As an alternative, we could use <Ic>for</Ic>-loops.
        <Db />
        <Ic>for</Ic>-loops are written in the following way:
        <CodeBlock>
            {`for <iteration variable> in <list>:
    <loop block>`}
        </CodeBlock>
        The first line begins with (as you might have already guessed) <Ic>for</Ic>, followed by a variable name, which we can choose freely. This variable will act as our iteration variable. Then follows the word <Ic>in</Ic>, and then the list we want to iterate through. The first line ends with a colon. Then follows the loop block, written with indentation as usual.
        <Db />
        The <Ic>for</Ic>-loop works in the following way: The loop block is run once for each element in the list. For each iteration, the iteration variable is set to the corresponding <i>element</i> in the list. This stands in contrast with the iteration variable we have used in the <Ic>while</Ic> loops we have seen so far, where the iteration variable was the index.
        <Db />
        We can rewrite the example that writes every element to separate lines with a for loop like this:
        <Db />
        <CodeBlock>
            {`a_list = [2, 3, 5, 7, 11]
for e in a_list:
    print(e)`}
        </CodeBlock>
        See how much simpler it is now! Now the iteration variable <Ic>e</Ic> is set to the elements 2, 3, 5, 7, and 11 successively in the iterations, so that they are written to the screen, one on each line. I will use the variable name <Ic>e</Ic> for <i>element</i> to specify that it contains the <i>elements</i> in the list, and not <i>indexes</i>.
        <Db />
        Here is the summing program, revitalized with a <Ic>for</Ic>-loop.
        <CodeBlock>{`a_list = [1, 2, 3, 4, 5, 6, 7]
        
sum = 0
for e in a_list:
    sum += e
    
print('The sum is', sum)`}</CodeBlock>
        
        Compared to the corresponding code above, this one is much easier to read, and there is less room for writing something wrong by mistake.

        <h2>The <Ic>range()</Ic> function</h2>


        Let's say we have a list of names and want to write the names on separate lines together with the number of the name in the list. With a <Ic>while</Ic> loop, we could have done as follows:
        <CodeBlock>{`names = ['Bam', 'Rachel', 'Beelzebub']

i = 0
while i < len(names):
    print(i + 1, names[i])
    i += 1`}</CodeBlock>
        
        Notice that we have written <Ic>i + 1</Ic> in the <Ic>print()</Ic>-call in order to make the ordering start at 1 instead of 0.
        <Db />
        We can't rewrite this to use a <Ic>for</Ic>-loop directly, because we need both the element and the index, while the iteration variable in the <Ic>for</Ic>-loop will only gives us the element. In these cases, we can use the <Ic>range()</Ic>-function.
        <Db />
        The <Ic>range()</Ic>-function gives us a series of integers from some starting point to some ending point. For example, the call <Ic>{`range(3)`}</Ic> gives us the numbers from 0 inclusive, until 3 exclusive (so only the numbers 0, 1, 2). We can also add a starting point as the first argument, which makes the second argument the upper limit: <Ic>range(3, 5)</Ic> gives the numbers from, and including, 3 to, but <i>not</i> including 5, in other words, just the numbers 3 and 4. We can use <Ic>range()</Ic> directly with <Ic>for</Ic> loops like this:
        <CodeBlock>{`for i in range(10):
    print(i)`}</CodeBlock>
        This code just writes the numbers 0 to 9 out on separate lines, but with a very small amount of code! This is the preferred way of iterating through a contiguous range of numbers.
        <Db />
        To recreate the example above with <Ic>for</Ic>-loops, we can use <Ic>range()</Ic> like this:
        <CodeBlock>{`names = ['Bam', 'Rachel', 'Beelzebub']

for i in range(len(names)):
    print(i + 1, names[i])`}</CodeBlock>

        Remember that <Ic>len()</Ic> gives the length of the list. Thus, <Ic>range(len(names))</Ic> gives a series of numbers from and including 0, to, but not including, the length of the lits. This fits very well with how indexing in lists work: The valid indices we can use with a list start at 0 and goes up to, but not included, the length of the list. Therefore, <Ic>range(len(names))</Ic> gives us only the valid indices we can use with the list, which in turn makes the code do the same as the original example which used a <Ic>while</Ic>-loop. Even in this example, we were able to reduce the number of lines using a <Ic>for</Ic>-loop.
        <Db />
        Another case in which we can use the <Ic>range()</Ic>-function, is the when we need to iterate through two lists at the same time, for instance when we want to combine pairs of corresponding elements from the two lists with some kind of operation. <Ic>for</Ic>-loops can only iterate through one list at a time. To iterate through two lists at the same time, it's easier to use indices.:
        <CodeBlock>{`names = ['Bam', 'Rachel', 'Beelzebub']
ages = [13, 14, 4521]

for i in range(len(names)):
    print(names[i], 'is', ages[i], 'years old')`}</CodeBlock>
        By using the same index in both lists, we can combine corresponding elements in the same <Ic>print()</Ic>-sentence in the loop block.
        <Db />
        Strictly speaking, <Ic>range()</Ic> does not return a list, but an <i>iterator</i>. The difference is mainly that an iterator not necessarily contains all the elements, but only generates them as they are needed, which may save a lot of memory when there are extremely many elements in play. <Ic>for</Ic>-loops works both with lists and iterators, so this difference is not important right now.

        <Db />
        We can also use <Ic>break</Ic> and <Ic>continue</Ic> in <Ic>for</Ic>-loops. Remember that <Ic>break</Ic> jumps out of the the whole loop, while <Ic>continue</Ic> skips to the next iteration. As opposed to the case with <Ic>while</Ic>-loops, Python will automatically use the next element in the next iteration when we jump forth with <Ic>continue</Ic> in a <Ic>for</Ic>-loop.
        <Db />
        Here is an example that writes all positive numbers below a hundred that are divisible by 8 and 12, where we use <Ic>continue</Ic> to skip numbers that do not fulfill the criteria.
        <CodeBlock>
            {`for i in range(1, 100):
    if not (i % 8 == 0 and i % 12 == 0):
        continue
    print(i)`}
        </CodeBlock>

        It may feel more natural to create an if-statement with the condition <Ic>i % 8 == 0 and i % 12 == 0</Ic> inside the loop, and put the <Ic>print()</Ic>-call inside that if-statement instead - the code above is written with a <Ic>continue</Ic> for the sake of demonstration.

        <h2><Ic>for</Ic> or <Ic>while</Ic>?</h2>

        Now that we have provided two ways of writing loops, a natural question arises: Which one should we use? In the majority of cases, <Ic>for</Ic>-loops are the best choice. This is particularily true when iterating through a list or some given interval of integers.
        <Db />
        In the cases where you don't know how many iterations the loop will run, it will be better to use <Ic>while</Ic>-loops. This can be a good idea e.g. if the loop is terminated when the user gives a specific input, or when you search for some number, but have no upper bound of how big that number can be.

        <h2>Strings as Lists</h2>

        We can also treat strings like lists, to some degree. For example, we may use indices to get specific characters in the string:
        <CodeBlock>{`string = 'hello'
first_letter = string[0]`}</CodeBlock>
        Here, <Ic>first_letter</Ic> will contain <Ic>'h'</Ic>, which is also a string.
        <Db/>
        On the other hand, we <i>cannot</i> change the letters in a string. Strings are <i>immutable</i>, uchangable. This means we cannot change strings, only create new ones.
        <Db />
        Another property strings share with lists, is that we can iterate through them with <Ic>for</Ic>-loops. The <Ic>for</Ic>-loop will treat the string as a list of characters. This code writes every character of a string on their separate lines:
        <CodeBlock>
            {`string = 'An extremely large potato'

for character in string:
    print(character)`}
        </CodeBlock>
        
        <h2>List Comprehension</h2>

        At last, we will talk a little about another way of creating lists, which will be easier in many cases. <i>List comprehension</i> is a shorter way of defining a list when the elements of the new list are created directly from elements in another list. For instance, have a look at this code:

        <CodeBlock>
        {`names = ['Bam', 'Rachel', 'Beelzebub']

capitalized_names = []
for e in names:
    capitalized_names.append(e.upper())
    
for e in capitalized_names:
    print('LOOK OUT,', e, 'IS COMING!')`}
        </CodeBlock>
        Here, we create a new list where we take the names from the old lists and converts all the lower-case letters to upper-case letters with <Ic>upper()</Ic>. It gives more depth to the <Ic>print()</Ic>-call in the loop at the end of the code. This code works totally fine, but can be simplified with list comprehension.
        <Db />
        With list comprehension, we define a list in the following way:
        <CodeBlock>
            {`[<value created from variable> for <variable name> in <list>]`}
        </CodeBlock>

        This new list is defined with a series of values that are computed, or somehow created, from the elements in another list (or iterator). We can rewrite the elements above like this:
        <CodeBlock>
            {`names = ['Bam', 'Rachel', 'Beelzebub']
            
capitalized_names = [e.upper() for e in names]

for e in capitalized_names:
    print('LOOK OUT,', e, 'IS COMING!')`}
        </CodeBlock>

        Here, we have written <Ic>capitalized_names</Ic> with list comprehension - <Ic>[e.upper() for e in names]</Ic>. The variable name <Ic>e</Ic> that we use within the list comprehension is a freely chosen variable name, just like the name of the iteration variable in <Ic>for</Ic>-loops. We can translate what's happening in the list comprehension like this: "create a list that consists of <Ic>e.upper()</Ic> for every element <Ic>e</Ic> in the list <Ic>names</Ic>".
        <Db />
        We can also specify a condition in the list comprehension to only choose some of the elements to use in the new list. Then the list comprehension looks a bit like this: <Ic>{`[<value created from variable> for <variable name> in <list> if <condition>]`}</Ic>. With this in had, we can create a program where we e.g. throw away names that are associated with an age that is too small:
        <CodeBlock>{`names = ['Bam', 'Rachel', 'Beelzebub']
ages = [13, 14, 4521]
elderly = [names[i] for i in range(len(names)) if ages[i] > 75]

for e in elderly:
    print('You are starting to get gray hair,', e)`}</CodeBlock>

        Here, we have said that we will only include names with a valid index in <Ic>names</Ic> (with the <Ic>range()</Ic> call), but only if the age at that same index in <Ic>ages</Ic> is higher than 75. This example is extra complicated because we want elements from one list, but need to check the condition in another, which means we need to iterate through indices using the <Ic>range()</Ic>-function, instead of just iterating through the elements themselves in the list comprehension. Don't worry if you don't get everything that happens in this example - it is a difficult one!
        
        <h2>Summary</h2>

        Lists will enable us to handle large amounts of data, wherever they should arise. We have only looked at lists with a few elements here, but Python can very well handle lists with millions of elements. The actual upper limit depends on how much your machine can take.
        <Db />
        With this post, we have actually gone through the most important fundamental concepts of Python. The next posts will primarily focus on expanding the horizon for what can be done with Python and programming in general. We will build our discussion heavily on the concepts we have already visited: Variables, conditions, functions, lists and loops.
        <Db />
        In the next post, we will introduce dictionaries, which is an alternative way of storing large amounts of data.

        <h2>Exercises</h2>

        1. Create a list that contains the first hundred square numbers (<Ic>n * n</Ic> for <Ic>n</Ic> from 1 to 100). Try writing it with list comprehension!
        <Db />
        2. Rewrite the example in this post where the user writes a series of names which are put in a list, using <Ic>for</Ic>-loop(s). Should both the <Ic>while</Ic>-loops be made into <Ic>for</Ic>-loops?
        <Db />
        3. Rewrite the example about prime numbers in the post about <a href="en/introduction_to_python/loops">while loops</a> by using <Ic>for</Ic>-loops and functions.
        <Db />
        4 (Difficult). A list can also contain other lists as elemnets. Create the multiplication table in such a double list: Create a list where every element contains the <i>n</i>-multiplication series. E.g. the first element in the "main" list will be the list <Ic>[1, 2, 3..., 10]</Ic>, while the second element is <Ic>[2, 4, 6..., 20]</Ic> and the seventh should be <Ic>[7, 14, 21..., 70]</Ic>.
        <Db />
        For an extra (<i>extra</i>) challenge, try defining the list on one line using list comprehension!
        </PostWrapper>
    </>
);

export default ListsAndForLoopsEn;