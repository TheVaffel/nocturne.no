import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const FunctionsEn = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            In this post, we will explore <i>functions</i>, which allow us to divide our code into smaller, reusable parts. We have already used function several times, for instance, both <Ic>print()</Ic> and <Ic>int()</Ic> are functions. Here, we will see how we can create our own functions and discuss in what cases they make sense to make. We will also take a closer look at some of the functions we have used already.
            <Db />
            In essence, a function is a block of code which is given its own name. In the same way that we can use the name of a variable to refer to the value of it, we can use the name of a function to run the code that the function contains. We create a function in the following way:
            <CodeBlock>{`def <name>(<argument0>, <argument1>, <...>):
    <function block>`}</CodeBlock>

            We call this a <i>function definition</i>. It starts with the word <Ic>def</Ic> followed by the name we want to give our function. Then follows a comma-seperated list of <i>arguments</i> surrounded by parantheses. We will talk about arguments later on - to begin with, we will only look at functions with zero arguments, having empty paratheses. At the end of the first line of the function definition, we write a colon, similarily to how we create if-statements and loops.
            <Db />
            On the next line, the <i>function block</i> begins. This is where we write the function's code. It is written with indentation, just lik if-blocks and loop blocks, and lasts until the first line without indentation.
            <Db />
            In the same way that we name variables, we can freely choose the names of our functions. The same rules of thumb apply - the name should be descriptive; it should say something about what the function does. 
            <Db />
            Note that the code in the function block is <i>not</i> run when Python reads the function definition. The function definition just makes the code in the function block available, so that it can be run at a later time.
            <Db />
            We start by looking at a very simple function:
            <CodeBlock>
                {`def say_hello():
    print('hello')

say_hello()`}
            </CodeBlock>
            Here, we have first defined the function <Ic>say_hello</Ic>. As we can see, the parantheses after the function name are empty, indicating that there are no arguments, but they must be included nevertheless. The function block contains one line, which writes "hello" to the screen.
            <Db />
            At the bottom of the above program, we have written <Ic>say_hello()</Ic>, that is, the name of our function, with empty paratheses. Note that it is not a part of the function block, since it is not indented. When Python reads this line, it will <i>run</i> the code in the function block. We say that we <i>call</i> the function, and <i>say_hello()</i> is what we call a <i>function call</i>.
            <Db />
            When we call a function, Python jumps from the place of the function call to the code in the function, and then then jumps back to where the function call happened when it has finished running the code in the function block.
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
print('Hello, ' + name`}</CodeBlock>
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
        </PostWrapper>
    </>
);

export default FunctionsEn;