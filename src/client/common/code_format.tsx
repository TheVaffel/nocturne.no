import * as React from 'react';

interface ChildrenProps {
    children: React.ReactNode
}

const cmdStyle = { backgroundColor: "#999999" };

const codeStyle: React.CSSProperties = { 
    backgroundColor: "#CCCCCC", 
    padding: '4px', 
    borderRadius: '4px',
    borderColor: '#999999', 
    borderWidth: '2px',
    borderStyle: 'solid' };
    
const inlineCodeStyle = { 
    backgroundColor: "#DDDDDD", 
    padding: '2px' };

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