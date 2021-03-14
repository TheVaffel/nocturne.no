import * as React from 'react';
import { Route } from 'react-router-dom';
import * as axios_ from 'axios';

const axios  = axios_.default;

import { DynamicComponentWrapper } from '../dynamics.tsx';
import { DevBlogIndex } from './index.tsx';

import { Metadata } from '../../server/update_metadata';

export interface DevBlogPostProps {
    metadata: Metadata;
};

export const devblogPathUrl = "/eno/devblog";
export const devblogPathLocal = "/devblog";

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
        axios.get('/devblog_list').then((res) => {
            this.setState({ metadataList: res.data });
            console.log("Fetched metadatalist with length " + res.data.length);
        });
    }

    render() {
        const indexRoute = (<Route key = {0} exact path={devblogPathUrl + '/'}>
            <DevBlogIndex metadata={this.state.metadataList}/>
        </Route>)

        return <div>
            { indexRoute }
            {this.state.metadataList.map((met: Metadata) =>
                {
                    const urlPart = getURLPart(met);
                    return (<Route key = {met.hash} exact path={devblogPathUrl + '/' + urlPart}>
                        <DynamicComponentWrapper metadata={met}
                            _dcw_fileName={devblogPathLocal.substring(1) + '/posts/' + met.fileName} />
                    </Route>);
                }
            )}
        </div>
    }
}