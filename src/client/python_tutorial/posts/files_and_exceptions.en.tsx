import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const FilesAndExceptionsEn = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
        Hi again! In this post we will have a look at files and how to create and use them with Python. So far we have relied on the user to give the program external information, but there is a limit to how long we are able to keep the user seated, feeding our program with data. Here we will, among other things, llearn how to read information from files, which can drastically increase the amount of data we have access to.
        <Db />
        Later in the post we will also take a look at error handling, which can be especially useful when working with files.
        <Db />
        Most likely you already have some intuition of what a file is, since every Python-program we have written must be saved to a file in order to be run. For the purpose of this post, we will only think of files as a named container of data that resides somewhere on the hard drive of the computer. Files can contain data in all kinds of formats, such as images, sound or Excel-sheets. In this post we will only discuss files that contains pure text, while we postpone the discussion of other file types to the next post.
        
        <h2>Reading a file</h2>

        In order to read the contents of a file and use it in our program, we will first need a file to work with. In this example, we will use the lyrics of a classic, which you can <a href="/files/lyrics.txt" download>find here</a>. Put this file in the same folder as the program code we will write shortly. If you don't know where the file ended up when you downloaded it, it is probably in a folder called <i>Downloads</i>. Notice that the file is a <Ic>.txt</Ic> file, which only contains pure text without any kind of information about formatting, font size, colors or the likes, which you would have in e.g. a document file such as <Ic>.docx</Ic> or <Ic>.pdf</Ic>. <Ic>.txt</Ic> files contain nothing but a series of human readable letters and signs. This simple form of files work well for demonstrating file operations in Python because the content can be handled directly as a string.
        <Db />
        When we are writing to or reading from a file, we first have to <i>open</i> it. This signals to the operating system that it should open a "channel" to or from the file and into our program, and gives us a reference to this channel. To open a file we use the function <Ic>{`open(<filename>)`}</Ic> where <Ic>{`<filename>`}</Ic> is a string containing the name of our file. The function returns a "file object" which we can use subsequently to read from or write to the file. If the file does not exist, Python will throw an error in your face.

        <Db />
        To open the file we downloaded, we can use 
        <CodeBlock>{`file = open('lyrics.txt')`}</CodeBlock>
        Now we have told the operating system to read the file <Ic>lyrics.txt</Ic>, and received a file object which we have stored in the variable <Ic>file</Ic>. If you get an error message from this call alone, you have probably not put the file in the same folder as your program code, or misspelled the name of the file. From here, we have multiple ways of reading the content of the file.

        <h3>Reading All the Content Simultaneously</h3>

        To read all the contents of the file at once and put the result in a string, we can use the member function <Ic>read()</Ic> on the file object.

        <CodeBlock>{`file_content = file.read()`}</CodeBlock>

        We can check that <Ic>file_content</Ic> now contains all the text in the file by writing it to screen with e.g. <Ic>print(file_content)</Ic>.

        <Db />
        You may be a bit careful when using <Ic>read()</Ic> the way we have done above, because it asks Python to load all the file content into memory at the same time. If the file needs more space than you have available in memory, you may end up with the machine hanging for a while before the program crashes. It's not dangerous, but can be very frustrating. For modern machines, this does not become a problem before we are working with files of several gigabytes, in other words, billions of characters. This is probably not something you will do in the near future.

        <h3>Reading Line by Line</h3>

        An alternate way of reading text files is by using <Ic>for</Ic>-loops. When using <Ic>for</Ic>-loops directly on file objcts for text files, the iteration variable will be set to the lines of the file, one by one in each iteration.
        <NoticeBlock>Note: You cannot use both the <Ic>read()</Ic>-function and <Ic>for</Ic>-loop iteration on the same file object. The file object will "remember" what has been read and continues from where it left off in the next read operation. If you continue from the code above, you therefore need to either replace the <Ic>read()</Ic> call with the loop, or close the file (see below) and open it anew.</NoticeBlock>

        Here is an example of how we write the file to screen with a <Ic>for</Ic>-loop:

        <CodeBlock>{`for line in file:
    print(line)`}</CodeBlock>
        
        The result will be nearly the same as when we wrote the file content in the example above, except that it will contain an extra blank line between each line in the file. The lines we get through the <Ic>for</Ic>-loop contains newline characters at the end, causing there to be extra newlines in play when <Ic>print()</Ic> appends another.
        
        <h3>Closing the File</h3>

        When we are done with the operations we're doing on a file, we should <i>close</i> it. This is done simply by calling the <Ic>close()</Ic> member function on the file object:
        <CodeBlock>{`file.close()`}</CodeBlock>
        This is to tell the operating system to close the "channel" between the file on the hard drive and our program, and to ensure all operations we were doing on the file are complete. In modern operating systems it's rare that forgetting to close a file causes a problem, since it will be automatically closed by force when the program is finished. However, it is a good idea to remember closing the file, especially when doing write operations to ensure everything that should be written to the file actually comes through.

        <h2>Writing to a file</h2>

        When we call <Ic>open()</Ic> on a file, we must decide whether it should be opened for reading or writing. This is done by giving a value for the second argument to <Ic>open()</Ic>, which specifies the <Ic>mode</Ic> of the file. To open the file for reading, we can use <Ic>'r'</Ic> as a second argument. This is also the default value for this argument, which is why we did not need to use this argument in the file reading example above.
        <Db />
        To open a file for <i>writing</i>, we need to use the mode argument <Ic>'w'</Ic>. If the file that is specified in te first argument does not exist, the program wil first create the file and then open it for writing. Be careful when using the mode argument <Ic>'w'</Ic> on files that already exist, since it will completely remove all the content that is already in the file, even if you don't perform any writing operations!
        <Db />
        When we have opened a file for writing, we can use the member function <Ic>write()</Ic> with the text string as an argument to write to the file. Note that this will only put the string directly inside the file, without adding a newline or any other character at the end. If you want to add a newline character, you can add <Ic>'\n'</Ic> at the end of the string yourself.
        <Db />
        Here is an example program where we first read from the file we used earlier and create a new file that contains every second line from the first:
        <CodeBlock>{`infile = open('lyrics.txt')
intext = infile.read()

infile.close()

outfile = open('outfile.txt', 'w')

intext = intext.strip()
intext_lines = intext.split('\\n')

for i in range(len(intext_lines)):
    if i % 2 == 0:
        outfile.write(intext_lines[i] + '\\n')

outfile.close()`}</CodeBlock>
        Several things are going on here:
        <Db />
        First we open the file and read out its content, which we put in the variable <Ic>intext</Ic>. When we have fetched the content, we close the file. At this point we are actually completely done with the input file. Then we create a new file - the file we will write our result to. Here we use the mode argument <Ic>'w'</Ic> to signal that we will <i>write</i> to the file.
        <Db />
        After having opened the output file we call <Ic>strip()</Ic> on the string we read from the file, replacing the value in the variable with the result of the call. The result from calling <Ic>strip()</Ic> is the same as the original string, except that whitespace (invisible) characters like space and  newlines, in both ends of the string are removed. Text files often contain at least one extra newline at the end, which, if not removed, would create an annoying extra element when splitting the string on the next line of code:
        <Db />
        After having stripped down the string, we call <Ic>split()</Ic> on it. <Ic>split()</Ic> divides the string and returns a list of strings. The argument to <Ic>split</Ic> is the <i>separator</i>, that is, the string which Python should look for to know where to divide the string. The standard value for this argument will split the string at all <i>whitespace</i> characters, which include space, lines and tab. In this problem we will split the input string into lines, so we use the newline character (<Ic>'\n'</Ic>) as separator.The result is a list of strings, each string being a line from the file. Notice that the strings in this list do <i>not</i> contain the newline, which is removed during splitting.
        <Db />
        Then we iterate through the list with a <Ic>for</Ic>-loop ond indices, so that we can check whether the index is divisible by two. Since every other index (0, 2, 4... etc) is divisible by two, we end up writing every second line from the first file into the second. Since the strings in the list <Ic>intext_lines</Ic> do not contain newline, we need to add one at the end when writing to the, in order for them to appear as separate lines in the file. At long last we close the file we wrote to.
        <Db />
        There are more than one way of solving this task. For example, we could have iterated through the file line by line directly with a <Ic>for</Ic>-loop as we did before and create a counter variable that we increase for each iteration and which we could have used to only write every second line to the output file.

        <h3><Ic>with</Ic>-blocks</h3>

        Python has its own syntax for creating objects that need to be closed after use, such as files. This syntax is <Ic>with</Ic>-blocks, which are of the form
        <CodeBlock>{`with <object initialization> as <variable name>:
    <with-block>`}</CodeBlock>

        Here, <Ic>{`<object initialization>`}</Ic> will be e.g. the <Ic>open()</Ic>-call that we have already used. The <Ic>with</Ic>-blocks make sure that the object is automatically closed when the <Ic>whith</Ic>-block ends. This means we don't have to remember calling <Ic>close()</Ic> on the object ourselves. In addition it makes it very explicit where in the code the file can be used and not - one cannot use the file outside of the block, since it will be closed.
        <Db />
        We can rewrite the example above with help of a <Ic>with</Ic>-block. Most of the code is the same, but the start is spiced up a bit:
        <CodeBlock>{`with open('lyrics.txt') as infile:
    intext = infile.read()
    
with open('outfile.txt', 'w') as outfile:
    <...>`}</CodeBlock>

        The rest of the code is indented, so that it all belongs inside the <Ic>with</Ic>-block. In addition, of course, we no longer need to close <Ic>outfile</Ic> at the end.
        <Db />
        <Ic>with</Ic>-blocks is the preferred way of using files in modern Python because of the reasons mentioned above, and this is the way we will use it in the rest of this post.
        <Db />
        It's not only files that can be used with <Ic>with</Ic>-blocks. Many other objects that interact closely with the operating system, like network connections, can also be used with <Ic>with</Ic>-blocks. We will only use <Ic>with</Ic>-blocks with files in the main part of this introduction to Python.

        <h2>Exceptions</h2>

        Some times (more often than we would like to admit), errors occur while our program is running, stopping it from doing what it is supposed to do. Often, the error is caused by the programmer themselves, for example when misspelling the name of a variabl or function, creating an infinite loop by accident, or by just writing code than does something else than what we intended.
        <Db />
        On the other hand, there are errors for which the programmer cannot be blamed. This is the case in many different scenarios, for example if we try reading a file that does not exist, or if the user gives us a random string when we expect a number.
        <Db />
        Python will usually just give up when encountering such errors and crash the program. This behavior is acceptable when working with small programs that are quick and easy to restart, but the can deal major damage if they occur in a time consuming program under execution. In such cases we will want to handle the error ourselves.
        <Db />
        A common term for errors that occur when the program is running is <i>exceptions</i>.
        <Db />
        To <i>handle</i> exceptions in Python we can use <Ic>try</Ic>-<Ic>except</Ic>-blocks. <Ic>try</Ic>-<Ic>except</Ic>-blocks look like this:

        <CodeBlock>{`try:
    <try-block>
except:
    <except-block>`}</CodeBlock>

        When Python comes to a pair of <Ic>try</Ic>-<Ic>except</Ic>-blocks, it will run the code within the <Ic>try</Ic>-block in a usual manner. If there is no exception occuring when running the code in the <Ic>try</Ic>-block, it will continue with the code after the <Ic>except</Ic>-block as normal and just ignore the <Ic>except</Ic>-block.
        <Db />
        If, on the other hand, there occurs an error in the <Ic>try</Ic>-block, Python jumps directly into the <Ic>except</Ic>-block from where the exception arose, and runs the code that is situated in the <Ic>except</Ic>-block. After the code in the <Ic>except</Ic>-block is run, Python continues with the rest of the code after the whole <Ic>try</Ic>-<Ic>except</Ic>-section as usual.
        <Db />
        Here is an example of what a <Ic>try</Ic>-<Ic>except</Ic>-block may look like in practice.
        <CodeBlock>{`try:
    with open('name.txt') as file:
        name = file.readline()
except:
    print('Could not read the name from the file name.txt, assuming name is Larry.')
    name = 'Larry'

print('Hey,', name)`}</CodeBlock>

        This program assumes that the name of the user is written in the file <Ic>name.txt</Ic> and tries to read the name. If the attempt at reading the name fails for some reason, we write an error message to screen and assumes that the name is Larry.
        <Db />
        Here we also see an example of what an <Ic>except</Ic>-block may contain - it can be used to fill a value if we failed to retrieve it properly for some reason, or to tell the user (or the programmer) what went wrong.

        <NoticeBlock>This is just an example. You should not assume that your user is named Larry in critical applications</NoticeBlock>
        
        <h3>Exceptions in Function Calls</h3>

        Let's talk a bit about how exceptions work in Python in general. When an exception is generated, Python will find out whether the code that generated the exception lies inside a <Ic>try</Ic>-block. If it cannot find such a <Ic>try</Ic>-block that wraps the place of exception in the current function (given that the code is within a function), it jumps back a step, to where the function was called and looks again for a <Ic>try</Ic>-block wrapping the function call.
        <Db />
        Python continues searching for a <Ic>try</Ic>-block backwards in the function call chain until one of two events occur:
        <Db />
        If it is no longer inside a function (that is, the code it is looking at is not written inside a function), and thus it cannot jump back to the previous function call, Python will just crash the program, like we have let it do so far.
        <Db />
        If it eventually finds a <Ic>try</Ic>-block, it will run the code in the corresponding <Ic>except</Ic>-block and then continue running the code beneath the <Ic>except</Ic>-block as usual. In other words, it will skip all the code that would otherwise have run between the place the exception was generated and until the <Ic>except</Ic>-block Python found.
        <Db />
        To see how this may look in practice, we can rewrite the code above with a function:
        <CodeBlock>{`def find_name(file_name):
    with open(file_name) as file:
        name = file.readline()

file_name = 'name.txt'
try:
    name = find_name(file_name)
except:
    print('Could not read the name from', file_name, ', assuming name is Larry')
    name = 'Larry'

print('Hey,', name)`}</CodeBlock>

        Here we have put all the code that reads the name from the file into a function that takes in the file name as an argument. When this code runs and an error occurs during opening or reading the file, an exception is generated, and Python jumps back to the function call <Ic>find_name(file_name)</Ic> and finds the <Ic>try</Ic>-block that wraps it. Seen from the outside, this code will do exactly the same as the one we wrote above.
        <Db />
        <Ic>try</Ic>-<Ic>except</Ic>-blocks may in other words capture exceptions that are thrown from deep within a chain of function calls. They can be used to cover a large amount of code where you are unsure where the error will occur, but you want to handle it anyway.

        <h3><Ic>try</Ic>-<Ic>except</Ic> for repeating a failed operation</h3>

        You may remember the program we had for getting the age of a user? When receiving user input there is always a danger that the input is not of the form we want, e.g. because the user does not write an integer when we ask for their age. We have already seen how we can use member functions on strings to know whether thy contain integers, but we can also use <Ic>try</Ic>-<Ic>except</Ic>-blocks to handle cases like these.

        <CodeBlock>{`def get_age():
    while True:
        try:
            age = int(input('Write your age: '))
            return age
        except:
            print('Could not read input as an integer, try again')

age = get_age()
print('In two years you will be', age + 2, 'years old')`}</CodeBlock>

        Inside the <Ic>get_age</Ic> function we have put the code that receives the age from the user inside a <Ic>try</Ic>-block, which again resides within a <Ic>while</Ic> loop. If the age retrieval in the <Ic>try</Ic>-block is able to read the user input without problems, the code will reach the <Ic>return</Ic> line and send the age back from the function. If, on the other hand, an exception arises, Python jumps into the <Ic>except</Ic>-block and tells the user to get it together. After Python has jumped out of the <Ic>except</Ic>-block, the loop block is run again so that the user can have another go.

        <h3>Different Types of Exceptions</h3>

        The <Ic>try</Ic>-<Ic>except</Ic>-blocks we have written above capture all exceptions that happen within the <Ic>try</Ic>-block. In practice we may only want to handle some of the exceptions that occur, for example when we know that many different problems may arise, but we only have reasonable ways of handling some of them.
        <Db />
        <Ic>except</Ic>-blocks lets you specify what type of exception you want to handle. We can specify them like this:
        <CodeBlock>{`try:
    <try-block>
except <exception type>:
    <except-block>`}</CodeBlock>

        When an exception is now generated in the <Ic>try</Ic>-block, Python will look for a corresponding <Ic>except</Ic>-block that captures the exception type that was generated. It searches backwards in the function call chain until it either finds such an <Ic>except</Ic>-block or disappears out of the program.
        <Db />
        So how do we as programmers know what exception type we are interested in? When an exception is generated but not handled in any <Ic>except</Ic>-block, Python will, as already mentioned, crash the program and write an error message. This error message contains the name of the exception type.
        <Db />
        If we, for example, try to open a file that does not exist, Python will say something like 
        <CodeBlock>{`Traceback (most recent call last):
  File "except.py", line 6, in <module>
    open('john_cena.jpg')
FileNotFoundError: [Errno 2] No such file or directory: 'john_cena.jpg'`}</CodeBlock>
        
        At the start of the bottom-most line we see the type of the exception that was generated: <Ic>FileNotFoundError</Ic>. Then we can write the following in order to handle the exception:

        <CodeBlock>{`try:
    with open('john_cena.jpg') as file:
        print(file.name)
except FileNotFoundError:
    print('Did not find John Cena')`}</CodeBlock>

        You can also receive the exception itself in a variable. This is done by adding a <Ic>{`as <variable name>`}</Ic> after the exception type. You can then use this variable to write the error message to screen, while also handling the error:
        <CodeBlock>{`try:
    with open('john_cena.jpg') as file:
        print(file.name)
except FileNotFoundError as e:
    print('Message in exception: ', e)
    print('Did not find John Cena')`}</CodeBlock>

        This code writes
        <CodeBlock>{`Message in exception: [Errno 2] No such file or directory: 'john_cena.jpg'
Did not find John Cena`}</CodeBlock>

        to the screen.
        <Db />
        
        If you specify the type <Ic>Exception</Ic>, the <Ic>except</Ic>-block will capture all exception types. This can be used to get a variable representing the exception and that could be used to find the type of the exception if you're unsure:
        <CodeBlock>{`try:
    <code doing something dangerous>
except Exception as e:
    print('Got an exception of type', type(e))`}</CodeBlock>

        Finally, we mention that you can put bultiple <Ic>except</Ic>-blocks that capture different exception types for the same <Ic>try</Ic>-block. This looks like this:

        <CodeBlock>{`try:
    <try-block>
except <first exception type>:
    <first except-block>
except <second exception type>:
    <second except-block>
...`}</CodeBlock>

        It will probably take a while before your code reaches a complexity where multiple <Ic>try</Ic>-blocks makes sense, but.. Anyway, here it is.

        <h2>Summary</h2>

        That's all, folks!
        <Db />
        When we talked about files in this post, we restricted ourselves to text files. We can do many interesting things with text files alone, but the horizen for what's possible to do with files will be expanded in the next post where we will go through multiple other file types.
        <Db />
        We have also taked about exception handling which can be useful in larger programs with uncertainty aspects to ensure Python does not crash the program unnecessarily. Often we do fine without handling exceptions on our own, but <Ic>try</Ic>-<Ic>except</Ic>-blocks can be nice having available anyway.
        <Db />
        IN the next post we will introduce <i>modules</i>, which lets us build programs with the help of code written by others. This will open up for a plethora of new possibilities for what our programs can do, and we will see a variation of examples of modules to give an impression of what's out there.

        <h2>Exercises</h2>

        1. Write a program that reads from a file and writes a new file where the lines are in opposite order, that is, last line in the original file becomes the first line in the new etc.
        <Db />
        2. Create a program that counts how many times the letter 'e' occurs in a given file.
        <Db />
        3. <a href='/files/countries_population.txt' download>Here is a file</a> that contains all the world's countries and corresponding population count anno 2021 (source: <a href='http://www.worldometers.info'>worldometers.info</a>). Use the data in this file and create programs that 
        <br />
        a. Writes the names of the countries to screen sorted alphabetically
        <br />
        b. Writes the names of all countries with population count larger than 10 million.
        <br />
        c. Finds out how many people are on this planet in total.
        <br />
        Tip for splitting each line: IN this file there are two spaces between every country and corresponding population count, while there is only one space between words in a country name that consists of more than one word.
    
        </PostWrapper>
    </>
);

export default FilesAndExceptionsEn;