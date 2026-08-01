import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const LinguisticAnalysisEn = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Hello again! This is a <i>project post</i>, which means we will go through a programming project to show how you can use what you've learn in the previous posts. On the paper, you have learnt enough Python to do these projects on your own. In reality however, it can be hard to know where to begin when you want to program something yourself. Hopefully this project post will help you find the way on your own when you go out on coding adventures on your own later on.

            <Db />

            In this post we will be doing som <i>linguistic analysis</i> . Linguistic analysis can mean many things, but we will focus primarily on using large amounts of text to explore some aspects of the English language; written American English, to be exact. In the end, we will make som visualizations from our data.
            <Db />

            We will introduce some techniques and terminology that is very specific to linguistic analysis. This is typical for many programming projects - often the coding itself is combined with concepts from other subjects. Such "external" concepts is often referred to as <i>domain knowledge</i>. You don't have to focus on these techniques and terminology, but you can take it as a bonus that you learn a bit about linguistics as you read this!

            <h2>Project Description</h2>

            To begin a programming project, it's a good idea to define clearly what we want to achieve with the project. In the same way that we need to be very specific when writing a Python program for the computer to understand what to do, we should be very specific on what we, on a high level, want to achieve with our program. This will make it much easier to plan out how we proceed step by step when creating the program.
            <Db />
            In this project we will, as mentioned, do some linguistic analysis. More specifically, we will
            <ul>
                <li>1. Count the occurences of specific words in a text</li>
                <li>2. Find the most common words in the text</li>
                <li>3. Find out how often each of the letters occur in the language</li>
                <li>4. Visualize the information from the previous steps</li>
            </ul>

            Here, the last point is somewhat unspecific, but we can discuss how to best perform the visualization when we arrive at that point.

            <Db />
            We have listed a number of different goals here, but we will only create one profram file that contains the functionality for all these aspects.
            <Db />
            Having the project description written out, we can start planning each of the steps to achieve the goals we have listed.

            <h2>Planning</h2>

            The planning phase is more important the bigger your project is. It does not mean it has to take much time, but it is an enormous advantage that you think through the different parts of the program you are creating, and how they fit together.

            <Db />

            Our project is not a large one, se it should suffice to give a rough description of how we will go about implementing each of the tasks written above:
            <Db />

            To count the occurences of a word, we open the text file we're using, and then read through line by line. We make sure all letters on every line are lower-case in order to simplify the counting process. On each line, we check how many times the word  occurs. We sum all these occurences and eventually write it to screen.
            <Db />
            To find the most common word in the text, we read through it line by line, but this time we also need to eliminate punctuation marks and the likes in order to be able to extract only the words themselves. When reading them out of the line, we use them as indices into a dictionary, where their corresponding values will be the number of each word we have found so far. In the end, we can go through the dictionary to find what word we counted most times.
            <Db />
            If this explanation was unclear, it will probably be better when we start implementing this task.
            <Db />
            When we count every letter in the language, we will also use a dictionary. In this case, the indices will be the English letters, and the corresponding values will be the number of occurences.
            <Db />
            To visualize the information, we will use <a href="https://matplotlib.org/">matplotlib</a>, a package that lets us create graphs and diagrams. This is a frequently used tool in e.g. scientific reports that makes use of technical data, and it can be a useful tool to learn early on!
            <Db />
            We will write each part in their respective function, which subsequently can use other helping functions. This makes it easy to e.g. run only one of them at a time during testing.
            <Db />
            Now that we have a rough overview of what we're trying to make, we can concentrate on the next problem: What text are we using for input to the program?
            
            <h2>The Corpus</h2>

            A <i>corpus</i> in the context of linguistics is a large collection of texts, often with several million words, that is created for analyzing the language in which the texts are written. Corpora (plural of corpus) can either focus on specific types of texts, like news articles, novels or manuscripts, or it can be a combination of many different genres. A language researcher can use a corpus to e.g. find out how common words are, to compare writing styles between different genres, or for training a machine learning algorithm to recognize a language, to mention some. What type of corpus we want, depends entirely on what we will do with it.
            <Db />
            In this project, we will use a subset of <a href="https://www.anc.org/">Open American National Corpus (OANC)</a> which, as opposed to many other corpora, is freely available for all use. It is a corpus formed from many different written sources, including letters, articles and novels, giving a good variation of content for general linguistic analysis. 
            <Db />
            The corpus can be downloaded from <a href='/files/corpus.zip' download>here</a>. Notice that the corpus resides in a ZIP-file and needs to be extracted before it can be used in a program. In the same file is also licensing information, included for legal reasons. The corpus is modified to be easier to read and analyze for a Python program.
            <Db />
            Now that the text material should be in order, we can continue to the next step in the project - implementation!

            <h2>Implementation</h2>

            It's time to get dirt under our nails. We have already planned - in rough terms - how to proceed, making the implementation pretty straight-forward. We start from the top of our goals list:

            <h3>Count Occurences of a Single Word</h3>

            As mentioned, we will write each separate task in its own function, so that it becomes as easy as possible to keep it tidy and to test each of them separately. We start by writing the function <Ic>count_occurences</Ic> which takes one argument - a string containing the word we want to search for. Then we start reading from the corpus file:
            <CodeBlock>{`corpus_file_name = 'distilled_OANC.txt'

def count_occurences(word):
    with open(corpus_file_name) as corpus_file:`}</CodeBlock>
            Before we even get to start the function, we defined the variable <Ic>corpus_file_name</Ic>, which contains the name of the corpus file. Here, we assume that the corpus file resides in the same folder as the Python file we are writing. The reason we define this variable <i>outside</i> the function, is that it makes it easier to reuse it in the other function we will create later on, which will naturally be reading from the same file.
            <Db />
            The first thing we do within the function, is to open the corpus file by using the file name that is stored within this variable.
            <Db />
            Nice, we opened a file. Now what? If we follow the plan we laid out earlier, we will now read through the file line by line. Like you may remember, this is a simple task when we already have a file object. We can just use the file object directly in a <Ic>for</Ic>-loop.
            <CodeBlock>
{`        for line in corpus_file:`}
            </CodeBlock>
            Here comes the meat of the function itself - we want to count the number of times our word occurs in the string <Ic>line</Ic>. But wait a second - if we find the number of occurences, what will we then do? Naturally, we are interested in the number of occurences <i>in total</i> in the text as a whole, so we will need a way of keeping track of how many we have found so far while we are reading line by line. We create a variable for this, initializing it to 0 <i>before</i> we enter the loop:
            <CodeBlock>{`...
        total_occurences = 0
        for line in corpus_file:
...`}</CodeBlock>
            
            The code snippets we show from now on will mostly be in the order they appear in the program file, so that you won't have to return to code you have already written to make changes, like we did here. In practice, however, we usually cannot write the code directly from beginning to end; it happens frequently that we during coding e.g. realize an earlier mistake we have done, or that we need to define an additional variable like we just did.
            <Db />
            Let's continue! Next step in the program is to count all occurences of the word in the line. To do that, we should remember that Python (and mostly any programming language) makes a strict distinction between upper and lower case letters. To ensure that we are able to count e.g. the word "my" in the expression "My struggle", we make all the letters in the input line lower-case:
            <CodeBlock>{`            line = line.lower()`}</CodeBlock>
            It's starting to become a lot of indentation to keep track of - this line should be indented three times. Notice that we only define the iteration variable <Ic>line</Ic> again. This is totally fine, since <Ic>line</Ic> will be redefined by Python to the next line in the file when it jumps back to the beginning of the loop block in the next iteration.
            <Db />
            Now, eventually we are ready to count the occurences. It turns out that Python already has a convenient method for counting the number of occurences of one string within another, namely the member function <Ic>count()</Ic>. The documentation for this function can be found here: <a href='https://docs.python.org/3/library/stdtypes.html#str.count'>https://docs.python.org/3/library/stdtypes.html#str.count</a>.
            <Db />
            Thus we can count the number of occurences and add it to the total number like this:
            <CodeBlock>{
`            occurences_in_line = line.count(word)
            total_occurences += occurences_in_line`}</CodeBlock>
            Almost done! What we miss is to return the number from the function. Make sure that this is done with the right amount of indentation: We will return from within the <Ic>with</Ic>-block, but not inside the loop block:
            <CodeBlock>{
`        return total_occurences`}</CodeBlock>
            You may also return from just at the end of the function block as well.
            <Db />
            That's all there is to it. The function is done, all we need to do now is to call it. We write the following underneath the function:
            <CodeBlock>{`number_of_humans = count_occurences('human')
print('Found', number_of_humans, 'occurences of "human" in the text')`}</CodeBlock>
            The program ready to be run. Note that it may take some time to run, since there is a lot of text to read through. Eventually, you should get something similar to this:
            <CodeBlock>{`Found 7724 occurences of "human" in the text`}</CodeBlock>
            Right now, our program will also count occurences of worlds like "humans" and "superhuman", since the <Ic>count()</Ic>-function does not care about what parts of the string are singular words and not. Either way, we accept this as a solution that is good enough for our first goal. If you are unhappy about this solution, you could try fixing it yourself; see the exercises at theh end of this post.
            <Db />
            Good stuff! The first part of the implementation is complete - we just straight to the next.

            <h3>Find the most Common Word in the Text</h3>

            We create a new function to get the most common words from the text - we start with the same lines as we did in the previous part:
            <CodeBlock>{`def find_most_common_word():
    with open(corpus_file_name) as corpus_file:`}</CodeBlock>
            As mentioned in the planning phase, we will use a dictionary to keep track of the words we have seen and how many times we have seen them. We create an empty dictionary like this:
            <CodeBlock>{
`        occurences = {}`}</CodeBlock>
            Then we iterate:
            <CodeBlock>{
`        for line in corpus_file:`}</CodeBlock>
            Here we need to keep our heads cool. We want to go through the line and put every word into the dictionary. Then we first need to partition the string into words. We have already seen that the <Ic>split()</Ic>-function can be used to divide a string that contains multiple lines, and it can also be used to split a string into separate words as well. In addition we should, just like in the previous section, make sure that the line only contains lower case letters, so that words are counted in the same way independent of whether they e.g. are at the beginning of a sentence and thus is capitalized, or not. One last obstacle is punctuation. We will have to get rid of all periods, quotation marks and the likes from the beginning and the end of every word.
            <Db />
            Since the preprocessing of every line is this such a complex task, it makes sense to put it in its own function. Here we will call it <Ic>get_pure_words</Ic>, which takes a line of text and returns a list of words with small letters without punctuation. The function simply starts by making the letters of the line lower case and run a split:
            <CodeBlock>{`def get_pure_words(line):
    parts = line.lower().split()`}</CodeBlock>
            In the code above, <Ic>line.lower()</Ic> will return a new string that contains just small letters, and we can call <Ic>split()</Ic> directly on this string without putting it in a variable first.
            <Db />
            Next step is a bit more convoluted. We will go through the list of words we just received and get rid of all symbols that are not letters. We may use the member function <Ic>isalpha()</Ic> to check whether a symbol is in the alphabet.
            <Db />
            We will only remove punctuation from the beginning and the end of every word, so that we keep e.g. words containing hyphens but still remove e.g. periods and quotation marks. This can be done by moving through the string once forwards and once backwards, and check every symbol until we find the first letter. When we have found two letters, the first from each end, we just use the text string between these two symbols, including the symbols themselves, and put it into the result list of words from the line. At the same time, we will make sure the word is not empty, so that we avoid putting single signs into the result list.
            <Db />
            The code for this may end up looking something like this:
            <CodeBlock>{
`    result_list = []
    for word in parts:
        first_letter = -1
        last_letter = -1
        for i in range(0, len(word)):
            if word[i].isalpha():
                first_letter = i
                break

        for i in range(len(word) - 1, -1, -1):
            if word[i].isalpha():
                last_letter = i
                break
        
        if first_letter == -1:
            break
        
        result_list.append(word[first_letter:(last_letter + 1)])`}
            </CodeBlock>
            There are a couple of things happening here that we haven't seen before. The first is <Ic>range(len(word) - 1, -1, -1)</Ic>. This generates the interval from, and including, <Ic>len(word) - 1</Ic> to, but not including, <Ic>-1</Ic>, and count downward one step at a time, as deviced by the third argument to <Ic>range()</Ic>. In other words, this is the same as the interval <Ic>range(0, len(word))</Ic> in reverse.
            <Db />
            The second aspect that may need an explanation is the syntax <Ic>{`word[first_letter:(last_letter + 1)]`}</Ic>. This is called <i>slicing</i>, and simply means that we create a new string that contains all symbols in the old strings that lie between positions <Ic>first_letter</Ic> until, but not included <Ic>last_letter + 1</Ic>. In other words, we end up with a string containing all symbols between first and last letter that we found in the "word".
            <Db />
            That was quite a mouthfull. Don't panic if you didn't follow all that happened here. You may read through this again at a later point if you want. The <Ic>get_pure_words</Ic>-function is almost done: we just need to remember returning the result list:
            <CodeBlock>
{`    return result_list`}
            </CodeBlock>
            Having this function handy, we can go back to the function <Ic>find_most_common_word</Ic> and process every line in the loop:
            <CodeBlock>{
`            word_list = get_pure_words(line)`}
            </CodeBlock>
            Now we only need to put the words into the dictionary! Before inserting each word, we should check whether it already lies there. In that case, we only need to increase the number of occurences of the word by one. Otherwise, we insert the word with the corresponding value 1. To check whether a word is already in the dictionary, we may use the <Ic>in</Ic>-operator.
            <CodeBlock>{
`            for word in word_list:
                if word in occurences:
                    occurences[word] += 1
                else:
                    occurences[word] = 1`}</CodeBlock>
            
            Nice! When the outer-most loop has run its course, we will be left with <Ic>occurences</Ic> which is filled to the brim with the words from the text, coupled with their corresponding number of occurences. Now the question is: How do we extract the word with the most occurences? We will review two suggestions here.
            <Db />
            The first method is pretty straight-forward. We iterate through the entire dictionary while keeping track of what word that has the highest number of occurences among those we have fonud so far. In addition, we must keep track of the number of this word, so that we can compare it with the number of occurences of the other words we have found. This code may look like
            <CodeBlock>{
`        most_common_word = ''
        largest_number = 0
        for word, number in occurences.items():
            if largest_number < number:
                most_common_word = word
                largest_number = number
        return most_common_word`}</CodeBlock>

            After this loop has run, <Ic>most_common_word</Ic> will contain exactly the most common word in the entire text, and we can return it.
            <Db />
            The other method is a bit more complicated, and also slower, but will let us do more interesting things with the result. What we want to do, is to <i>sort</i> every word on the number of occurences, so that we can return e.g. the ten most common words, or even the most uncommon, if we wanted to. To sort on the number of occurences, we will put every word-number pair in a list of tuples, where every tuple has the number as the first element and the word as its second. When we then sort the list, Python wil use the first element in each tuple - that is, the number - to sort the list. Subsequently, words with the same number of occurences will be sorted alphabetically. This entire process looks like this:
            <CodeBlock>
{`        tuple_list = [(number, word) for word, number in occurences.items()]
        tuple_list.sort()

        return tuple_list[-1]`}
            </CodeBlock>

            Here we have used list comprehension to make the conversion from dictionary to list as compact as possible. After having sorted the list, we return the <i>last</i> tuple, since the words are sorted from fewest to most occurences. To extract the last element, we use index <Ic>-1</Ic>. When we use negative numbers, Python will start counting from the back of the list. As mentioned, we could have done more interesting things with the information we now have in the list, and we will later on, in the visualization section.
            <Db />
            Alright, now we only need to call the function! We can do this with the following lines:
            <CodeBlock>{`most_common_word = find_most_common_word()
print('The most common word was', most_common_word)`}</CodeBlock>

            Before running, you should comment out the function call related to the previous section (in other words, write a <Ic>#</Ic> at the beginning of the line with the call, and the next line printing the result of the call). It would be tedious to sit and wait for the first function to run when we are only interested in the result from the new one.

            <h3>Find Occurences of each Letter</h3>

            Next task is to count the occurences of each letter. We create a new function and start it in the same way we did the previous ones:
            <CodeBlock>{`def find_letter_occurences():
    with open(corpus_file_name) as corpus_file:`}</CodeBlock>
            Next step is to go through each line in the file and count the number of each letter. The easiest way of keeping track of the number of occurences, is to use a dictionary just like we did with the word occurences earlier. The next lines will then look like this:
            <CodeBlock>{
`        letter_occurences = {}
        for line in corpus_file:
            line = line.lower()`}</CodeBlock>

            Once again we make sure that the lines only consist of lower case letters. Now we may iterate through every symbol in the line, check if it's a letter, and then put it into the dictionary just like we did with the words earlier. To check that a symbol is a letter, we could have used the member function <Ic>isalpha()</Ic>, but this may include many other letters that are not present in the English alphabet. Most letters will be English, but some foreign letters, like "å" or "ç" could also, potentially, appear in e.g. names. Instead we will create a helper function that checks whether a letter is in the English alphabet. 
            <Db />
            The function is simply called <Ic>is_in_alphabet(letter)</Ic> and returns <Ic>True</Ic> if the letter is in the English alphabet, or <Ic>False</Ic> otherwise. To determine whether a letter is in the alphabet, we will use the builtin function <Ic>ord()</Ic>. <Ic>ord()</Ic> takes a character as input argument and returns the number value corresponding to that character in the unicode system. A convenient property of the unicode system is that the English alphabet appears in a continuous range, which means we only need to check whether <Ic>ord(letter)</Ic> lies between <Ic>ord('a')</Ic> and <Ic>ord('z')</Ic> inclusive. The helper function will thus look like this:
            <CodeBlock>{`def is_in_alphabet(letter):
    number_value = ord(letter)
    if number_value >= ord('a') and number_value <= ord('z'):
        return True
    else:
        return False`}</CodeBlock>
            We could just as well have returned <Ic>{`number_value >= ord('a') and number_value <= ord('z')`}</Ic>, but this implementation is perhaps more intuitive
            <Db />
            Of course, the fact that the letter will always be lower-case has simplified this function a bit too.
            <Db />
            With this function in the back of our heads, we can continue with <Ic>find_letter_occurences</Ic> like this:
            <CodeBlock>
{`            for letter in line:
                if is_in_alphabet(letter):
                    if letter in letter_occurences:
                        letter_occurences[letter] += 1
                    else:
                        letter_occurences[letter] = 1`}
            </CodeBlock>

            Now we very likely have an enormous amount of each letter. To make the results more readable to us mortal humans, we can rather compute how big part of the language each of the letters make up, in percent. To do that, we first need to count all letter occurences in total:
            <CodeBlock>{
`            total_occurences = sum([number for number in letter_occurences.values()])`}</CodeBlock>
            We shortened down the counting to a single line of code - take a look and see if you understand what's happening! Then we switch out the numbers in the dictionary with corresponding percentage, which is done by dividing each number on the total number of occurences and multiply by a hundred:
            <CodeBlock>{
`            for letter in letter_occurences:
                letter_occurences[letter] *= 100 / total_occurences`}
            </CodeBlock>

            That's all! We may, at last, return the occurence dictionary:
            <CodeBlock>{
`        return letter_occurences`}</CodeBlock>
            
            Finally we can show the results to the user:
            <CodeBlock>{`letter_occurences = find_letter_occurences()
for letter, occurences in letter_occurences.items():
    print(occurences, '% of the letters were \\'' + letter + '\\'')`}</CodeBlock>
            
            Now the code can be run - and you should receive the blessing it is to know approximate proportions of usage for each of the English letters!

            <h3>Data Visualization</h3>

            We have been able to get some interesting data from the text collection, but data often becomes increasingly interesting when we can explore it visually. In this section we will look at some simple methods we can use for visualizing the data we extracted in the above sections. We will use <Ic>matplotlib</Ic> for this purpose, which is a common data visualization tool that is frequently used in visualizing e.g. scientific results. There is a chance that <Ic>matplotlib</Ic> was not installed together with Python, in that case you will have to install it yourself e.g. by using <Ic>pip</Ic>, which we have covered earlier.
            <Db />
            We will use a couple of different types of diagrams to show some of what <Ic>matplotlib</Ic> can do. If you want to be more creative about the visualization that what we will do here, you can check out some of the <a href='https://matplotlib.org/stable/gallery/index.html'>official examples for matplotlib</a>. 
            <Db />
            We walk through each of the above sections in order
            <h4>Visualizing Word Occurences</h4>
            When we search for the number of occurences of a word, it is most interesting if we have several different words to work with. When we have several, we can compare the occurence of them in e.g. a bar graph. Let's first create a list of words and count the number of occurences for each of them:
            <CodeBlock>{`words = ['human', 'democracy', 'asian', 'smuggling', 'soup']
occurences = []
for word in words:
    occurences.append(count_occurences(word))`}</CodeBlock>

            Note that this part of the code will take some time to run, since we are reading through the entire text for <i>every</i> word.
            <Db />
            Let's proceed with some visualization! First, we will need to import and initialize <Ic>matplotlib</Ic>. At the top of the file, we write
            <CodeBlock>{`import matplotlib.pyplot as plt
            
fig, ax = plt.subplots()`}</CodeBlock>
            This is the most common way of initializing matplotlib. We will use <Ic>plt</Ic> to show the plot, and <Ic>ax</Ic> to determine what is going to be drawn. <Ic>fig</Ic> can be used to change the layout of the visualization when we have multiple plots we want to show simultaneously, but we won't be needing that here. We will reuse all these objects for visualizing the other tasks, so it makes sense to keep this at the top of the file, and not mixed in with any specific visualization code.
            <Db />
            Now we need to use <Ic>ax</Ic> to specify what should be visualized and how.
            <Db />
            The first we describe, is what kind of plot we want. We want a bar graph, which we will get by using the function <Ic>bar()</Ic> on the <Ic>ax</Ic> object. <Ic>bar</Ic> takes arguments that determine the x-position (horizontal placement) of each bar, and the height of each bar. After having found the occurences above, we can then use 
            <CodeBlock>{`ax.bar(range(len(occurences)), occurences)`}</CodeBlock>
            to create the bars. <Ic>range(len(occurences))</Ic> is just used to create a series with the numbers 0, 1, etc. up to the length of the list, so that the bars are placed at position 0, 1 etc. The second argument, <Ic>occurences</Ic>, determines the size of each bar.
            <Db />
            Instead of marking the <Ic>x</Ic>-axis with the numbers 0 to 4, we will rather have the different words that each bar represents. We achieve this by writing
            <CodeBlock>{`ax.set_xticks(range(len(words)))
ax.set_xticklabels(words)`}</CodeBlock>
            Here we use <Ic>set_xticks</Ic> to specify that the bar names should be placed at x-position 0, 1 etc. up to 4, and <Ic>set_xticklabels</Ic> to tell matplotlib to use the elements in <Ic>words</Ic> as bar descriptions.
            <Db />
            At last we can add a description for the y-axis and a title for the entire plot:
            <CodeBlock>{`ax.set_ylabel('Occurences')
ax.set_title('Word Occurences')`}</CodeBlock>
            Alright! Only one thing remains, and that is to show the result. For that, we just need to write 
            <CodeBlock>{`plt.show()`}</CodeBlock>
            If everything is in order, you should now end up with a bar diagram on your screen when the program gets to run to its end. See if you can find some other words you want to compare the occurences for, and run the code with those!
            <h4>Visualize the most Common Words</h4>

            We use the same technique as above for visualizing the occurences of the most common words as well. For this to make sense, we need to return more than one word from <Ic>find_most_common_word()</Ic>. We can do this by altering the last line in the function (provided we used the sorting method when we found the most common word) to <Ic>return tuple_list[-10:]</Ic> to perform slicing of the list and return the last ten elements. (When we write <Ic>{`list[<number>:]`}</Ic> we get all elements in the list from index <Ic>{`<number>`}</Ic> and until the end of the list.)
            <Db />
            Now that we have the ten most common words, we can put them into two separate lists like this:
            <CodeBlock>{`word_occurences = find_most_common_word()
words = [word for (number, word) in word_occurences]
occurences = [number for (number, word) in word_occurences]`}</CodeBlock>
            From this point, we can use the exact same code as we did for the previous visualization, and we will get a new bar diagram for these most common words. You can try combining the most common words and other random words in the same diagram to put them into the same word- and occurences-lists, and see how much of a difference there is between the occurences!

            <h4>Visualization of Letter Occurences</h4>

            We could use a bar diagram to visualize letter occurences as well, but to spice things up a bit in this last part of the post, we will try another type of diagram: The pie chart.
            <Db />
            We start with the <Ic>letter_occurences</Ic> variable that we retrieved from the call to <Ic>find_letter_occurences()</Ic>. First, we put the letters and the occurences into two different lists:
            <CodeBlock>{`letters = letter_occurences.keys()
occurences = letter_occurences.values()`}</CodeBlock>

            To create the pie chart, we simply use the <Ic>matplotlib</Ic> function <Ic>pie</Ic>:
            <CodeBlock>{`ax.pie(occurences, labels=letters)
plt.show()`}</CodeBlock>
            For simple visualization, this is actually all we need! The pie chart is not perfect. For example, some of the letter labels overlap for the letters with the least usage. Despite this, this diagram is a useful representation of what letters are the most used, and to which ratio.

            <h2>Summary</h2>

            If you've kept the heat all the way here, you have come a long way! Even though this post introduced many concepts and terminology tightly related to language analysis, I also hope this post has given you a feeling of how we can use many different programming concepts together in larger and more complex projects.
            <Db />
            If you don't already have had ideas or specific plans for programming projects, I hope what you have read here could contribute with some inspiration, in addition to general techniques and tips for how to attack larger programming tasks. In either case, I wish you good luck on future coding endeavors!
            <Db />
            And happy hacking!

            <h2>Exercises</h2>

            If you thought linguistic analysis was interesting, or just want to hone your programming skills in some exercises, you can check out the suggestions here:
            <Db />
            1. Change the function counting word occurences to only count distinct words on each line. In other words, a search for "human" should only match the word "human" and not e.g. "humans" or "superhuman". Tips: Reuse one of the functions we made.
            <Db />
            2. Make sure that the words that are counted in the <Ic>find_most_common_word</Ic> function are only those containing english letters. That means that words that still contain punctuation or other symbols after having stripped them like we did, should be ignored.
            <Db />
            3. (Hard) Create <i>n-grams</i> from the text. An n-gram is a series of words that appear one by one within a sentence. If, say, we have the sentence "We went for a walk", it has the 2-grams "we went", "went for", "for a", and "a walk", and the 3d-grams "we went for", "went for a", and "for a walk". Construct 3d-grams from the text collection and count them in the same way we counted words in part 2 of this post. For the sake of simplicity, you can treat every line as a separate sentence, so you don't have to find out where periods or other symbols separate sentences on each line.
            <br/>
            Tips: Represent each 3-gram as a tuple and not as a list, the latter cannot be used as index in a dictionary.
            <br/>
            Use n-gram-occurences to find out what words most commonly follows the word "walk", or any other word you choose yourself!
            <Db />
            4. (Hard) Implement Caesar-encryption and decryption. Caesar-encryption is a simple encryption algorithm. In Caesar-encryption, you take a start text, e.g. "secret", and switch out every letter with the letter that is <i>n</i> positions forward in the alphabet. If we choose <i>n</i> to be, say, 3, "a" will be changed to "d", "b" changed to "e", and so on. When you reach the end of the alphabet, you jump back to the beginning and continue counting. The point is that everyone reading the message, but doesn't know the value of <i>n</i>, don't know the value of <i>n</i>, can't know the actual content of the message. In this example, "secret" is translated to "vhfuhw". When you have implemented the encryption, try implementing decryption as well!
            <Db />
            Hint: Use <Ic>ord()</Ic> to translate the letters to number values and <Ic>chr()</Ic> to change them back to letters. For the sake of simplicity, you can concentrate only on lower-case letters. To encrypt a word, it is easiest to encrypt each letter individually and then put them together to a string again using <Ic>''.join(letter_list)</Ic>. Remember to only encrypt letters and not spaces or other symbols, unless you're up for the challenge!
            <Db />
            PS: Caesar-encryption is considered extremely unsafe, much because the number of different encryption keys are just the number of letters in the alphabet, making it possible to go through all possibilities with trial and error. Another way of finding the encryption key (the value of <i>n</i>), is to compare the letter occurences with the occurences we computed in the third task in this post. If the message is long enough, we can use this to guess what letters were translated to one another. This can also be used to break another type of encryption where every letter is also translated another letter, but where there isn't necessarily a pattern between the translation of different letters.
        </PostWrapper>
    </>
);

export default LinguisticAnalysisEn;