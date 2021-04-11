import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostHeader } from  '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const HelloWorldEn = (props: TutorialPostProps) => (
    <>
    <PostHeader metadata={props.metadata} />
    In this post, we will setup all that is needed to work with Python.
    After having worked our way through this post, we will have

    <ul>
        <li>Installed Python</li>
        <li>Chosen an appropriate text editor</li>
        <li>Written our first program</li>
        <li>Run our first program</li>
    </ul>

    The program we are going to create will be very minimal - everything it is supposed to do,
    is to write the text "Hello world!" to the screen, and then exit. It's a tradition that
    introductions to programming languages start with such a "hello world"-program. The program itself
    will not be particularily exciting, but when you see the words "Hello world!" appear
    on your screen, you will know for sure that you have successfully done all the
    steps in this post correctly, and can continue on with learning Python.
    <Db />
    Unfortunately, there are differences in the setup and installation steps that depend
    on your operating system and other factors. Therefore, it is virtually impossible to 
    provide details on installation and setup for all possible computers. In addition,
    small mistakes may quickly direct an inexperienced user down a miserable path.
    If you find yourself struggling to get past one of the steps below, I will recommend that
    you try reading through the steps again to make sure you didn't miss anything,
    or otherwise search the Internet for a solution to any specific problem that you encounter.

    <h2>Installation</h2>

    The procedure for installing Python depends on what operating system you're using.
    This section will therefore be divided into instructions for different operating systems,
    you only need to follow the part that applies to you. In case you are unsure of which
    operating system you are using, I've put down rules of thumb in each subheader below to help
    you find out.

    <h3>Windows (you don't have a logo resembling an apple on your machine) </h3>
    Go to <a href="https://python.org">python.org</a> and press
    "Downloads" under the Python logo. Here, you will find a large, yellow (at the time of writing, at least) button
    for downloading the newest version of Python. This introduction will focus on Python 3, which is currently
    the newest version. If you are reading this far into the future, you should
    double check that you are indeed downloading a version of Python 3. Press the button.

    <Db />
    Press "Save file", wait until it's downloaded, and click on the download
    when it's finished. Where to click on the download depends on what 
    browser you are using. You can usually find the downloads at the bottom 
    or the top right in the browser window.
    The downloaded file is an installation file named something like python-3.X.X.XXX.exe, where the X-es
    depends on Python version and other things.
    <Db />
    When you click the installation file, you will open a window that will help you with the installation. 
    Note that you will need administrator privileges to install Python. If you want to customize the installation,
    that is, choose where and what components to install, you can choose to do that here. If you do so,
    however, know that later posts will assume that you have installed IDLE and Pip in this step, so make sure
    to get those as well. If you intend to use Python on the command line, make sure that "Add Python 3.X to PATH" is
    selected at the bottom of the window. This is not necessary for this tutorial.
    You can press "Install now" if you have no strong opinions on how you want to install Python, 
    which likely goes most users.
    <Db />
    After having accepted the installation as an idministrator, the program will conduct the installation
    process on its own. When it's finished, you can close the window and be happy that Python is now installed!

    <h3>MacOS (you <i>do</i> have a logo resembling an apple on your machine)</h3>
    
    Before we begin, I have a confession to make: It's several years since last time I touched a Mac, and
    I've never happened to be in the possession of one. Therefore, these instructions will be far less
    detailed than the ones concerning Windows, as to avoid as much confusion as possible, since
    I don't really have a Mac to test with at the moment.
    The steps will, however, largely resemble those for Windows, in that we will download an installation
    program that takes care of most of the hard work for us.
    <Db />

    Go to <a href="https://python.org">python.org</a> and press "Downloads" under the Python logo. Beneath "Stable Releases",
    look after at newest Python release and download and save one of the installation programs ("Download macOS 64-bit XXX installer").
    After the program is downloaded, find the download in your browser (typically at the bottom of the window, or at the top right), 
    and click to open it.

    <Db />
    From here on, you are a bit on your own. The installation program will hopefully give you the guidance you
    need. In case you get stuck, I recommend trying to find inspiration in the Windows section above, or
    otherwise look for answers on the Internet.

    <h3>Linux (if you're unsure whether your computer has Linux, the answer is likely <b>no</b></h3>)

    These instructions will be valid for Debian-based distributions (including Ubuntu and Linux Mint).
    If you are using a distribution that is not Debian-based, you will likely be able to install Python
    through your distribution's package manager, e.g. by using <Ic>yum</Ic> instead of <Ic>apt</Ic>.

    <Db />
    Open the terminal and write 
    <CodeBlock>{`$ sudo apt install python`}</CodeBlock>
    without <Ic>$</Ic> at the beginning. Write your administrator password, and wait until it's done.

    <h2>The Text Editor</h2>

    The text editor is the program we use when writing code. What characterizes text editors, is that they
    allow us to write pure text to a file, as opposed to e.g. Microsoft Word, which also stores
    information regarding text size, font, colors etc. We want the files that contain our code to only 
    contain text, and no information regardng e.g. formatting.
    <Db />
    An example of a program that could work as a text editor, is Windows' Notepad, which only 
    operates on pure text. Usually, we prefer more specialized code editors which contain
    useful functionality, like syntax highlighting, which colors different words in your code
    as you write, marking their syntactic roles and making the code easier to read.
    Other features that can be included in a code editor, is embedded file hierarchy navigation, 
    debugging (which will be explained later), and completion suggestions when writing.
    <h3>IDLE</h3>
    For this tutorial, I will recommend IDLE, which is a simple code editor for Python.
    It does not contain a whole lot of luxurious functionality, but I recommend starting
    with it nevertheless, as it will make it easier to focus on the code in the beginning.
    The features in IDLE include syntax highlighting and file execution, both of which we will make use of.
    <Db />
    IDLE is installed together with Python, so you should be able to use it right off the bat.
    Search for "IDLE" in the start-menu on your machine and open it. This will open
    a window with some text in it. We will use this window as the starting point
    when we start programming in the next section.
    <h3>Other editors</h3>
    You are free to use other editors than IDLE, but the instructions for creating and executing
    a file are going to assume that you are using IDLE. There are lots of editors to choose from,
    and many of them work on all popular operating systems: Visual Code, Atom Editor and Sublime 
    are all common choices of text editors. Among other features, they can boasn with embedded file
    navigation and various extensions for running Python programs. Another alternative for running 
    Python programs, independent of what editor you are using, is to run <Ic>python {`<file name>`}</Ic> in
    your terminal, where <Ic>{`<file name>`}</Ic> is the name of the program file you have written 
    and want to run. Don't worry if you don't know how to use a terminal, it will not be
    necessary for this blog series.
    <Db />
    Some editors contain functionality for simultaneously keeping track of many files in big projects
    and allow for version management and debugging directly in the editor. These 
    often called IDEs (Integrated Development Environtents), and make your life
    a lot easier when you have many files to think about.
    An example of such an IDE for Python is Spyder.
    However, I will repeat my recommandation of keeping to a simpler editor in the beginning,
    until you have a better grasp of Python.

    <h2>Programming - at last</h2>
    
    Finally it's time to do what we came for! It's time to make our first program!
    <Db />
    We start with creating a new file which will contain our code. In IDLE, 
    this can be done by clicking "File"-&gt;"New File" at the top left of the window. 
    Alternatively, you can press <kbd>ctrl+N</kbd> (<kbd>cmd+N</kbd> on Mac). 
    You will then get a new, empty window. This is where we will write our program.
    In the window, write the following:
    <CodeBlock>
        print('Hello world!')
    </CodeBlock>
    This is our entire first program! It is important that both paratheses and apostrophes
    are as shown above. As already mentioned, this is a minimal program, whose only function
    is to help you with understanding how we go forth when programming. I will not 
    spend a lot of time explaining this code, since that is in the scope of the rest of this 
    tutorial. Put shortly, it will print the text "Hello world!" (without quotes) to the screen.
    <Db />
    Next step is saving the file. Press "File"-&gt;"Save" at the top left of the window,
    alternatively <kbd>ctrl+S</kbd> (<kbd>cmd+S</kbd> on Mac). Choose a location to save the file.
    It doesn't matter where you put it, but it could be a good idea to save it somewhere where
    you can find it again later. For example, you can make a new folder under Documents called "Python"
    and store it there. Give it an informative name, e.g. <Ic>hello_world.py</Ic>, and save. It's
    a good idea to put ".py" at the end of the file so that it is recognized as a Python file by
    humans and machines alike. If you don't add that ending yourself, IDLE will do it for you.
    <Db />
    Then it's only one thing left to do...
    
    <h2>Go!</h2>

    To run the program, press "Run"-&gt;"Run Module" at the top of the window. A new
    window will pop up with a bit of text. Near the bottom of the text, you will 
    hopefully find the output of running our program:
    <CodeBlock>
        Hello world!
    </CodeBlock>
    And with that, we have written and run our first program! You can close the new window
    after having inspected the result of the run.
    <Db />
    If you did not get this result, or get an error, make sure you have written the program exactly
    as it was given above. If you get some kind of error message, I will yet again
    recommend searching on the Internet for a solution.


    <h2>Summary</h2>

    Through this post, you have installed Python, made a Python file, run it, and observed its result.
    If everything went well thus far, it means you are well prepared to start learning Python!
    <Db />
    In the next post, we will have a look at interactive Python and use it to learn about variables.

    </>
);

export default HelloWorldEn;