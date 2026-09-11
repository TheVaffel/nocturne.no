+++
date = '2021-02-23'
title = 'Setting up a Blog - Part 1'
+++

Have you ever considered starting your own blog, but didn't know where to start?

If yes, I can recommend <a href='http://www.blogspot.com'>Blogspot</a> as a good tool for creating your first blog.
It provides all necessary tools for getting up and running with spreading your joy and/or thoughts of your favorite subject.

If your answer to the above question is no, however, you might be in luck. This post will tell of my journey to finally put this blog
into working condition. "Working condition" in the last sentence means "anyone, given the sufficient patience and/or skills, will be able
to find and read posts that I create". By the time you read this post, this blog may have undergone a number of intrusive cosmetic transformations,
meaning that if you expect everything to work and feel the way this blog does after you have read this post, I have bad news for you. In addition,
this being the first post on my blog, I may or may not make up things about my blog as we go.

<div class="notice">
This post is not a wine, in that it has aged quite poorly. The blog you are reading is no longer based on the foundations described herein. However, although the author has taken better technical (and life) choices since its conception, the post still describes a somewhat viable approach to blogging, and it still delivers inspiration and ill omens as ever before.
</div>

#### Prerequisites

I will assume a few things about you when describing the anatomy of this blog:

- You have a computer you can use
- You know some programming, knowledge of Javascript/Typescript will be helpful but not required
- You know what a server is and/or what it does
- You know how to pop up your command line

If some of these are not fulfilled, you are still welcome to read on (after all, what am I gonna do 'bout it), but I won't promise you will be having a good time.

By the way, this will only be part one out of (probably) two parts.

#### Overview

The blog I'm describing today (probably the same you're reading right now) will
be made using npm with Typescript, ReactJS, Webpack and express.js.

#### npm
[npm](npmjs.com) or <b>N</b>ode <b>P</b>ackage <b>M</b>anager is, well.. A package manager for Node.
Node, in turn, is a Javascript runtime environment. It means it can be used to run Javascript. In turn, this is lucky for us,
who plan making a Javascript-based website.

