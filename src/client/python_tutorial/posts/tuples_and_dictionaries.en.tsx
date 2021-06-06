import * as React from 'react';

import { TutorialPostProps } from '../tutorial_wrapper.tsx';
import { PostWrapper, NoticeBlock } from '../../common/post_utils.tsx';

import { Db } from '../../common/utils.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';

const TuplesAndDictionariesEn = (props: TutorialPostProps) => (
    <>
        <PostWrapper metadata={props.metadata} >
            Welcome back! This will be a slightly shorter post where we focus on two new concepts that ofter come in handy when we're out on coding adventures: Tuples and dictionaries.

            <h2>Tuples</h2>

            Let's say we want to represent all the countries of the world associated with their respective capitals in our program. We want to use this to find the capital of a country that the user writes in the input to the program. One way of representing the relation between countries and capitals, is by using two lists: One for the countries and one for the capitals. Using this, our program may look something like:

            <CodeBlock>{`countries = ['Norway', 'Sweden', 'England']
capitals = ['Oslo', 'Stockholm', 'London']

country = input('Write the name of a country: ')

capital = ''

for i in range(len(countries)):
    if country == countries[i]:
        capital = capitals[i]
        break
        
if len(capital) == 0:
    print('Did not find the capital of', country, ':(')
else:
    print('The capital of', country, 'is', capital)`}</CodeBlock>
        
        There are a few things going on here.
        <Db />
        The program starts by defining two lists, one that contains countries and one that contain the corresponding capitals. We have made the simplifying assumption that the world only consists of three countries. We receive the name of a country from the user, and then define the variable <Ic>capital</Ic>, which we set to <Ic>''</Ic>, that is, an empty string. Afterwards, we iterate through the indices of <Ic>countries</Ic> and compare each country in the list with the country we got from the user. If we find a country in <Ic>countries</Ic> that is the same as the one the user entered, we set the variable <Ic>capital</Ic> to be the string at the corresponding index in <Ic>capitals</Ic> and end the loop with <Ic>break</Ic>.
        <Db />
        In the end, we check whether the length of <Ic>capital</Ic> is zero using the <Ic>len()</Ic>-function. If the length is zero, we know that <Ic>capital</Ic> has not changed since we initialized it in an empty string, which means we were unable to find a matching country in the <Ic>countries</Ic> list in the loop. Therefore, we must admit defeat and tell the user we did not find a capital. Otherwise, if <Ic>capital</Ic> is not empty, it means we have found a matching country, and therefore, a capital, which we can the print to the screen for the user to see.
        <Db />
        The code above works fine, but there is potential for improvement.
        <Db />
        The first we can look at, is our two lists. They are very tightly coupled. In fact, they are so tightly coupled that changing one of them will ruin the <i>implicit</i> relation they have to each other. If e.g. we reorder, remove or add new countries to the <Ic>countries</Ic> list, it will introduce potential errors the code, since corresponding elements in the <Ic>capitals</Ic>-list may no longer be the right capital.
        <Db />
        Now you may think "well, that's obvious, isn't it? I'd never do something as stupid as changing one of the lists without doing corresponding changes to the other?". Fair enough. This is a relatively simple example where it's easy to realize that something bad will happen if we only change one list. However, in larger examples, dependencies like this can be much harder to keep track of. Ideally, we would like to remove this invisible, implicit relation between the two lists, and rather make it visible, or <i>explicit</i>.
        <Db />
        This is a case where we can make use of <i>tuples</i>. Tuples are very similar to lists; they contain a series of values. However, they are written with normal parentheses <Ic>()</Ic> instead of square brackets <Ic>[]</Ic>. Examples of tuples are <Ic>(1, 3)</Ic> and <Ic>(3, True, 1)</Ic>. Another difference is that tuples cannot be changed, you can neither add, change or remove elements from a tuple. Tuples can have as many elements as we want, but all elements must be included at the time the tuple is defined, since they cannot be changed later on.
        <Db />
        Tuples are good for holding a small number of values that are related to each other, but that may have different meanings. To e.g. represent a person, we can use a tuple with three elements that contains a string for the name, an integer for their age, and a floating point number for their height. This stands in contrasts to lists that work best with holding many values that are not necessarily related to each other, but that have similar meanings, like a list of attendants to an event or a list of the first ten prime numbers.
        <Db />
        Whenever we have a tuple, we may "split" it with the <Ic>=</Ic>-operator like this:
        <CodeBlock>{`a_tuple = (1, 2, 3)
a, b, c = a_tuple`}</CodeBlock>

        Here, the variables <Ic>a</Ic>, <Ic>b</Ic> and <Ic>c</Ic> will contain the values 1, 2, and 3 respectively. We can also use indices in the same way we do with lists: <Ic>a = a_tuple[0]</Ic>.
        <Db />
        We can rewrite the first version of our above program using tuples. We will use tuples with only two elements, which we will just call <i>pairs</i>.
        <CodeBlock>{`countries_and_capitals = [('Norway', 'Oslo'), ('Sweden', 'Stockholm'), ('England', 'London')]

country = input('Write the name of a country: ')

capital = ''

for i in range(len(countries_and_capitals)):
    if country == countries_and_capitals[i][0]:
        capital = countries_and_capitals[i][1]
        break

if len(capital) == 0:
    print('Did not find the capital of', country, ':(')
else:
    print('The capital of', country, 'is', capital)`}</CodeBlock>

        Here, we have replaced the two lists with one lists consisting of pairs. This makes the relation between the elements in each pair much more evident than if they were put in separate lists.
        <Db />
        Notice that we use the notation <Ic>countries_and_capitals[i][0]</Ic> to get the country at index <Ic>i</Ic> in the list. The first index, <Ic>[i]</Ic> is used for choosing the pair at index <Ic>i</Ic>, while <Ic>[0]</Ic> retrieves the first element, that is, the country, from the pair. This is a shorthand of writing e.g.
        <CodeBlock>{`pair = countries_and_capitals[i]
chosen_country = pair[0]`}</CodeBlock>
        Tuples are also handy in cases where we want to return more than one value from a function call. Here is a function that takes both name and shoe size from the user, and returns both:
        <CodeBlock>{`def get_personalia():
    name = input('Write your name: ')
    shoe_size = float(input('Write your shoe size: '))
    return (name, shoe_size)`}</CodeBlock>
        
        We may put the return value from the function call into one variable as a tuple, or in separate variables like this:
        <CodeBlock>{`name, shoe_size = get_personalia()`}</CodeBlock>

        <h2>Dictionaries</h2>

        <i>Dictionaries</i> are objects that contain zero or more values, but that, as opposed to lists, allow us to use other data types than integers as indices. We call the indices of a dictionaries <i>keys</i>. A dictionary can be defined using the syntax <Ic>{`{ <key0>: <value0>, <key1>: <value1> ...}`}</Ic>. In other words, a comma-separated list of key-value pairs, where key and value are separated by colon, and everything contained within curly brackets. We may e.g. create a dictionary with types of soda and their colors like this:
        <CodeBlock>
            {`soda_colors = { 'Solo': 'yellow', 'Cola': 'brown', 'Sprite': 'uhm...' }`}
        </CodeBlock>

        In dictionaries, the datatypes for both the keys and the values are free for us to choose, but the most common case is where all keys have the same datatype and all the values have the same datatype. When we want to retrieve or insert elements in a dictionary we use the keys with the same square bracket notation as we used with lists. Here's an example:
        <CodeBlock>{`dictionary = {}
        
dictionary['a'] = 0
dictionary['b'] = 1
dictionary['c'] = 2

print(dictionary['b'])
print(dictionary)`}</CodeBlock>
        First, we define the variable <Ic>dictionary</Ic> which we set to <Ic>{}</Ic>, which is just an empty dictionary. Then we use the notation <Ic>{`dictionary[<key>] = <value`}</Ic> to insert values at different keys in the dictionary. Notice that the keys don't already need to exist in the dictionary before we insert the values at the key. This is different from indexing in lists, where we cannot assign a value to an index if that index is not already valid in the list. In this example, we put the value <Ic>0</Ic> at the key <Ic>'a'</Ic>, <Ic>1</Ic> at <Ic>'b'</Ic>, and <Ic>2</Ic> and the key <Ic>'c'</Ic>. The output from the program is as follows:
        <CodeBlock>{`1
{'a': 0, 'b': 1, 'c': 2}`}</CodeBlock>
        As expected, we get that the value at key <Ic>'b'</Ic> is 1, and the last <Ic>print()</Ic> statement shows that all the three key-value pairs are present in the dictionary.
        <Db />
        Be aware that you can only have one value associated with an index. If you after the above code had written <Ic>dictionary['a'] = 4</Ic>, you would have ended up with the dictionary <Ic>{`{'a': 4, 'b': 1, 'c': 2}`}</Ic>. On the other hand, there is no problem having the same value multiple times in the dictionary, as long as the keys are different.
        <Db />
        Also, note that the order of the index/value pairs can be different when writing them to the screen, than the order you inserted them. Python does not care for preserving the order of the keys in the dictionary, so you should not rely on them being in a specific order.
        <Db />
        Going back to our original example with countries and capitals, we may make the code even better by using a dictionary:
        
        <CodeBlock>{`countries_and_capitals = { 'Norway': 'Oslo', 'Sweden': 'Stockholm', 'England': 'London' }

country = input('Write the name of a country: ')

if country in countries_and_capitals:
    print('The capital of', country, 'is', countries_and_capitals[country])
else:
    print('Did not find the capital of', country, ':(')`}</CodeBlock>
        Here, we have first constructed the dictionary <Ic>countries_and_capitals</Ic>, where we have associated each country with its capital. This makes it so that e.g. the key lookup <Ic>countries_and_capitals['Norway']</Ic> gives <Ic>'Oslo'</Ic> as result. Then we receive the user input as normal.
        <Db />
        Now, however, comes a larger change from our earlier drafts: We don't iterate through the dictionary to find the country, but use a condition of the form <Ic>{`<key> in <dictionary>`}</Ic>, which evalueates to <Ic>True</Ic> if the key is present in the dictionary. Therefore, the condition <Ic>country in countries_and_capitals</Ic> will evaluate to true if the country the user wrote is a key in the dictionary (in other words, either <Ic>'Norway'</Ic>, <Ic>'Sweden'</Ic>, or <Ic>'England'</Ic>), and false if it is not to be found. Be aware that the <Ic>in</Ic>-operator only checks if the left-hand side value is a <i>key</i> in the dictionary, not whether it exists in the dictionary as a <i>value</i>.
        <Db />
        If the condition is true, we know that we have a capital we can give back to the user, in particular, it is the string we get by the key lookup <Ic>countries_and_capitals[country]</Ic>. If the country does not exist in the dictionary, and therefore, the condition is false, we admit to the user that we were unable to find a good answer.
        <Db />
        If we compare the first and last draft of this example, we see that the dictionary has helped us tremendously in making the code simpler. Dictionaries are nice to use whenever we have a one-to-one-correspondance between two sets of values, and want to use elements from one of the sets, say countries, to search for and retrieve corresponding elements in the other set, like capitals.

        <h2>Iterating through a Dictionary</h2>

        Sometimes we may want to iterate through dictionaries, like when we want to list out its content. In Python, <Ic>for</Ic>-loops can be used for this purpose.
        <Db />
        A standard <Ic>for</Ic>-loop based on a dictionary looks like this:
        <CodeBlock>{`for <key variable> in <dictionary>:
    <loop block>`}</CodeBlock>
        When we iterate through a dictionary like this, the iteration variable will take on the keys of the dictionary. Then we can use the key to write every element to the screen, like
        <CodeBlock>{`for country in countries_and_capitals:
    print('The capital of', country, 'is', countries_and_capitals[country])`}</CodeBlock>
        Where <Ic>countries_and_capitals</Ic> is as in the above example.
        <Db />
        There are alternative ways of iterating through a dictionary. Dictionaries have the member function <Ic>values()</Ic>, which gives us an iterator with all the <i>values</i> in the dictionary, instead of the keys. Thus, we can list all the capitals in our dictionary like this:
        <CodeBlock>{`for capital in countries_and_capitals.values():
    print(capital, 'is a capital')`}</CodeBlock>
        
        The <Ic>values()</Ic>-function can be useful when we are only interested in the values in the dictionaries, and not what keys they belong to.
        <Db />
        A final way of iterating through dictionaries, is by using the member function <Ic>items()</Ic>. <Ic>items()</Ic> returns an iterator of pairs, where each pair contains a key and corresponding value from the dictionary. Thus, we can list out all countries with their respective capitals slightly simpler like this:
        <CodeBlock>{`for country,capital in countries_and_capitals.items():
    print(capital, 'is the capital of', country)`}</CodeBlock>
        
        The iteration variable in this loop is a pair, but we can split the pair into two components like we have done here, making the code simpler and more clear.

        <h2>Summary</h2>

        That's all for now! Tuples and dictionaries are not super advanced concepts, but may make the code far easier to read and write if used in the right settings.
        <Db />
        In the next post, we will explore reading and writing files, which will make us able to do more interesting operations with larger amounts of data.

        <h2>Exercises</h2>
        1. Create a <i>function</i> that takes a list as an argument and returns a dictionary with all the same elements that the list contains, but where key/value are reversed. In other words, the elements of the list will be keys in the dictionary, and the corresponding values in the dictionaries will be the index the element has in the list. As an example, if the function takes in the list <Ic>['a', 'b', 'c']</Ic>, it should return the dictionary <Ic>{`{'a': 0, 'b': 1, 'c': 2`}</Ic>.
        <Db />
        2. Create a function that takes in a string and returns a dictionary with the characters of the string as keys, and the number of occurrences of that character as the corresponding value. In other words: If the function takes in e.g. the string <Ic>'hello'</Ic>, it should return the dictionary <Ic>{`{'e': 1, 'h':1, 'l': 2, 'o': 1}`}</Ic> (the order of the elements here is arbitrary).
        <Db />
        3. Create a program that lets the user practice the capitals of the world: The program shows the name of countries one by one, and reads the user's input, which is their answer to what the capital of the country is. In the end, the program shows how many correct answers the user had. You can limit the program to the countries we have used in this post in case you find coming up with more too much effort.
        <Db />
        4 (Difficult). Create a list with all tuples of integers <Ic>a</Ic>, <Ic>b</Ic> and <Ic>c</Ic> such that <Ic>a * a + b * b == c * c</Ic>, where <Ic>a</Ic>, <Ic>b</Ic> and <Ic>c</Ic> are less than 100. Tuples satisfying this equation are called Pythagorean triples. (Note - this is primarily an exercise about loops.)
        </PostWrapper>
    </>
);

export default TuplesAndDictionariesEn;