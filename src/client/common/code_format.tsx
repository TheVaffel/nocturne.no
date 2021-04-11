import * as React from 'react';

interface ChildrenProps {
    children: React.ReactNode
}

const cmdStyle = { backgroundColor: "#999999" };

const codeStyle = { backgroundColor: "#CCCCCC" };
const inlineCodeStyle = { backgroundColor: "#DDDDDD" };

export const CmdPrompt: React.FunctionComponent<ChildrenProps> = (props) =>
    (<div>
    <code style={cmdStyle}>$ {props.children}</code>
    </div>);

export const CodeBlock: React.FunctionComponent<ChildrenProps> = (props) =>
    (<div>
        <code><pre style={codeStyle}>{props.children}</pre></code>
    </div>)


// Inline code
export const Ic: React.FunctionComponent<React.PropsWithChildren<{}>> = (props) => (<code style={inlineCodeStyle}>{props.children}</code>);