import * as React from 'react';
import { Link } from 'react-router-dom';

import { printDateEn, printDateNo, Db } from './utils.tsx';
import { Metadata } from '../../server/update_metadata';
import { LangContextStruct, LangContext } from '../infrastructure/root.tsx';
import { CommentSection } from './comments.tsx';

const noticeStyle: React.CSSProperties = { 
    backgroundColor: "#EEEE88",
    width: "80%",
    padding: "10px",
    borderStyle: "solid",
    borderColor: "#000000",
    textAlign: 'left',
    display: 'inline-block',
    borderRadius: '6px' };

const noticeOuterStyle: React.CSSProperties = {
    width: "100%",
    textAlign: 'center',
    alignItems: 'center',
    marginTop: '20px'
};

export const PostListEntry: React.FunctionComponent<{metadata: Metadata, blogUrl: string}> = (props) => (
    <div>
        <Link to={props.blogUrl + '/' + props.metadata.urlPath}><h3>{props.metadata.index}. {props.metadata.title}</h3></Link>
        {props.metadata.description}
        <br/>
    </div>
);

export const NoticeBlock = (props: React.PropsWithChildren<{}>) => (
    <div style={noticeOuterStyle} >
        <div style={noticeStyle}>
            {props.children}
        </div>
    </div>
);

const createdTexts: string[] = ["Skrevet", "Created"];
const updatedTexts: string[] = ["Sist oppdatert", "Last updated"];

export const PostWrapper = (props: {metadata: Metadata, children: React.ReactNode}) => {
    return (<>
        <PostHeader metadata={props.metadata} />
        {props.children}
        <Db />
        <hr />
        <CommentSection metadata={props.metadata} />
        </>);
};

const PostHeader : React.FunctionComponent<{metadata : Metadata}> = (props) => {
    const langState: LangContextStruct = React.useContext(LangContext);
    const langIndex = Math.max(0, langState.langIndex);
    const printDate = langIndex == 0 ? printDateNo : printDateEn;

    return (<>
        <h1>{props.metadata.title}</h1>
        <h4>{createdTexts[langIndex]}: {printDate(new Date(props.metadata.createDate))}<br/>
            {updatedTexts[langIndex]}: {printDate(new Date(props.metadata.updateDate))}</h4>
    </>);
}

