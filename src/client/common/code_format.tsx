import * as React from 'react';

interface ChildrenProps {
    children: React.ReactNode
}

const cmdStyle = { backgroundColor: "#999999"};

export const CmdPrompt: React.FunctionComponent<ChildrenProps> = (props) =>
    (<div>
    <code style={cmdStyle}>$ {props.children}</code>
    </div>);

export const CodeBlock: React.FunctionComponent<ChildrenProps> = (props) =>
    (<div>
        <code><pre style={cmdStyle}>{props.children}</pre></code>
    </div>)