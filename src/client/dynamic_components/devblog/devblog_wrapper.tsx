import * as React from 'react';
import { Route } from 'react-router-dom';
import * as axios_ from 'axios';

const axios  = axios_.default;

import { DynamicComponentWrapper } from '../dynamics.tsx';
import { DevBlogIndex } from './index.tsx';

import { Metadata } from '../../../server/update_metadata';

export interface DevBlogPostProps {
    param: string;
};

export const devblogPath = "/devblog";

export const getURLPart = function(metadata: Metadata) : string {
    return metadata.fileName.substring(0, metadata.fileName.length - 4);
}

type WrapperState = {
    metadataList : Metadata[];
};

export class DevBlogWrapper extends React.Component<{}, WrapperState> { 
    state: WrapperState = {
        metadataList: []
    };
    
    constructor(props : {}) {
        super(props);
        axios.get(devblogPath + '/list').then((res) => {
            this.setState({ metadataList: res.data });
            console.log("Fetched metadatalist with length " + res.data.length);
        });
    }

    render() {
        const indexRoute = (<Route key = {0} exact path={devblogPath + '/'}>
            <DevBlogIndex metadata={this.state.metadataList}/>
        </Route>)

        return <div>
            { indexRoute }
            {this.state.metadataList.map((met: Metadata) =>
                {
                    const urlPart = getURLPart(met);
                    return (<Route key = {met.hash} exact path={devblogPath + '/' + urlPart}>
                        <DynamicComponentWrapper param={""} _dcw_fileName={devblogPath.substring(1) + '/' + met.fileName} />
                    </Route>);
                }
            )}
        </div>
    }
}