import * as React from 'react';

interface Props {
    param: string
}

const DynamicHello0: React.FunctionComponent<Props> = (props) =>
        (
            <div>
                <h1>Hello from dynamic component 0 lol</h1>
                (Param = {props.param})
            </div>
        );

export default DynamicHello0;