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
            <Db />
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
        </PostWrapper>
    </>
);

export default ModulesEn;