#### Typescript
Yeah, I did in fact lie in the above paragraph, we are using [Typescript](https://www.typescriptlang.org/), which is Javascript but, well, you know, with types.
Types in programming languages are great for a number of reasons, but if you don't like them, that's fine, but you should
consider not saying it too loudly around here. Under the hood, though, Typescript will be translated to Javascript, since browsers don't understand
Typescript on its own (<i>yet</i>, one can dream).

#### ReactJS
[ReactJS](https://reactjs.org/) is a framework for writing website frontends.
React lets the programmer write webpages in a combination of HTML and Javascript, called <i>jsx</i>.
Now, we aren't just using plain old Javascript either, are we? No, and in Typescript land, we
will instead write our website using <i>tsx</i> files. The rabbit hole stops here,
but I'm sure you could find more [convoluted ways to write websites](https://github.com/metapensiero/metapensiero.pj) if you wanted.

#### Webpack
As mentioned, to make the world's browsers understand our nonsense,
we must translate, or <i>transpile</i>, if you will, the tsx-files to not-so-exotic Javascript.
Luckily, [Webpack](https://webpack.js.org/) knows a thing or two about just that.
To be precise, Webpack <i>knows</i> someone who know a thing or two about transpilation.
Webpack manages <i>loadels</i> that do the dirty work, and eventually collects the results and stashes them
into one or more files ready for shipping to the user.

#### express.js
Tired of hearing names yet? Well, that's web development for you. [Express.js](http://expressjs.com/) is our server framework.
We have already covered what we use for creating and packing our content for shipping to the user.
Express will be responsible for actually shipping our files to the user.

#### Others?
When using npm, the number of packages your project depends on will be ever-increasing
and often larger than necessary. I don't think this blog will be any different, but
I have tried to limit the description above to the most important components of the projects.
Only time will show what unnecessary packages will find their way into the blog further on.


### Starting up
Installing node and npm can be done from [Node's official website](https://nodejs.org/en/download/),
or your favorite package manager if you're on a Unix based system.
I'd love to guide you, but there are a good number of platforms to consider, and I'm using Gentoo Linux, which
isn't representative for anything.

To check whether node was installed corretly, confirm that writing

```sh { class="shell" }
node
```
or
```sh { class="shell" }
npm
```
(without the leading "$") gives some response indicating the command was found.

At this point, I would like to mention that I am not an expert on neither npm, Javascript or
web development in general. If you have been following very closely, you might have an itchling that
my relationship with the mention frameworks is somewhat troublesome.

Anyway

To start a blog, create a new directory

```sh { class="shell" }
mkdir notastupidblog
```
, enter it

```sh { class="shell" }
cd notastupidblog
```
and let hell loose
```sh { class="shell" }
npm init
```
Npm will project its insecurities on you and ask you a bunch of questions.
If anything is unclear about the questions, press enter to escape to the next.

Next up, install everything at once:

```sh { class="shell" }
npm install --save react react-dom react-router-dom express webpack webpack-cli webpack-node-externals ts-loader typescript helmet
```
, and to use typescript with these, install the relevant packages:

```sh { class="shell" }
npm install --save-dev @types/express @types/react @types/react-dom @types/react-router-dom
```

### Writing some code

I will not be going into detail of all components that constitute a blog, but I will write a
couple to communicate the idea. In any case, we will first need a HTML page to put our stuff into.
Create some room for it:

```sh { class="shell" }
mkdir -p dist/public
```

The HTML-page is placed at <code>dist/public/index.html</code> and looks like this:

```html
<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset = "UTF-8">
        <title>Nocturne.no</title>
    </head>
    <body>
        <div id = "hello">
        </div>
        <script src = "main.bundle.js"></script>
    </body>
</html>
```
When this neat little piece of code is downloaded to a user, the
magic will happen in the `div` tag, and will be performed by the "main.bundle.js" script.

Next up, the webpack configuration file. It looks a little bit like this:
```javascript
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    name: 'client',
    entry: {
      main: './src/client/main.tsx'
    },
    devtool: 'inline-source-map',
    performance: {
      hints: false
    },
    output: {
      path: path.join(__dirname, 'dist', 'public'),
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\\.tsx?$/,
          exclude: /node_modules/,
          include: /src\\/client/,
          loader: 'ts-loader'
        }
      ]
    }
  },
  {
    name: 'server',
    target: 'node',
    externals: [nodeExternals()],
    entry: {
      main: './src/server/server.ts'
    },
    output: {
      path: path.join(__dirname, 'dist', 'server'),
      filename: 'server.js'
    },
    module: {
      rules: [
        {
          test: /\\.ts$/,
          exclude: /node_modules/,
          include: /src\\/server/,
          loader: 'ts-loader'
        }
      ]
    }
  }
]

```
All this code is to be put into webpack.config.js in the project root.
Now, a lot of things are going on here. I'll cover the most important parts:

- The configuration is split into two objects, one called client, another called server.
These two objects configure how to transpile and pack the code for the server and the
web page separately.

- Both contain a set of rules which determine where their respective sources can be found
Notably, the server side is in pure typescript (.ts files), while the client side will have both
.ts and .tsx files. The files will be transpiled to javascript using ts-loader.

- Both configurations generate output files in the dist-folder, but clearly separated.
We will gather all user-reachable elements in the dist/public folder and everything else elsewhere.

Alright, we got the skeleton and the packer up. Let's create some meat for packing.
I will first only show how to create a simple component. I will discuss how to stitch
it together with other components, and eventually, blog posts.

As declared in the webpack configuration, the root component is expected to reside at
src/client/main.tsx. In this file, we can define the following simple component:

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
    (<div><h1>Hello world!</h1> <p>Goodbye, world</p></div>),
    document.getElementById('hello')
);
```

Before we can show this to our impatient user, we also need to setup the server.
A simple Express server may look like this:

```typescript
import * as express from 'express';
import { Request, Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as helmet from 'helmet';

const app = express();

const port = 3000;

app.use(helmet());

function serve(res: Response, url: string) {

  let filename = path.resolve(path.join('./dist/public', url));

  if (!fs.existsSync(filename)) {
    filename = path.resolve(path.join('./dist/public/index.html'));
  }

  res.sendFile(filename);
}

app.get('/', (req : Request, res: Response) => {
  serve(res, '/index.html');
});

app.get('/:file_req', (req : Request, res : Response) => {
  serve(res, req.url);
});

app.listen(port, () => console.log('Server is running on port ' + port + '!'));
```

Now, this is a bit more convoluted than strictly necessary for our blog at this point,
but it's all in preparation for the future. In particular the "app.get"-statements make sure we
take matches on both http-queries to the root (<code>app.get('/')</code>) and queries to any
file in dist/public (<code>app.get('/')</code>). The serve() function searches for the requested path in the dist/public folder.
If it does not find a corresponding file, it returns the index file. The reason for this will be clear a bit later.

Dump that code into src/server/server.ts, and we are soon ready to go.

The last speed bump on our road is the tsconfig file that steers the typescript transpilation.
You can slavingly write this to tsconfig.json in the root folder of the project:
```json
{
    "compilerOptions": {
        "outDir": "./dist/",
        "noImplicitAny": true,
        "sourceMap": true,
        "module": "commonjs",
        "target": "es5",
        "jsx": "react",
        "allowJs": true
    }
}
```
Personally, I'm too stupid to tell you what is going on here, probably not everything is needed.
But it works, and I'm not gonna complain (although you can, if you want to).

### Boot 'er up

After that travesty, add this section in your package.json. That file should have magically appeared
by following the above intsructions:
```
"scripts": {
    "build": "webpack build",
    "serve": "node dist/server/server.js"
},
```
The above code should replace the "script" member in the original file.

Now it's time to give it a roll.
Run
```sh { class="shell" }
npm run build
```
To make webpack create the output files. It should output those files to dist/server and dist/public
respectively. If you did not get any errors (they should show up pretty clearly), then you can enjoy
the next command! If you did, well.. I hope you're able to figure it out, buddy.

Now, run
```sh { class="shell" }
npm run serve
```
and open up your browser at <code>localhost:3000</code>.
And with that, you should have a base for a blog!
