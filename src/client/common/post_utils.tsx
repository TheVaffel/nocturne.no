import * as React from 'react';
import { Metadata } from '../../server/update_metadata';
import { printDate } from './utils.tsx';

export const PostHeader : React.FunctionComponent<{metadata : Metadata}> = (props) =>
    (<>
        <h1>{props.metadata.title}</h1>
        <h4>Created: {printDate(new Date(props.metadata.createDate))}<br/>
            Updated: {printDate(new Date(props.metadata.updateDate))}</h4>
    </>);