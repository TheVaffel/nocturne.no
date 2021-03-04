import * as React from 'react';
import { Metadata } from '../../server/update_metadata';

export const PostHeader : React.FunctionComponent<{metadata : Metadata}> = (props) =>
    (<>
        <h1>{props.metadata.title}</h1>
        <h4>Created: {new Date(props.metadata.createDate).toDateString()}<br/>
        Updated: {new Date(props.metadata.updateDate).toDateString()}</h4>
    </>);