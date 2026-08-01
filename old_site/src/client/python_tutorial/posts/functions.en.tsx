import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const FunctionsEn = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            In this post, we will explore <i>functions</i>, which allow us to divide our code into smaller, reusable parts. We have already used function several times, for instance, both <Ic>print()</Ic> and <Ic>int()</Ic> are functions. Here, we will see how we can create our own functions and discuss in what cases they make sense to create. We will also take a closer look at some of the functions we have used already.
            <Db />
            In essence, a function is a block of code which is given its own name. In the same way that we can use the name of a variable to refer to the value of it, we can use the name of a function to run the code that the function contains. We create a function in the following way:
            <CodeBlock>{`def <name>(<argument0>, <argument1>, <...>):
    <function body>`}</CodeBlock>

            We call this a <i>function definition</i>. It starts with the word <Ic>def</Ic> followed by the name we want to give our function. Then follows a comma-seperated list of <i>arguments</i> surrounded by parantheses. We will talk about arguments later on - to begin with, we will only look at functions with zero arguments, having empty paratheses. At the end of the first line of the function definition, we write a colon, similarily to how we create if-statements and loops.
            <Db />
            On the next line, the <i>function body</i> begins. This is where we write the function's code. It is written with indentation, just lik if-blocks and loop blocks, and lasts until the first line without indentation.
            <Db />
            In the same way that we name variables, we can freely choose the names of our functions. The same rules of thumb apply - the name should be descriptive; it should say something about what the function does. 
            <Db />
            Note that the code in the function body is <i>not</i> run when Python reads the function definition. The function definition just makes the code in the function body available, so that it can be run at a later time.
            <Db />
            We start by looking at a very simple function:
            <CodeBlock>
                {`def say_hello():
    print('hello')

say_hello()`}
            </CodeBlock>
            Here, we have first defined the function <Ic>say_hello</Ic>. As we can see, the parantheses after the function name are empty, indicating that there are no arguments, but they must be included nevertheless. The function body contains one line, which writes "hello" to the screen.
            <Db />
            At the bottom of the above program, we have written <Ic>say_hello()</Ic>, that is, the name of our function, with empty paratheses. Note that it is not a part of the function body, since it is not indented. When Python reads this line, it will <i>run</i> the code in the function body. We say that we <i>call</i> the function, and <i>say_hello()</i> is what we call a <i>function call</i>.
            <Db />
            When we call a function, Python jumps from the place of the function call to the code in the function, and then then jumps back to where the function call happened when it has finished running the code in the function body.
            <Db />
            This is not a particularily interesting example, since there is a rather small gain from writing this program in this way, rather than just writing the program as 
            <CodeBlock>{`print('hello')`}</CodeBlock>
            which would give the same result. We will soon look at more complex examples where it makes more sense to use functions, but first we will introduce return values.
            <h2>Return Values</h2>
            In addition to running code, function calls can also give back a value. Values that are sent back from a function are called <i>return values</i>. In order to send a value back from a function, we use the word <Ic>return</Ic>. Here, for example, is a function that asks the user to write their name and returns whatever the user writes:
            <CodeBlock>
                {`def get_username():
    print('Write your name: ')
    name = input()
    return name`}
            </CodeBlock>
            The function <Ic>get_username</Ic> asks the user to write their name, then stores the input into a variable, and lastly returns that variable. In this case, we could just as well have written <Ic>return input()</Ic> instead of the last two lines.
            <Db />
            After having defined this function, we can (further down in the same file) use it e.g. for greeting users:
            <CodeBlock>{`name = get_username()
print('Hello, ' + name)`}</CodeBlock>
            Here, Python starts by reading the first line and sees that the variable <Ic>name</Ic> is to be set to the return value from the function call <Ic>get_username()</Ic>. Thus, it jumps to the function <Ic>get_username</Ic> and runs the code there: It asks the user for a name, retrieves the name, and returns it. The <Ic>return</Ic> line makes Python jump back to the line <Ic>name = get_username()</Ic> with the return value, which is the name the user wrote. The name is then put into a variable <Ic>name</Ic>, and Python can finally read the last line and write a greeting to the user.
            <Db />
            In the code above, we have defined two variables called <Ic>name</Ic>, one inside the function and one after. They are completely independent; a variable that is defined within a function cannot be used outside the function, and does not in any way influence any other variables. This means that we don't have to worry that the variable <Ic>name</Ic>, which we initialize in <Ic>get_username</Ic>, is going to change the value of any other variable in the program that happens to have the same name.
            
            <h2>A Larger Example</h2>

            Let's look at a more believable example in which a function can be of help. Here is a program that asks the user for year of birth, and writes how old the user turns this year (making the simplified assumption that "this year" is the year 2021). As a small twist, we have also included included a loop that will ensure that we get a number between 1900 and 2021 inclusive, we ask the user again and again until we get a number that satisfies this requirement. Here is the code:

            <CodeBlock>{`print('Write your year of birth:')
user_input = input()
year_of_birth = int(user_input)

while year_of_birth < 1900 or year_of_birth > 2021:
    print('Year of birth is invalid!')
    
    print('Write your year of birth:')
    user_input = input()
    year_of_birth = int(user_input)
    
age_this_year = 2021 - year_of_birth
print('You turn ' + str(age_this_year) + ' years old this year!')`}
            </CodeBlock>
            This code works just fine, but has room for improvement. Note that the three lines at the top of the program and the three lines at the bottom of the while block are identical. This is where the alarm should sound. It is generally frowned upon to have blocks of identical code multiple places in the program, when using functions is an alternative. It makes the code unnecessarily long, and if you want to change the code in one place, let's say, to correct an error, you will need to make corresponding changes at every place where the code is copied. This might sound like a stupid problem, but it happens way more often than one would think.
            <Db />
            You have probably already guessed what the solution is - we put the lines within their own function that returns the date of birth! The program then looks like this:
            <CodeBlock>
                {`def get_year_of_birth():
    print('Write your year of birth: ')
    user_input = input()
    return int(user_input)
    
year_of_birth = get_year_of_birth()
while year_of_birth < 1900 or year_of_birth > 2021:
    print('Year of birth is invalid!')
    
    year_of_birth = get_year_of_birth()

age_this_year = 2021 - year_of_birth
print('You turn ' + str(age_this_year) + ' years old this year!')`}
            </CodeBlock>
            There! The repeated code is all gathered in one place. When we now read the code, it is also a little easier to gain an overview of how it works. It is more obvious what happens inside the loop now that there are fewer lines there to think about.
            <Db />
            Notice that we don't create a variable <Ic>year_of_birth</Ic> in the function - we only return the value and put the responsibility for putting it in a variable in the hands of the code calling the function.
            <Db />
            We could have shortened the code above by instead removing the three lines at the top of the program and creating an infinite loop that asks the user for input again and again, and eventually runs <Ic>break</Ic> when the input fulfills the requirements. The approach we have chosen serves better as a pedagogical example.

            <h2>Functions as Noise Cancellers</h2>

            There is nothing stopping us from calling a function from another function. In fact, we already did that in the above examples, since both <Ic>print()</Ic> and <Ic>input()</Ic> are functions.
            <Db />
            Let's have another look at the above example. That's a lot of effort for a program that is in essence only made to compute your age. This is because we have put a lot of work into making sure the user input is sensible. Actually, the whole program, except for the two last lines, are there to fetch the year of birth from the user. There's nothing wrong with how the program works, but it can be hard to work with when there is so much happening that is not directly related to the main purpose of the program.
            <Db />
            This is a problem that can also be addressed with functions. At a high level, we can imagine that our program is supposed to go through these three steps: Get reasonable input from the user, compute the user's age, and output the result to screen. In our code, the first step takes an unproportional amount of space. Let's put all the code that performs the first of our three steps, into a function:

            <CodeBlock>{`def get_year_of_birth():
    print('Write your year of birth: ')
    user_input = input()
    return int(user_input)

def get_validated_year_of_birth():
    year_of_birth = get_year_of_birth()
    while year_of_birth < 1900 or year_of_birth > 2021:
        print('Year of birth is invalid!')
        
        year_of_birth = get_year_of_birth()

    return year_of_birth
        
year_of_birth = get_validated_year_of_birth()
age_this_year = 2021 - year_of_birth
print('You turn ' + str(age_this_year) + ' years old this year!')`}
            </CodeBlock>

            Now the essence of the program is all squashed together in the last three lines. For someone reading the program for the first time, it is far easier to gain an overview of what's happening when the more complicated parts of the code is hidden within functions.
            <Db />
            <i>Abstracting</i> away parts of the program with functions, like we just did above, is considered good practice, exactly because it makes it easier to reason with the code. It makes it simpler to focus on the parts of the code you are interested in, whether your are reading new code, adding functionality, or correcting errors. Similar to many other practices that programmers are fond of, extensive use of functions is a bit hard to motivate properly to beginners, because they primarily make sense to use when we are working with lots of code. It is totally possible to write longer programs without using functions, but it is in no way a good idea. In addition to possibly resulting in lots of repeated code, it makes it much harder to gain an overview and find out what parts of the code does what without having intimate knowledge about the code. And even if you have written the program yourself, the intimate knowledge decreases rapidly with time, so that using functions may help both yourself in the future and anyone else who is having a peek at your code!

            <h2>Arguments</h2>
            <i>Arguments</i> are values we <i>send into</i> the function. The function definitions we have seen so far haven't had any arguments; their paratheses have been empty. Let's have a look at a function that <i>has</i> arguments:
            <CodeBlock>
                {`def say_hello(name):
    print('Hello, ' + name + '!')`}
            </CodeBlock>
            
            This is an upgraded version of the <Ic>say_hello()</Ic> function we showed at the start of the post. As we can see, it takes one argument: <Ic>name</Ic>. The arguments of a function can be used as if they were normal variables in the function. In this function, we use <Ic>name</Ic> in the <Ic>print()</Ic>-call to make the greeting more personal. We may call the function like this:
            <CodeBlock>{`say_hello('Larry')`}</CodeBlock>
            If we put this code in the same file as the function definition above, we get the output
            <CodeBlock>{`Hello, Larry!`}</CodeBlock>
            Here, we have written the string <Ic>{`'Larry'`}</Ic> within the parantheses in the function call, and it is set to the argument <Ic>name</Ic> in the function when the function body is run. We could just as well have put the string in a variable first, and written the variable within the paratheses instead.
            <Db />
            The names of the arguments can be chosen freely, but per usual, it is a good idea to give them meaningful names. It may also be a good idea to emphasize what datatype the argument has with their names, in cases where it isn't obvious. The name of the argument in this case was <Ic>name</Ic>, which makes it somewhat clear that it should be a string. The code above would have crashed it we instead called the function with e.g. an integer instead, since we cannot use the <Ic>+</Ic>-operator with a string and a number directly, as we have seen earlier.
            <Db />
            A function can have as many arguments as we'd like. Let's take a look at the exercise about Body Mass Index (BMI) from the post about user interaction. The formula for BMI is <i>weight / (height * height)</i>, where weight and height is given in kilos and meters respectively. Such mathematical formulas are good candidates for being separated as their own functions. We can make a function that computes BMI:
            <CodeBlock>
            {`def compute_bmi(weight_in_kilos, height_in_meters):
    return weight_in_kilos / (height_in_meters * height_in_meters)`}
            </CodeBlock>

            We can e.g. call this function like this:
            <CodeBlock>{`bmi = compute_bmi(70, 1.80)`}</CodeBlock>
            
            The order of the arguments you specify in the function call, must be the same order as the corresponding arguments are specified in the function definition. Therefore, in the above function call, <Ic>weight_in_kilos</Ic> is set to 70, while <Ic>height_in_meters</Ic> is set to 1.80. In this example, we also made sure to specify the unit of the function arguments in the function definition. This can be a good idea when arguments represent physical values, unless you have commited to a convention, where e.g. all weights are given in kilos.

            <h2>Default Arguments and Keyword Arguments</h2>

            In some cases, you may bump into functions that do not require all arguments to be set: We are going to talk about <i>default arguments</i> and <i>keyword arguments</i>.
            <Db />
            <i>Default arguments</i> refer to arguments that has a <i>default value</i> that is used if the caller of the function does not provide a value for the argument.
            <Db />
            Usually, we must always provide a function with as many arguments as it has in the function definition, but this is not the case for default arguments. Let's expand the <Ic>say_hello()</Ic> function from earlier with a new argument:
            <Db />
            <CodeBlock>
            {`def say_hello(name, with_enthusiasm):
    if with_enthusiasm:
        print('HELLO, ' + name + ', SO NICE TO SEE YOU, MY SUGARDOLL!!!')
    else:
        print('Hello, ' + name + '!')`}
            </CodeBlock>
            The new argument is <Ic>with_enthusiasm</Ic>, which is a boolean value (that is, it must contain either <Ic>True</Ic> or <Ic>False</Ic>). If <Ic>with_enthusiasm</Ic> is <Ic>True</Ic>, <Ic>say_hello</Ic> will write an enthusiastic greeting to the user. If the argument is <Ic>False</Ic>, the user only gets a moderately enthusiastic greeting. To call this function, we can write e.g.
            <CodeBlock>{`say_hello('Larry', False)`}</CodeBlock>
            Now, let's assume that the majority of users prefer the most enthusiastic greeting, that is, the majority of calls to <Ic>say_hello</Ic> will use <Ic>True</Ic> as a second argument. To make life easier to this majority, we can give <Ic>with_enthusiasm</Ic> a default value. We do so as follows:
            <CodeBlock>
                {`def say_hello(name, with_enthusiasm=True):
    if ...`}
            </CodeBlock>
            We have omitted the rest of the function because it is the same as before. The only difference is that we have added a <Ic>=True</Ic> after the argument <Ic>with_enthusiasm</Ic>. This tells Python that the argument is not mandatory, and if it is not provided, it will be set to <Ic>True</Ic>. Now we can call our function in both these ways:
            <CodeBlock>{`say_hello('Larry')
say_hello('Larry', False)`}</CodeBlock>
            Running these functions, we will get two greetings to Larry, the first a tad bit more enthusiastic than the second.
            <Db />
            We add another default argument to the function definition. Now the <Ic>say_hello</Ic> function looks like this:
            <CodeBlock>{`def say_hello(name, with_enthusiasm=True, with_hearts=True):
    if with_enthusiasm:
        print('HELLO, ' + name + ', SO NICE TO SEE YOU, MY SUGARDOLL!!!')
    else:
        print('Hello, ' + name + '!')
    
    if with_hearts:
        print('\\u2665\\u2665\\u2665')`}
        </CodeBlock>
            The new argument is called <Ic>with_hearts</Ic>, and we have set its default value to <Ic>True</Ic>, assuming that more is better. If this argument is <Ic>True</Ic>, three hearts are written to the screen on the line after the greeting. The hearts can be turned on and off independently of the enthusiasm argument. Here, we have used <i>unicode</i>-encoding when specifying the hearts. Unicode-encoding lets you put special characters into string by writing <Ic>{`\\uxxxx`}</Ic>, where the <Ic>x</Ic>-es is the code for the special character you want. To find the code for a character, you can e.g. search on <a href={"https://unicode-table.com"}>unicode-table.com</a>. <Ic>2665</Ic> is the code for heart.
            <Db />
            Now we can call our function with one, two or three input arguments:
            <CodeBlock>
                {`say_hello('Larry')
say_hello('Larry', False)
say_hello('Larry', False, False)`}
            </CodeBlock>
            Now, what if we are very certain we <i>don't</i> want hearts but don't really care how enthusiastic the rest of the greeting is, so that we only want to use the default value on the enthusiasm argument? How do we provide a value for a specific default argument without caring about the default arguments that precedes it? This is where <i>keyword arguments</i> enter the fray:
            <Db />
            When calling a function, you can specify values for only some standard arguments using <Ic>{`<name of argument>=<value>`}</Ic> in the function call. This is what we call <i>keyword</i> arguments. To satisfy the specific preferences given above, we can write the function call as follows:
            <CodeBlock>{`say_hello('Larry', with_hearts=False)`}</CodeBlock>
            Now we can be sure that we don't get any unnecessary hearts in the output, without having to make the decision on how enthusiastic we want our greeting to be. Nice!
            <Db />
            When you have one or more default arguments in the function definition, all standard arguments must be provided after the ordinary, mandatory arguments. The same holds for function calls - mandatory arguments must come before all keyword arguments.

            <h3>Typical Functions with Default Arguments</h3>

            Default arguments is a rather specific subject that may not feel as useful in an initial introduction to functions. The reason we have included it anyway, is that there are many functions in Python that are made this way, and this walkthrough will give you a better understanding of how they work.
            <Db />
            So far, we have only used the <Ic>input()</Ic> function without arguments. But <Ic>input()</Ic> can in fact take an argument: If given a string, it will print the string to the screen before the user gets to write anything. It makes it somewhat simpler to ask the user for input:
            <CodeBlock>{`name = input('Write your name: ')`}</CodeBlock>
            We will use this form of <Ic>input()</Ic> going forward.
            <Db />
            In the same way, we have also only seen cases where <Ic>print</Ic> takes one argument, but that's not the whole story. If you provide <Ic>print</Ic> with more arguments, it will write all the arguments to screen, separated with space. Another property of the <Ic>print</Ic> function, is that these arguments can be of any datatype. That means that we can write e.g. integers as their own arguments without having to convert them to a string first. Thus, these two lines do the same thing:
            <CodeBlock>
                {`print('You are ' + str(age) + ' years old')
print('You are', age, 'years old')`}
            </CodeBlock>
            This will make user interaction a tiny bit simpler.
            <Db />
            Another trick we can use with the <Ic>print</Ic> function is to specify an value for the default argument <Ic>end</Ic>. As we have experienced, <Ic>print()</Ic> will write text to the screen and then ends the line. With <Ic>end</Ic>, we can make <Ic>print</Ic> end the output with something else. The default value for the <Ic>end</Ic> argument is <Ic>'\n'</Ic>, which means newline. If we give it another value, the <Ic>print</Ic>-call will write this value after the rest of the message, and then let the next <Ic>print</Ic> call begin writing right after the last character, which will be on the same line, provided the last character was not a newline. This can be used e.g. when going through loops in order to make every iteration print to the same line:
            <CodeBlock>
                {`i = 0
while i < 10:
    print(i, end=' ')
    i += 1`}
            </CodeBlock>
            Here, we have set <Ic>end</Ic> to space (<Ic>' '</Ic>). With this, all numbers from 0 to 9 will be written on one line, separated by space, as opposed to each being written to its own line.

            <h2>Member Functions</h2>
            
            At last, we will introduce <i>member functions</i>. Member functionsar functions that "belong to" values of certain datatypes. Here we will only look at member functions for strings.
            <Db />
            A member function is called with the following syntax: <Ic>{`<value>.<function>(<arguments if relevant>)`}</Ic>. Strings have many member functions; one example is <Ic>isnumeric()</Ic> that tells us whether the string contains a number or not:
            <CodeBlock>{`string0 = 'n07_4_numb3r'
string1 = '7411'

is_string0_a_number = string0.isnumeric()
is_string1_a_number = string1.isnumeric()`}</CodeBlock>
            
            In this code, <Ic>is_string0_a_number</Ic> will be <Ic>False</Ic>, since the string <Ic>string0</Ic> contains characters that are not consistent with it being a string. <Ic>string1</Ic>, on the other hand, is a string that can represent a number, so that <Ic>is_string1_a_number</Ic> is <Ic>True</Ic>.
            <Db />
            The member function <Ic>upper()</Ic> is another example that returns the same string, but where all letters are capitalized. In an enthusiastic-greeting function like the one we defined above, this can help us make the output even more enthusiastic. If we only write 
            <CodeBlock>
                {`print('HELLO, ' + name + ', MY SUGARDOLL!')`}
            </CodeBlock>
            the output would look like this:
            <CodeBlock>
                {`HELLO, Larry, MY SUGARDOLL!`}
            </CodeBlock>
            If we instead use <Ic>upper()</Ic> as in
            <CodeBlock>{`print('HELLO, ' + name.upper() + ', MY SUGARDOLL!')`}</CodeBlock>
            we will get
            <CodeBlock>{`HELLO, LARRY, MY SUGARDOLL`}</CodeBlock>
            which does feel a bit more authentic.
            <Db />
            We will see more member functions in the next post.
            
            <h2>Summary</h2>
            Congratulations on getting through yet another long post! Functions are an important part of the toolbox for every programmer, but finding out where they make sense to use, and making effective use of them is a matter of practice. Functions is a concept that makes more and more sense to use the larger the code you are working with is. However, you will do yourself a great deed if you start trying to dividing the small programs you will write in the beginning, into functions.
            <Db />
            We have already learnt many of the fundamental concepts in Python, and we can start doing more and more interesting things. In the next post, we will have a look at lists, which will allow us to keep track of large amounts of data at once, and <Ic>for</Ic>-loops, which are a more intuitive way of writing loops.

            <h2>Exercises</h2>
            Many of these exercises are about creating new functions. It is recommended that you make code that call the functions on your own, so that you can see them in action.
            <Db />
            1. Create a function that takes the arguments first name and last name, as well as an argument called <Ic>formal</Ic>, which is either <Ic>True</Ic> or <Ic>False</Ic>. The function will write a greeting to the user. If <Ic>formal</Ic> is <Ic>True</Ic>, only the last name should be used in the greeting. Otherwise, only first name should be used.
            <Db />
            2. Create a function that takes a year as input and decides whether the year is a leap year; it should return <Ic>True</Ic> if the year is a leap year and <Ic>False</Ic> otherwise. A year is a leap year if it is divisible by 4, but only if it is not divisible by 100, but it <i>is</i> a leap year again if it is divisible by 400. Thus, e.g. 1900 is not a leap year, but 2000 is.
            <Db />
            3. Do exercise 3 in the post about BMI in <a href="/en/introduction_to_python/user_interaction_and_conditions">the post about user interaction</a>, where you use seperate functions for user input (one for taking in height and weight, respectively), computation of BMI and feedback to the user based on the computed BMI.
            <Db />
            4. Create a function <Ic>write_stars(n)</Ic> that writes a line with <Ic>n</Ic> stars at the screen, where <Ic>n</Ic> is an integer argument. As an example, the function call <Ic>write_stars(5)</Ic> should write <Ic>*****</Ic> on the screen. <i>(Hint: Use <Ic>end=''</Ic> as argument in the <Ic>print</Ic> function.)</i>
            <Db />
            5 (Difficult). The Fibonacci numbers is the series of numbers that start with <Ic>F(0) = 1</Ic> and <Ic>F(1) = 1</Ic> and continue with <Ic>F(n) = F(n - 1) + F(n - 2)</Ic> for all integers <Ic>n</Ic> larger than 1. Create a function that computes the <Ic>n</Ic>th Fibonacci number. <i>(Hint: This is shortest to write as a <b>recursive</b> function, a function that calls itself in the function body. Make sure that the function does not call itself again and again forever).</i>
        </PostWrapper>
    </>
);

export default FunctionsEn;