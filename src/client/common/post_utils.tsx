import * as React from 'react';
import { Link } from 'react-router-dom';

import { Metadata } from '../../server/update_metadata';
import { printDate } from './utils.tsx';

export const PostListEntry: React.FunctionComponent<{metadata: Metadata, blogUrl: string}> = (props) => (
    <div>
        <Link to={props.blogUrl + '/' + props.metadata.urlPath}><h3>{props.metadata.title}</h3></Link>
        {props.metadata.description}
        <br/>
    </div>
);

export const PostHeader : React.FunctionComponent<{metadata : Metadata}> = (props) =>
    (<>
        <h1>{props.metadata.title}</h1>
        <h4>Created: {printDate(new Date(props.metadata.createDate))}<br/>
            Updated: {printDate(new Date(props.metadata.updateDate))}</h4>
    </>);