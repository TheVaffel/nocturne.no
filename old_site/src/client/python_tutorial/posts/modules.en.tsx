import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const ModulesEn = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Hi again! This will be the last post where we focus on introducing new concepts in this series. The next post will largely be about working through a complex example where we put together most of what we've learnt in one project.
            <Db />
            But before that, we need to talk about <i>modules</i>. Modules is the door into a world where we can create all sorts of programs by building on top of code written by others. Modules or similar concepts exist in all serious programming languages and are often known as <i>libraries</i>.
            <Db />
            In this post we will first give an overview of what a module is, and specifically use the <Ic>random</Ic> module to demonstrate how to use them. Then we will walk through several other common modules and show how we can work with them. This is only a tiny collection of all the modules that exist out there.
            <Db />
            In the sections below, we will introduce some new concepts related to specific modules in addition to the modules themselves. We will not go into details on these concepts since it will quickly escalate out of the scope of what we want to communicate. You are recommended to read more about the modules and related concepts that you find the most interesting or relevant for ideas you have today or will have in the future!

            <h2>A simple module: <Ic>random</Ic></h2>

            When we want to use a module in our program, we have to <i>import</i> the module. To import a module in Python, we just write the line
                
            <CodeBlock>{`import <module name>`}</CodeBlock>

            You can put these <Ic>import</Ic> statements wherever you want in the program, but mostly every Python-programs put them all at the top of the program, before all other code. This lets us easily inspect the program to find out what modules it uses.
            <Db />
            Let's jump right to an example of a module that is used in many Python-scripts: <Ic>random</Ic>.
            <Db />

            The <Ic>random</Ic>-module contains different functions to create random numbers. All the programs we have seen so far have been <i>deterministic</i>, which means that the program behaves the same way every time it is run, given the same input. When we introduce randomness, this will no longer be the case.
            <Db />

            To import the <Ic>random</Ic> module into our program, we only need to write the line
            <CodeBlock>{`import random`}</CodeBlock>
            Now the module is ready for use!
            <Db />
            In this example we will just create a simple program for simulating the result from rolling a dice. Every time the program is started, it generates a random number between 1 and 6 that is written to the user. It may not come as a surprise that <Ic>random</Ic> can help us is this endeavor, but how do we know what kind specific functionality <Ic>random</Ic> offers to us?
            <Db />
            To see what functions and other things a module contains, it's best to read up on the <i>documentation</i> of the module. The documentation is usually easily accesible on the Internet. In our case a quick search with a search engine using e.g. the search term <i>python random documentation</i> will tell us that the documentation for the <Ic>random</Ic> module resides at <a href="https://docs.python.org/3/library/random.html">https://docs.python.org/3/library/random.html</a>.
            <Db />
            Reading through the documentation can feel hard an unintuitive initially, but it will get better quickly. Remember: You only need to read the parts that are relevant for the task at hand. 
            <Db />
            The documentation for <Ic>random</Ic> starts with a superficial overview of the content of the module. Don't panic if there are a lot of alien words in the text, it is common that documentation contains very specific information for advanced users. For beginners and the generally uninformed, it is important to keep focus and find your way to just the information we want and can understand.
            <Db />
            The documentation for the <Ic>random</Ic> module is divided into logical chunks, and we will quickly find a section about integers ("Functions for Integers"). Here we are presented with a few functions, and among those, <Ic>randint</Ic> is the most interesting. <Ic>randint(a, b)</Ic> generates a random number in the interval between <Ic>a</Ic> and <Ic>b</Ic>, where both end points are included. Note that Python is a tiny bit inconsistent at this point - while <Ic>range</Ic> does not include its last endpoint, <Ic>randint</Ic> does.
            <Db />

            When we have finally found the functions we want to use, it just remains to write it into our program! We have already imported <Ic>random</Ic> and can use the <Ic>randint</Ic> function in the <Ic>random</Ic> module by writing
            <CodeBlock>{`random_number = random.randint(1, 6)`}</CodeBlock>

            Thus, we use the syntax <Ic>{`<module name>.<function name>(<arguments>)`}</Ic> when calling a function that resides in a module. As we have already discussed, the function call gives us a random number between 1 and 6, inclusive.
            <Db />
            The last lines isn't all that interesting, so we jump straight to the conclusion and show the whole program in its full glory:
            <CodeBlock>{`import random
random_number = random.randint(1, 6)
print('You rolled a dice and got the number', random_number)`}</CodeBlock>

            That's all! In other words, it's not that much that is needed if you want to introduce some excitement to your user's day, or don't want a deterministic program for other reasons.

            <NoticeBlock>
                Strictly speaking, our program will still be deterministic even if we use the <Ic>random</Ic> module. Computers are fundamentally deterministic, which means that we cannot ask it to "choose" something randomly. The <Ic>random</Ic> module starts with a number that <i>looks</i> random, typically the timestamp in nanoseconds on the computer, and then performs a series of complicated mathematical operations on that numbers to create new numbers that look random to the user. Such behavior is called <i>pseudorandom</i> and it is the most common way of simulating random behavior on computers.
            </NoticeBlock>

            If we were to use <Ic>randint</Ic> several times, we would probably grow tired of writing <Ic>random</Ic> in front of it every time. In Pytho,n we can import module content as singular variables with the syntax <CodeBlock>{`from <module name> import <function name 1>, <function name 2> ...`}</CodeBlock>
            so that the two topmost lines of our programs could have been rewritten as 
            <CodeBlock>{`from random import randint
random_number = randint(1, 6)`}</CodeBlock>

            Another way of finding what functions a module contains, is to call <Ic>dir()</Ic> on the module. In other words, <Ic>dir(random)</Ic> (after having imported the module) will give you a list of all its content. This is very useful to quickly skim through what's offered, but does not help much when it comes to e.g. explaining what arguments a function takes.
            <Db />
            To read the documentation for a module without using the Internet, you can also open Python in interactive mode and run <Ic>{`help(<module name>)`}</Ic> or <Ic>{`help(module name>.<function name>`}</Ic> after having imported the module.

            <h2>The <Ic>math</Ic> module</h2>

            We mention the <Ic>math</Ic>-module just as a side note for the interested readers: <Ic>math</Ic> contains all kinds of common mathematical operations, including square root (<Ic>math.sqrt</Ic>), logarithms (<Ic>math.log</Ic>, <Ic>math.log2</Ic>, <Ic>math.log10</Ic>) and trigonometric functions (<Ic>math.sin</Ic>, <Ic>math.cos</Ic> etc.). The documentation for the <Ic>math</Ic> module is to be found <a href="https://docs.python.org/3/library/math.html">here</a>.

            <h2>JSON files</h2>

            JSON (<b>J</b>ava<b>s</b>cript <b>O</b>bject <b>N</b>onation) is a file format for storing structured information of any sort. JSON files has the file extension <Ic>.json</Ic> at the end of their names.
            <Db />
            The content in a JSON file is similar to how we define dictionaries in Python; curly brackets that wrap a series of comma-separated key-value pairs. As an example, a JSON file that contains information about a city could look like this:

            <CodeBlock>{`{
    "name": "London",
    "population": 8500000,
    "country": "England"
}`}
            </CodeBlock>

            In a JSON file, extra spaces, indentation or newlines do not have meaning; they are only included to make the file more readable to humans. One important difference from dictionaries in Python is that an object in a JSON file can only have strings as keys.
            <Db />
            The file content does not have to be just a dictionary, but can also be a list. Lists are written with square brackets (<Ic>[]</Ic>), just like they are in Python. In addition, the values within the object/dictionary can also be other objects and lists, and not only primitive data types like strings and numbers. This allows us to build fairly complex objects in the JSON file. Here is another example of a content in a JSON-file: A list of characters from Harry Potter, and miscellaneous information about them:
            <CodeBlock>{`[
    {
        "name": "Harry",
        "shoesize": 43,
        "friends": ["Ron", "Hermione"]
    },
    {
        "name": "Ron",
        "shoesize": 44,
        "friends": ["Harry", "Hermione"]
    },
    {
        "name": "Hermione",
        "shoesize": 41,
        "friends": ["Harry", "Ron"]
    },
    {
        "name": "Snape",
        "shoesize": 46,
        "friends": []
    }
]`}</CodeBlock>

            <h3>The <Ic>json</Ic> Module</h3>

            You may already have wondered why we are suddenly all about JSON. First and foremost, it's a common format for transferring information on the Internet, and because we have a module in Python that makes reading and interpreting a JSON file very simple. Enter the <Ic>json</Ic> module.
            <Db />

            The <Ic>json</Ic>-module has two main features: Read the JSON-content and translate it to an object we can use directly in Python, and to write a Python-object (a dictionary or a list) into JSON format. The documentation for this module can be found at <a href="https://docs.python.org/3/library/json.html">https://docs.python.org/3/library/json.html</a>, but we will show how to use it here as well.
            <Db />
            To demonstrate how the module works, we need JSON files to work with. Put the two JSON examples we wrote above into two different files. If you are using IDLE (or a somewhat normal text editor), this is done by creating a new file, select and copy the JSON content with Ctrl-C and paste it with Ctrl-V (or corresponding keys on Mac). When you are saving the file, remember to choose "all file types" and put a <Ic>.json</Ic>-ending at the file name. In our examples, we will call the two JSON files <Ic>city.json</Ic> and <Ic>characters.json</Ic> respectively.
            <Db />
            Let's try reading the first file. For that, we can use the <Ic>load</Ic> function in the <Ic>json</Ic> module. <Ic>load</Ic> takes a <i>file object</i> as input, which means we must open the file we want to road before sending it to <Ic>load</Ic>. Here is an example where we read the first of the two files:
            <CodeBlock>{`import json
            
with open('city.json') as file:
    city_dictionary = json.load(file)

print(city_dictionary['name'], 'is a city in', city_dictionary['country'], \\
    'with', city_dictionary['population'], 'citizens')`}</CodeBlock>
            
            (The backslash <Ic>{`\\`}</Ic> is only here to let us split a function call over several lines.)
            <Db />
            First, we import the module, then open the file, and thereafter let the <Ic>json.load</Ic> function do is magic by translating the file content into an Python object. Then we can use the object directly as we would a normal Python dictionary after having read it.
            <Db />
            We include an example where we first read an object from a JSON file, change the object, and then write it to another JSON file. Here we use the <Ic>dump</Ic> function, which does the exact opposite of <Ic>load</Ic> - it writes a Python object <i>to</i> a file.
            <CodeBlock>{`import json
            
with open('characters.json') as file:
    character_list = json.load(file)
    
for character in character_list:
    if character['name'] == 'Snape':
        character['friends'].append('Dumbledore')
        
with open('updated_characters.json', 'w') as file:
    json.dump(character_list, file)`}</CodeBlock>
            
            We first read the characters from the file, then go through them one by one and make sure that Snape has a friend. Then we open a new file for writing, and use <Ic>dump</Ic> to write the list with the updated object to the file.
            <Db />
            <Ic>json</Ic> is good to know about, because it simplifies storing complex information from a program and read it when running the program later to e.g. save something the user has done. But JSON files occur under other circumstances as well:

            <h2>Web requests</h2>

            Internet is a weird place, but it is possible to find useful information there as well. And we can use Python to get this information! In this section we will see how we can show weather data for today at a specific place, by sending a request through the Internet.

            <Db />
            To send a request on the Internet, we can use the <Ic>requests</Ic> module. But if you try writing <Ic>import requests</Ic> at the top of a program and try running it, you will quickly get an error saying it doesn't exist. That's because <Ic>requests</Ic> is not readily installed in most Python installations, which means you must install it on your computer before we can use it. We walk through how to do this here:

            <h3>Installing Packages</h3>

            Modules are grouped into <i>packages</i>, and packages is what we install when we want to get new modules. To install a package, we will need to use the terminal. How the terminal works, varies a bit from operating system to operating system. Here we have some short instructions on how to find the terminal on different platforms:

            <h4>Windows</h4>

            Click the start button in the bottom left of the screen and apply <i>cmd</i> or <i>command prompt</i>. Press enter, and there should open a window with some white text on a black background.

            <h4>MacOS</h4>

            Click the Launchpad icon at the program bar at the bottom of the screen (or wherever you have put it) and search for "Terminal". When you start it, it should open a window with some text in it.

            <h4>Linux (Ubuntu)</h4>

            Click the start menu and search for "Terminal" and click on the program to open it.

            <h4>Test the Terminal</h4>

            To test the terminal (no matter the operating system), write <Ic>python3</Ic> in the terminal and press enter. If you get back some text and a <Ic>{`>>>`}</Ic> just like in the interactive Python console, you can be sure that it works, and can exit the Python console by writing <Ic>exit()</Ic> and continue on the instructions underneath. If you instead get a message telling you <Ic>python3</Ic> could not be found, it probably means that Python was not added in the <Ic>PATH</Ic> variable during installation. If this is the case, the easiest solution is to install Python anew and make sure it is added to <Ic>PATH</Ic> by following the instructions at the beginning of this blog. Don't be afraid if you need to do this - none of the programs you have written so far will disappear, provided you didn't save them just where Python was installed!

            <NoticeBlock>In Windows you risk experiencing a third alternative: Windows opens Microsoft Store to download Python. If this happens, you need to follow the instructions some way down in the Microsoft Store window. They will tell you to go to the start menu, find the "Manage App Execution Aliases" program, and there turn of aliases for Python and Python3. After this you can close the terminal you opened initially and open a new one and try running <Ic>python3</Ic> again.
            </NoticeBlock>

            <h4><Ic>pip</Ic></h4>
            The most common way of installing packages in Python, is by using the program <Ic>pip</Ic>, which is installed on your computer together with Python. <Ic>pip</Ic> is a command line program, which means it is run from the terminal and you won't get a window with a user interface for it. If you write <Ic>pip</Ic> in the terminal and press enter, you will receive instructions on how the program can be used. Don't panic if you don't understand a thing - we will now walk through how to install a package:
            <Db />
            The module we will use for web requests is, as already mentioned, called <Ic>requests</Ic>, and the package in which it belongs has the same name. To install the <Ic>requests</Ic> package with <Ic>pip</Ic>, we just write
            <CodeBlock>{`pip install requests`}</CodeBlock>
            in the terminal and press enter. If you're lucky, <Ic>pip</Ic> will now tell you that it is downloading <Ic>requests</Ic> and a few other packages. The reason it downloads more than just <Ic>requests</Ic>, is that <Ic>requests</Ic> depends on these other packages in order to work. If <Ic>pip</Ic> only gives you an error message, your best hope will be to use the message as search term on the Internet and see if you can find a good solution for your problem.
            <Db />
            If the preceding step worked for you, congratulations! <Ic>requests</Ic> has been installed! Command line programs like <Ic>pip</Ic> can seem scary in the beginning, but they are extremely quick when you know how to use them.

            <h3>Send a Request</h3>

            We start by sending a simple HTTP GET request to nocturne.no. Don't worry if these terms are mysterious to you - networks and requests could have been its own chapter in this blog. Here we just jump past all such details and only show how we can send simple requests. If you are interested, you can read the documentation for <Ic>requests</Ic> here: <a href="https://docs.python-requests.org/en/master/index.html">https://docs.python-requests.org/en/master/index.html</a>.
            <Db />
            To send  GET request, we just use the <Ic>get()</Ic> function in the <Ic>requests</Ic> module. The <Ic>get</Ic> function can take several arguments, but only one is required: The URL. The URL (<b>U</b>niform <b>R</b>esource <b>L</b>ocator) is simply a web address, just like the one you write in your web browser to get to a website. The URL we will use in this example is <Ic>https://nocturne.no/hey</Ic>. Here, <Ic>nocturne.no</Ic> is the <i>domain name</i> and <Ic>/hey</Ic> is the <i>path</i>. The path is not arbitrary, the server that hosts nocturne.no is programmed to give a response when someone sends a GET request to the <Ic>/hey</Ic> path. Enough talking - time for some code:
            <CodeBlock>{`import requests
            
response = requests.get('https://nocturne.no/hey')

message_object = response.json()
print('The message is:', message_object['message'])`}</CodeBlock>

            We have sent a requests and, with some luck, gotten a reply from the server. The reply is represented in a response object which we store in the variable <Ic>response</Ic>. The response variable contains various information in addition to the response data itself, but here we are only interested in the data. For this requests we expect to receive response data that contains a JSON object containing a key named <Ic>'message'</Ic>. To extract this object, we use the <Ic>.json()</Ic> member function on the response object, which automatically translates the JSON content into a Python dictionary. In the end, we write the message we received to the screen. Try the code yourself and see if you get the message!

            <Db />
            Let's try fetching some weather data by the help of the <Ic>requests</Ic> module. To achieve this, we will send a request to <a href="met.no">met.no</a>, owned by the Norwegian Institute of Meteorology. In addition to a normal website, met.no also has a <i>API</i> (<b>A</b>pplication <b>P</b>rogramming <b>I</b>nterface), which is a set of paths to which we can send requests, made for programs rather than human users.
            <Db />
            Here is an overview of the different paths we can use to fetch data from met.no: <a href="https://api.met.no/weatherapi/locationforecast/2.0/#!/data/get_compact">https://api.met.no/weatherapi/locationforecast/2.0/#!/data/get_compact</a>. Such paths are also called <i>end points</i>. We will use the end point <Ic>/compact</Ic> in our example. The description can be hard to read in the beginning, but in short, <Ic>/compact</Ic> lets us send coordinates for any place on earth and receive weather data for that position. We will use Oslo, which has coordinates  59.913889, 10.752222, in the example. (The coordinates need to be in decimal form, as opposed to DMS-format which divides the coordinates into degrees, minutes and seconds.)
            <Db />
            Before we begin, you should be aware of the <a href="https://developer.yr.no/doc/TermsOfService/">User Agreement for the Norwegian Institute of Meteorology's API</a>. Roughly speaking, it tells you to not send too many requests, and that you need to identify yourself. We'll run through the identification bit shortly, but the first part will be for you to overhold. "Too many requests" is, of course, not a very precise definition. What you need to watch out for, first and foremost, is not to send requests again and again within a loop without any form of waiting between each request. As a rule of thumb, you should not send more than one request every tenth second while testing the endpoints, as long as you don't want your own spot on the Norwegian Institute of Meteorology's blacklist.
            <Db />
            For identification, you can just use your private e-mail address. The e-mail address will be put in the <i>header</i> of our request. Headers are just a series of key-value pairs that is sent as a part of the request. The e-mail address will be put in the header at the key <Ic>'User-Agent'</Ic>. In addition, we will explicitly ask for a JSON object back, as opposed to other file formats the endpoint could possibly return. We do this by setting the header <Ic>'Accept'</Ic> to <Ic>application/json</Ic>. We will specify the headers with the help of a Python dictionary, and similarily with the coordinates, that are sent as parameters. The code for sending the request will then end up looking like this: (remember switching out the e-mail address if you copy this code!)

            <CodeBlock>{`import requests
            
headers = { 'User-Agent': <e-mail address>, 'Accept': 'application/json' }
parameters = { 'lat': 59.913889, 'lon': 10.752222}
response = requests.get('https://api.met.no/weatherapi/locationforecast/2.0/compact', \\
    headers=headers, params=parameters)`}</CodeBlock>

            Nice, but how do we know what we receive in the response? The overview of the endpoints at met.no contains an example of a response from the <Ic>/compact</Ic> endpoint, which is a large JSON object. It is an object with a <Ic>'properties'</Ic> field, which in turn contains a field named <Ic>'timeseries'</Ic> which is a list. This list contains weather reports for the given coordinates for a series of time stamps. The object that gives us information about the weather just now can be found in <Ic>['data']['instant']['details']</Ic>. As an example, we can get a temperature and a corresponding time stamp from the response we got above by writing:

            <CodeBlock>{`data = response.json()

temperature = data['properties']['timeseries'][0]['data'] \\
    ['instant']['details']['air_temperature']
timestamp = data['properties']['timeseries'][0]['time']

print('At the timestamp', timestamp, 'the temperature was', temperature, 'in Oslo')`}
            </CodeBlock>
            If everything goes according to plan, you will get an output message looking something like this:
            <CodeBlock>{`At the time stamp 2021-07-17T17:00:00Z the temperature was 27.8 in Oslo`}</CodeBlock>
            The timestamp here is formatted in UTC-format. It's not too hard to read, but remember that the time will always be provided for Greenwich in England, meaning that you may need to add some number of hours to arrive at your local time.
            <Db />
            That's it! This was a very long and information-heavy section, but hopefully you got something helpful out of it. There are many web pages that provide APIs, meaning there is lots of information out there that you can make use of in your programs. It's only to fire up your favorite search engine and find out if there's an API out there containing exactly the data you want!

            <h2>Window Applications</h2>

            We touch upon another module while we're at it: We look at how we can create window based applications in Python. This will allow us te create programs that are easier and more intuitive to use, in addition to allowing for visual information. There are several modules out there that can be used for creating windows, but in this example we will use the module <Ic>tkinter</Ic>. The official documentation for <Ic>tkinter</Ic> can be found <a href="https://docs.python.org/3/library/tkinter.html">here</a>. Unfortunately, the documentation can be hard to read at this point because it makes use of <i>classes</i>, which are a concept we have not looked at in this tutorial.
            <Db />
            <Ic>tkinter</Ic> should already be installed together with Python. If this is not the case for your setup, you will have to install <Ic>tkinter</Ic> using <Ic>pip</Ic> just like we did with the <Ic>requests</Ic> module above.
            <Db />
            The most common way of importing <Ic>tkinter</Ic> is by writing
            <CodeBlock>{`import tkinter as tk`}</CodeBlock>
            When we append the <Ic>as tk</Ic> after the module name, we tell Python that we are going to use the name <Ic>tk</Ic> to refer to the module in the program. This is a bit shorter for us to write, making it somewhat more comfortable writing the program since we will refer to the module several times.
            <Db />
            <Ic>tkinter</Ic> contains objects and functions for constructing windows and components you can place inside them, like text and buttons. To create a window, we use
            <CodeBlock>{`window = tk.Tk()`}</CodeBlock>
            Notice that the function <Ic>Tk()</Ic> is capitalized. In Python, this is a convention for <i>constructors</i>, which are functions that create and return <i>instances</i> of <i>classes</i>. These are concepts we won't explain here; for our purposes, it suffices to think of constructors as normal functions that return objects.
            <Db />
            When we have a <Ic>Tk</Ic> object, we already have a window we can show to the screen. But if you run the above program, it will exit almost immediately without a window appearing. To show the window we ned to call the <Ic>mainloop()</Ic> member function on the <Ic>Tk</Ic> object. <Ic>mainloop()</Ic> "captures" Python, so that it doesn't read more of the code before the window is closed. Thus, an elementary window application can be written like this:
            <CodeBlock>{`import tkinter as tk
            
window = tk.Tk()
window.mainloop()`}</CodeBlock>

            If you run this code, you will get a glaring empty window appearing on your screen. A good start!
            <Db />
            Let's make som cosmetic adjustments on the window. First, we can call the member function <Ic>title()</Ic> on the window object with a string arguments to give it a title that will be shown at the topmost edge of the window. Some properties with the window can also be changed by indexng with strings into the object as if it was a dictionary. To e.g. change the background color of the window, we can set the value at index <Ic>'bg'</Ic> to e.g. <Ic>'red'</Ic>. Written in clear text, these two examples will look like this:
            <CodeBlock>{`window.title('This is a title!')
window['bg'] = 'red'`}</CodeBlock>
            Remember to put these two lines before the call to <Ic>mainloop</Ic>, otherwise they won't be run before after the window is closed.
            <Db />
            Let's add a button. When we create a butten, we can use the <Ic>Button</Ic> function. It takes one argument, namely the window the button is to be put into. If we continue on the program above, we can thus create the button like this: 
            <CodeBlock>{`button = tk.Button(window)`}</CodeBlock>
            This alone is not enough for the button to appear. For that we will need to specify <i>how</i> the button is to be placed. Here, we will do it with the help of the member function <Ic>pack</Ic>. We can call <Ic>pack</Ic> without arguments like this:
            <CodeBlock>{`button.pack()`}</CodeBlock>
            This will place the button, which right now is only a small gray rectangle, at the top of the window in the middle. Make sure that both the initialization of <Ic>button</Ic> and the <Ic>pack</Ic>-call happens before the call to <Ic>mainloop</Ic>.
            <Db />
            If we want to be more creative with the placement of the button, we can specify at which of the four sides we want the button to be placed using the <Ic>side</Ic> argument. We may also add some space on the sides and above and below the button with the arguments <Ic>padx</Ic> and <Ic>pady</Ic> respectively. The values of <Ic>padx</Ic> and <Ic>pady</Ic> is given in pixels. To place a button to the left, with some space from the edge, we can replace the <Ic>pack</Ic> call above with
            <CodeBlock>{`button.pack(side='left', padx='30')`}</CodeBlock>
            An empty rectangle is not very exciting. To make it more informative, we can use the <Ic>'text'</Ic> attibute. We set this attribute in the same way that we set the background color of the window above:
            <CodeBlock>{`button['text'] = 'This is a button!'`}</CodeBlock>
            Other attributes we can set for buttons include width and height (<Ic>'width'</Ic> and <Ic>'height'</Ic>, specified in pixels) and <Ic>'fg'</Ic> and <Ic>'bg'</Ic> to set the text color and the color of the rest of the button, respectively.
            <Db />
            Naturally, we usually want the button to do more than just lie there and look cute. How do we decide what happens when someone presses the button? The answer is the attribute <Ic>'command'</Ic>, whose value is a function. When the user presses the button, the function is run.
            <Db />
            Here, the button is coupled with a simple function:
            <CodeBlock>{`def hey():
    print('Hello!')
    
button['command'] = hey`}</CodeBlock>
            Note that when we set the <Ic>'command'</Ic> attribute, we write <Ic>hey</Ic> and not <Ic>hey()</Ic>. This is because we want to refer to the function itself and <i>not</i> call it and refer to the return value (which in this case would have been nothing). Try adding this in the program (still before the <Ic>mainloop</Ic> call) and see for yourself that you receive some text each time you press the button!
            <Db />
            At last, we include a more complex example where we use what we have seen in this section combined with the <Ic>random</Ic> module:

            <CodeBlock>{`from random import randint
import tkinter as tk

window = tk.Tk()

button = tk.Button(window)
button['text'] = 'Change color'

def change_color():
    colors = ['red', 'blue', 'yellow', 'green', 'brown', 'black', 'white', 'gray', 'turquoise']

    last_index = len(colors) - 1
    chosen_index = randint(0, last_index)
    chosen_color = colors[chosen_index]
    window['bg'] = chosen_color

button['command'] = change_color
button.pack(side='top', pady=40)

window.mainloop()`}</CodeBlock>

            We have already gone through all the concepts we have used in this program, but it is more complex than most of what we've seen before. Run it and read the code and see if you can understand how it works!
            
            <h2>A Note on Figuring out How to Do Stuff™</h2>

            If you've taken a look at the documentation links provided in this post, there is a chance you already feel discouraged from going out in the wild and trying to figure out what packages you want to use and how to use them. Luckily, in this day and age, there is often an easier approach.
            <Db />
            That approach is simply to search for the answer on the Internet. To take a specific example - we have not yet mentioned how to change the size of the text in the button we created above. Also, the documentation does not seem to have that information easily available. Instead, we can use the search term "tkinter button text size" in any search engine, and see if someone has wondered about how to this before. In this specific example, you may e.g. be shown to the web page <a href="https://stackoverflow.com/questions/20588417/how-to-change-font-and-size-of-buttons-and-frame-in-tkinter-using-python">https://stackoverflow.com/questions/20588417/how-to-change-font-and-size-of-buttons-and-frame-in-tkinter-using-python</a>, which gives you an example of how to set the font size.
            <Db />
            There is no shame in searching for the answer directly like this rather than reading the documentation trying to find exactly what you want. This is usually much quicker and easier than the alternative, and is in fact the most common way of finding out what to do even for experienced programmers.
            
            <h2>Dividing a Program into Modules</h2>

            At the brink of this post, we mention another use for the module concept:
            <Db />
            The module concept can be used to divide your program into several files. When the program consists of multiple Python files, one of them will be the "main file" which is run as normal. The other files can contain functions and variables that can be used from the main file.
            <Db />
            To import other Python files, say <Ic>cool_functions.py</Ic>, you will need that this file and the file you are importing into, reside in the same folder. Then you only need to write
            <CodeBlock>{`import cool_functions`}</CodeBlock>
            Notice that we only write <Ic>cool_functions</Ic> without the <Ic>.py</Ic> at the end. That's all! Now you can use the functions defined in <Ic>cool_functions.py</Ic> inside the file where you wrote the above line!
            <Db />
            You may also import files into other files than the main one. If e.g. you have a file that is called <Ic>hey.py</Ic> that contains a function:
            <CodeBlock>{`def say_hi():
    print('Hi?')`}</CodeBlock>
            
            And another file called <Ic>superhey.py</Ic> containing
            <CodeBlock>{`import hey

def superhey(number):
    for i in range(number):
        hey.say_hi()`}</CodeBlock>

            , then you can create a main file, say <Ic>main.py</Ic> that looks like this:
            <CodeBlock>{`import superhey

superhey.superhey(5)`}</CodeBlock>
            
            Which writes a confused greeting to the screen five times.

            <Db />
            Splitting your programs into several files is probably not something you need to think about currently. It is only when your code is becoming increasingly large and hard to handle that you can start thinking of categorizing it into several files to make it easier to work with.

            <h2>Summary</h2>

            That was a bit of a monster post! Whether you read everything or not, I hope you found <i>something</i> reasonable in the myriad above. Generally, using modules is central to the practice of programming. That's why we have tried to both show how modules work and how you can find documentation. It might be a large difference in how easy they are to understand and how well documented different modules are, but you become more comfortable with working with modules the more you... Work with modules. 
            <Db />
            And don't be afraid of firing up a search engine whenever you need it!
            <Db />
            As already mentioned, this is only a small taste of what's out there. There are modules for all kinds of purposes, so if you have an idea for a programming project, there is a large chance that there exist modules that can help you out!
            <Db />
            <Db />
            This marks the end of the main part of this Python tutorial. In principle, we have gone through everything you need for creating a plethora of different programs - the main challenge that remains is to be more comfortable with the language and the way of thinking, and in that manner, there's little else to do than keeping at it.
            <Db />
            After this one, there will be at least one bonus post where we walk through a specific project and show how you can go from an idea to a simple program by using what we've learnt up to this point.
            <Db />
            The author of this blog hopes that you have found something useful while reading this series and that it has been educational, interesting and even fun? In either case, I hope that your programming adventure doesn't stop here, but that you use your newfound knowledge to explore further and use coding to create something that helps you or that you can be proud of!

            <h2>Exercises</h2>

            If you don't have any programming ideas on your own yet, you might as well start here! Some of these exercises will be more challenging than the ones we've seen earlier, first and foremost because they require that you read up on documentation for other modules in orderd to use them. Don't feel pressured to do all of them - choose the ones that seem the most interesting and relevant. And take your time - there will probably be enough time later on to feel stressed.
            <Db />
            1. Simulate a simple dice game - see how many times you get e.g. six eyes when throwing the die one million times. Does the result fit with your intuition? If you know some mathematics: Find out approximately how large the chance of getting a sum of at least 15 when throwing three dice - by using simulations.
            <Db />
            2. Try <a href="https://data.ssb.no/api/v0/dataset/?lang=en">APIet til ssb.no, the Norwegian Statistics Bureau</a> to fetch statistics about something that interests you.
            <Db />
            3. Create a guessing game with a window. Choose a random number with the <Ic>random</Ic> module and use <Ic>tkinter</Ic> for creating a user interface with a text field and a button for guessing, and some text telling the user whether they guessed too high or too low. You can use the <Ic>tk.Entry()</Ic> function to create an input text field and <Ic>tk.Text()</Ic> to create text that will be shown to the user.
            <Db />
            4. If you are interested in statistics, you can try out <a href="https://matplotlib.org/stable/index.html">matplotlib</a> for creating diagrams and plots to visualize data! If you look at  <a href="https://matplotlib.org/stable/gallery/index.html">the gallery</a>, you can find many examples of what to create. If you feel extra adventorous, you can try combining this with the results from the dice simulation in exercise 1 or the statistics from exercise 2.
            <Db />
            5. Use the <a href="https://docs.python.org/3/library/turtle.html#module-turtle">turtle module</a> to create some interesting drawings!
        </PostWrapper>
    </>
);

export default ModulesEn;