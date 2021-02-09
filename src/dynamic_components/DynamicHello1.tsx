import * as React from 'react';

interface Props {
    param: string;
}

const DynamicHello1: React.FunctionComponent<Props> = (props) =>
        (
            <div>
                <h1>Hello from dynamic component 1 lmao</h1>
                Btw, the secret message is {props.param}
            </div>
        );

export default DynamicHello1;