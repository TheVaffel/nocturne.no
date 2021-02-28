import * as React from 'react';

import { DevBlogPostProps } from './devblog_wrapper.tsx';

class TestPost extends React.Component<DevBlogPostProps> {
    componentDidMount() {
        console.log("This blog post is running som mischievous script in the background btw");
    }

    render() {
        return (<div>
        <h1>Test post0</h1>
        Hello! This is a test post. I hope you enjoy all this testing.
    </div>);
    }
}

export default TestPost;