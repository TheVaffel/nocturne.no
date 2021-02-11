import * as React from 'react';

interface Props { 
    param: string;
}

export const Hello: React.FunctionComponent<Props> = (props) =>
        (
            <div>
                <h1>ReactJS complete - This is the important message brought to us by the gorons: "{props.param}"</h1>
                <hr/>
                Wooh, you're finally awake!
            </div>
        );


