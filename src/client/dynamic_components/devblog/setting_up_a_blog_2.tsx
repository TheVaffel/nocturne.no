import * as React from 'react';

import { DevBlogPostProps } from './devblog_wrapper.tsx';
import { Ic, CodeBlock } from '../../common/code_format.tsx';
import { Db } from '../../common/utils.tsx';

const SettingUpABlog1: React.FunctionComponent<DevBlogPostProps> = (props) =>
    (<div>
        <h1>How to Start Blogging Part 2</h1>
        After a bit of tinkering about, I've finally gotten around to write the second installment
        about how this blog came to be.
        <Db/>
        This time around, I'll keep things briefer than the first post, simply because there is a lot of things
        I want to go over. This means the code samples will be less extensive than in the previous one, and I will
        only concentrate on the most peculiar pieces. For more extensive code, you can check out 
        the <a href="https://github.com/TheVaffel/nocturne.no">website's source code at Github</a>. The latest 
        commit at the time of writing, and thus probably the most relevant to what's written here, 
        is <a href="https://github.com/TheVaffel/nocturne.no/tree/d53fddec77a1ea823dea51c741ea3f3de7cd8dc2">d53fddec77a1ea823dea51c741ea3f3de7cd8dc2</a>.
        <Db/>

        <h2>What we'll cover</h2>

        The fancy aspects we'll want to discuss are

        <ul>
            <li>Routing</li>
            <li>Lazy loading</li>
            <li>Generate post metadata</li>
        </ul>
    
        As mentioned, these are merely the most interesting aspects of the blog at this point. I
        won't go into details of e.g. the Express server setup and the React element hierarchy, as 
        there are few surprises to be found there.

        <h2>Routing</h2>

        Not the most fancy of the features I'll list here, but it will tie into the upcoming section
        and provide some useful background.
        <Db/>
        Routing, at least in the case of this blog, amounts to showing the user what they are supposed to see.
        In particular, we must handle user clicks and juggle the website content as the user navigates around.
        Conviniently enough, React has something called <Ic>react-router</Ic> that does some of this for us.
        However using <Ic>react-router</Ic> will give us <i>front-end routing</i> as opposed to <i>back-end routing</i>.
        The difference is where the action happens. 
        <Db/>
        <b>Back-end routing</b> is what you would usually expect from your off-the-shelf website. When you click a
        link, a request is sent to the server for a new web page. The web page is returned (if you're lucky)
        and replaces the web page where the click happened.
        <Db/>
        <b>Front-end routing</b>, on the other hand, does not replace the web page at hand.
        Instead, a script strips away and/or adds content to the web page to change what is showed to the
        user. Usually, this means all content that will possibly be shown to the user, must be loaded from the
        server beforehand.
        <Db/>
        A brief example of the use of React Router is given below.

        <CodeBlock>
        {`<Switch>
    <Link to="/route0">Link to Route 0</Link>
    <Link to="/route1">Link to Route 1</Link>

    <Route exact path="/route0">
        <Component0 />
    </Route>
    <Route exact path="/route1">
        <Component1 />
    </Route>
</Switch>`}</CodeBlock>
        
        The <Ic>{"<Switch>"}</Ic> elements wrap the entire route structure. ReactRouter requires both the
        links and the changing components to reside between a beginning and a closing Switch element (at least to my
        knowledge, this was how I eventually made it work). 
        <Db/>
        The <Ic>{"<Link>"}</Ic> and <Ic>{"<Route>"}</Ic> tags are much what they sound like:
        Link tags create links (much like our beloved {"<a>"} tag in HTML), and Route tags are the
        ones that contain changing component. In the example above, clicking "Link to Route 0" will
        add <Ic>/route0</Ic> to the end of the URL (so you will see it change in the address bar), and make
        the Route's with matching "path" attribute show, while hiding all others. In this case, it
        will show Component0 and not Component1. Otherwise, clicking the second Link will result in only
        Component1 being shown. 
        <Db/>
        The <Ic>exact</Ic> part inside the Route tags tells the Route's to only (surprise, surprise) 
        match if the URL path matches the given path exactly, and not just the prefix.
        <Db/>
        That was briefly how front-end routing works with <Ic>react-router</Ic>. Next up, we'll show 
        how we use laziness to utterly defeat the purpose of front-end routing.
        <Db/>
        <h2>Laziness</h2>
    </div>);

export default SettingUpABlog1;