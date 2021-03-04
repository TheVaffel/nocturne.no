import * as React from 'react';

import { DevBlogPostProps } from '../devblog_wrapper.tsx';
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
            <li>Blog post metadata</li>
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
        
        <h2>Laziness</h2>

        I'm especially lazy, and it shows.

        <h2>Laziness, but for Real</h2>

        Laziness, in the programming world, is to not do more work than you need to. As opposed to the real
        world, it's something you as a programmer must generally put an extra effort into to make work.
        <Db/>
        In the context of web development, laziness is to not give the user something he hasn't asked for.
        Following the description of back-end and front-end routing above, it is apparent that the back-end 
        approach is the laziest, as the content the user wants is only loaded in when they navigate around.
        <Db/>
        But I'm using front-end routing, ain't I? Well.. Yes. I'm not going to go in depth on why I chose
        the combination of front-end and laziness, in fear that I may end up realizing it doesn't make sense. 
        <Db/>
        What we want to do here, is to load most of the website infrastructure (the index page etc.) at the beginning,
        but wait with loading the posts until the user wants them. In the distant future, it is 
        estimated that the amount of blog post content may far supercede the amount of infrastructure,
        which tells us that this separation makes sense, at least somewhat.

        <h3>The Backend Shenanigans</h3>

        Laziness with Webpack turns out to be rather straight-forward. Remember; Webpack is in charge of 
        translating our different .tsx files into a .js-bundle that the browser can understand. However,
        boiling all our .tsx-files into the same .js-bundle will give us a very un-lazy solution, where 
        all the juicy web content is loaded at once.
        <Db/>
        What we want is separate .js-bundles, one for each blog post, as well as one for the website 
        infrastructure. In the shady streets of Webpackburg, this is known as <i>code splitting</i>.
        <Db/>
        To tell webpack to split the code, all we need to write is

        <CodeBlock>{`filename: '[name].bundle.js',`}
        </CodeBlock>
        in place of our previous <Ic>filename</Ic>, which was <Ic>'main.bundle.js'</Ic>.
        <Db/>
        I can hear you ask yourself what on earth is going on here. Well, we have simply told Webpack
        to not name all bundles the same, but give each of them corresponding names. Oh, and another thing,
        in tsconfig.json, you'll need to amp up the module ES version:
        <CodeBlock>{`module: esnext`}
        </CodeBlock>
        I'm not even gonna admit how much time I spent before realizing that.
        <Db/>
        The cautious reader may have discovered that we still haven't told webpack <i>how</i> to
        split up the code. How does it now what parts to put together and not?
        <Db/>
        The answer is <i>dynamic import statements</i>. Namely, in newer versions of Javascript, you
        can import new code on the fly, and it even interracts well with React. It will look
        something like this:
        <CodeBlock>{`const DynamicComponent = React.lazy(() => import('dynamic_component.tsx));
<React.Suspense fallback={<div>Loading...</div>}>
    <DynamicComponent param="hey" />
</React.Suspense>
`}</CodeBlock>
        where the file dynamic_component.tsx contains something like the following:
        <CodeBlock>
{`import * as React from 'react';

const DynamicComponent: React.FunctionComponent<{param: string}> = (props) => (
    <div>
        <h2>Hi, the parameter is {props.param}</h2>
    </div>
);

export default DynamicComponent;
`}</CodeBlock>
        
        This might look straightforward for those familiar with React and Typescript. I will highlight
        some key points: The import statement here is what I referred to as a dynamic import statement. 
        Dynamic because the content of the file you request can originate from a string that is constructed
        on runtime, i.e. Javascript does not have to know beforehand what will be requested.
        <Db/>
        The <Ic>React.lazy</Ic> function turns the newly imported content to a component. It requires the
        component to be the default export of the imported file.
        <Db/>
        The <Ic>Suspense</Ic> block makes sure the user has something to watch while they wait for the
        lazy content to arrive. Remember that the component will in general be requested over the network when 
        the user asks for it. In this case, we will show the user a nice and helpful "Loading..." label
        while they wait impatiently.

        <h3>Now, Kiss</h3>
        As a reader you may still feel a bit left in the dark whet it comes to exactly how this couples with
        the routing we set up earlier. It goes a bit like this:
        <Db/>
        First, we put all of the above into a nice handy-dandy function, <Ic>getLazy</Ic>:
        <CodeBlock>
{`const DynamicWrapper = function<T>(Component: React.FunctionComponent<T>): React.FunctionComponent<T> {
    return (props) => (<div>
           <Suspense fallback={<div>Loading...</div>}>
           <Component {...props} />
           </Suspense>
           </div>);
}

export const getLazy = function<T>(str: string) : React.FunctionComponent<T> {
    const Component = React.lazy(() => import('./' + str));

    return DynamicWrapper<T>(Component);
}
`}</CodeBlock>
        now, calling the function will give us a nice component that will give us some eye-candy (although boring
        eye-candy) while we wait for our beloved content to arrive.

        <h3>Wrappng up Laziness</h3>

        Now, when we call this function, things will already be set in motion. The client shoots a message
        to the server, which in turn gets riled up and tries to produce the content we asked for. So if we 
        really want to be lazy, we can't just go on and call this function anywhere. How do we
        make sure it is only called when the user navigates to the right place?
        <Db/>
        We repeat the entire programming model of React - wrap it in another component. Such a wrapper component 
        may look like this:
        <CodeBlock>
{`interface DynamicWrapperState<T> {
    component: React.FunctionComponent<T>;
}

export class DynamicComponentWrapper<T> 
    extends React.Component<T & { _dcw_fileName: string }, DynamicWrapperState<T>> {
      constructor(props: T & { _dcw_fileName: string }) {
            super(props);
            this.state = {
                  component: undefined
            };
      }

      componentDidMount() {
            const lazyComp: React.FunctionComponent<T> = 
                  getLazy<T>(this.props._dcw_fileName);
            this.setState({ component: lazyComp})
      }

      render() {
            return this.state.component == undefined ? <></> : <this.state.component {...this.props} />;
      }
}`}</CodeBlock>
        If you know React with Typescript, there isn't much magic happening here. Most notably,
        we have the the component stored as part of the component state, since it will be changed by
        internal function calls. The lazy function is only called when this component
        is mounted, e.g. when it is first initialized. 
        <Db/>
        Extra care is taken in the render function for the very rare case of <Ic>render()</Ic> 
        getting called before the <Ic>setState()</Ic> call finishes (which might happen, from what I learned
        tinkering around with this).
        <Db/>
        We have here used the name <Ic>_dcw_fileName</Ic> for the name of the file we want to
        lazy-load. It is given such a convoluted name in order to avoid collision with other prop members
        we want to relay further to the lazily loaded component.

        <h3>Wrapping up Laziness</h3>

        Given this wrapper component that wraps the other wrapper component, we can finally smash it into
        a router: 

        <CodeBlock>
{`<Route exact path="/dynamic_path">
    <DynamicComponentWrapper param="Hey" _dcw_fileName="dynamic_component.tsx" />
</Route>
        `}</CodeBlock>

        and there we have it. The dynamic component will now be loaded when the user navigates to 
        <Ic>/dynamic_path</Ic>, not a second before. 
        <Db/> 
        When Webpack is run, it will pack all the files that the <i>main</i> file depend on, into
        the main bundle. It will also do so similarily for all other script files. What it will <b>not</b> do,
        is pack the things referenced by dynamic import statements only, into the main bundle.
        Thus, when a file is requested, if it is not part of the "static" dependencies of the main file,
        there will be sent a request for it to the server.

        <h2>Blog Post Metadata</h2>

        Lastly, I'll tell you the secrets of how blog post metadata is stored. 
        Now, I'm not gonna pretend I'm definitely the only one doing it this way, but I think it differs
        from the more mainstream method which is involves a database.
        <Db/>
        First of all, what metadata am I talking about? The purpose of my metadata is to contain information
        the web page can use to
        <ul>
            <li>show the user to help them decide what to read (or not to read)</li>
            <li>sort blog posts by newest to oldest</li>
            <li>show when the post was last updated</li>
            <li>know in what (.tsx) file the blog post can be found</li>
        </ul>
        With these requirements, I eventually ended up with metadata containing title, description (both
        human-readable), create- and update date, file name and also a hash of the .tsx file. The reason
        for including a hash in this list becomes painfully clear later.
        <Db/>
        First, how do we store the metadata? I went simple on this one. I thought a database would be a bit 
        more bother than strictly necessary, so all the information above is put into plain .json files.
        For example, here is the .json file with the metadata for the first blog post in this series:
        <CodeBlock>
{`{
	"title": "How to Start Blogging, Part 1",
	"description": "How I started blogging, and how you (if you really want to) can too!",
	"createDate": 1614111623804,
	"updateDate": 1614524522240,
	"hash": "ba9f24bac7b46888e945dc0a3df512af",
	"fileName": "setting_up_a_blog.tsx"
}        
`}</CodeBlock>
        
        <h3>Creating and reading the metadata</h3>
        The way the metadata is read is pretty straight-forward: On server startup, before starting listening
        to incoming requests, the server goes through all blog posts. For each blog post, it tries to find the 
        corresponding metadata file. Their file names will be the same, although the metadata has another suffix
        and is placed in another directory. If no metadata file can be found, a new empty one is created.
        <Db/>
        Now, we don't want to push empty metadata files to the user. When having ensured the metadata file exists,
        the server considers the title. If the title is not filled out, the blog post is completely ignored.
        The idea here is that the author (me, for the most part), fills in the title and description by hand
        after the file has been created on the first server startup. This means the server must be restarted
        once more after the author thas authored what he want to author, but this is supposed to happen in the
        development stage, and the metadata file will be caught at once when deployed in production since it's
        stored in Git.
        <Db/>
        When the title is defined, however, the corresponding post is good to go. The server further looks at the
        hash in the metadata file. If this, again, doesn't exist (is empty), it computes the MD5-hash of the post 
        file and stores it. At this point, the file is officially initialized, and we set 
        the <Ic>createdDate</Ic> and <Ic>updatedDate</Ic> to the current time and set the fileName.
        <Db/>
        Lastly, if the hash <i>is</i> define, we know the blog post is already "active". The last thing we
        do, is to compute the hash of the blog post file again. If it <i>differs</i> from the hash stored
        in the metadata file, the file has been updated. In that case, we update the hash and the updatedDate.
        Eventually, all metadata corresponding to "active" blog posts are stored in an array that is available 
        to the server as it turns to the public to accept requests.
        <Db/>
        You may have noticed I didn't put much sample code in the above sections. And that's right. I didn't.
        I just want to emphasize that the juicy part of this is the algorithm, the implementation
        can be done by any farmer with a computer science degree.
        <Db/>
        If you <i>really</i> want to see what it looks like in practice, refer to the Github link to the 
        right commit at the top of this post. That will let you enjoy how I coped with promises in 
        nested async calls and the included anxiety.

        <h3>Why Did We Do This Again?</h3>

        Good question. First, let's set up an endpoint at the Express server for the client to get relevant metadata:
        <CodeBlock>
{`app.get('/devblog/list', (req : Request, res: Response) => {
    res.send(metadataList);
});
`}</CodeBlock>
        Now, when the user navigates to the index to the dev blog, the magic happens. The client sends
        the request to <Ic>/devblog/list</Ic> and uses the resulting list to show the user a selection of 
        blog posts they may or may not enjoy. In code, this is
        <CodeBlock>
{`constructor(props : {}) {
    super(props);
    axios.get(devblogPath + '/list').then((res) => {
        this.setState({ metadataList: res.data });
        console.log("Fetched metadatalist with length " + res.data.length);
    });
}
`}</CodeBlock>
        inside the top-level devblog-route component. Here, <Ic>axios</Ic> is a random http-request
        library I stumbled upon. Works great, but don't let it stop you in your quest if you have 
        your own favorite already. This allows us to put the following in the render function:
        <CodeBlock>
{`{this.state.metadataList.map((met: Metadata) =>
    {
        const urlPart = getURLPart(met);
        return (<Route key = {met.hash} exact path={devblogPath + '/' + urlPart}>
            <DynamicComponentWrapper param={""} _dcw_fileName={devblogPath.substring(1) + '/' + met.fileName} />
        </Route>);
    }
)}`}
        </CodeBlock>
        Here, we run a fancy <Ic>.map</Ic>-function over the meadata list and create a new <Ic>Route</Ic> component
        for each element in the list. The metadata contains information of where the blog post can be found,
        and we use it to create a dynamic component from the file. Another notable aspect of the code above, is that
        we include a <Ic>key</Ic> in the <Ic>Route</Ic> component. This is necessary whenever React component
        is constructed from an array like it is above. The key must be unique, and I've decided to be fancy and use
        our hash value for this.
        <Db/>
        Finally - we want to give the user a human-readable (where we assume the user is human) list of posts
        to read. We will again use a map. In the render function of the index component of the dev blog, we have this:
        <CodeBlock>
{`{
    props.metadata.map((met: Metadata) =>
        (<PostListEntry key={met.hash} metadata={met}/>))
}`}</CodeBlock>
        Here, we have received the metadata list as a gift from above, i.e. it was put in the props by
        the top-level dev blog component. The <Ic>PostListEntry</Ic> component gives an entry like this:
        <CodeBlock>
{`const PostListEntry: React.FunctionComponent<{metadata: Metadata}> = (props) => (
    <div>
        <Link to={devblogPath + '/' + getURLPart(props.metadata)}><h3>{props.metadata.title}</h3></Link>
        {props.metadata.description}
        <br/>
    </div>
);
`}
        </CodeBlock>
        <Db/>
        And that's it!
        <h2>Doing sums</h2>
        To sum up - I've given some pointers on how this blog is put together at the time of writing.
        There is little reason to believe it will stay exactly like this for very long, but traces
        of the ideas here are likely to remain for a good while.
        <Db/>
        I hope it was at least somewhat useful. I haven't put up a comment section yet, but I'm sure
        I'm gonna get a healthy amount of Rick Rolls, or whatever the kids like nowaday, down there when I've
        made it. Or constructive feedback, whichever I deserve the most.
    </div>);

export default SettingUpABlog1;