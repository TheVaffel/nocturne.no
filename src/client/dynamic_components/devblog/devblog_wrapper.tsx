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

export const devblogPath = "/devblog"

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
                return (<Route key = {met.hash} exact path={devblogPath + '/' + met.hash}>
                    <DynamicComponentWrapper param={"Hey"} _dcw_fileName={devblogPath.substring(1) + '/' + met.fileName} />
                </Route>);
            }
        )}
        </div>
    }
}