import * as React from 'react';
import { Link } from 'react-router-dom';

import { Metadata } from '../../server/update_metadata';
import { Comment, InputComment } from '../../server/comments.ts';
import { printDateEn, printDateNo, useFetch } from './utils.tsx';
import { LangContextStruct, LangContext } from '../infrastructure/root.tsx';

const noticeStyle: React.CSSProperties = { 
    backgroundColor: "#EEEE88",
    width: "80%",
    // margin: "25px",
    padding: "10px",
    borderStyle: "solid",
    borderColor: "#000000",
    textAlign: 'left',
    display: 'inline-block' };

const noticeOuterStyle: React.CSSProperties = {
    width: "100%",
    textAlign: 'center',
    alignItems: 'center',
    marginTop: '20px'
};

export const PostListEntry: React.FunctionComponent<{metadata: Metadata, blogUrl: string}> = (props) => (
    <div>
        <Link to={props.blogUrl + '/' + props.metadata.urlPath}><h3>{props.metadata.title}</h3></Link>
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

export const PostHeader : React.FunctionComponent<{metadata : Metadata}> = (props) => {
    const langState: LangContextStruct = React.useContext(LangContext);
    const langIndex = Math.max(0, langState.langIndex);
    const printDate = langIndex == 0 ? printDateNo : printDateEn;

    return (<>
        <h1>{props.metadata.title}</h1>
        <h4>{createdTexts[langIndex]}: {printDate(new Date(props.metadata.createDate))}<br/>
            {updatedTexts[langIndex]}: {printDate(new Date(props.metadata.updateDate))}</h4>
    </>);
}


// Comments

const CommentElement = (props: Comment) => {
    return (<>
        <h5>{props.author}</h5>
        <p>{props.text}</p>
        {printDateEn(new Date(props.timestamp))}
        </>);
}

interface CommentSectionProps {
    metadata: Metadata;
};


export const CommentSection = (props: CommentSectionProps) => {
    let comments: Comment[] = useFetch(`/comments/${props.metadata.fileName}`, []);
    console.log("Comments = ");
    console.dir(comments);
    return (<>
        { comments.map((comment) => (<CommentElement key={comment.id} {...comment} />)) }
    </>)
};


// Comment field

const sendComment = (author: string, text: string, postFileName: string) => {
    const inputComment: InputComment = {
        author: author,
        text: text,
        postFileName: postFileName,
        parentId: -1
    };
    
    const body = JSON.stringify(inputComment);
    
    console.log("Submit with body " + body);
    fetch('/submit_comment', { method: 'POST', headers: {"Content-Type": 'application/json'}, body: body })
        .then(response => console.log("After posting comment, got status " + response.status))
        .catch(err => console.log("After posting comment, got error " + err));
};


export const CommentField = (props: Metadata) => {
    const [author, setAuthor] = React.useState('');
    const [text, setText] = React.useState('');
    
    return ( <>
        <label>Author</label> <input type="text" onChange={(event) => { setAuthor(event.target.value); }} /> 
        <label>Text</label><input type="text" onChange={(event) => { setText(event.target.value);}} />
        <input type="submit" value="Submit" onClick={() => sendComment(author, text, props.fileName)} />
    </>);
}
