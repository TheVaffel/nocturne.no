import * as React from 'react';
import { Link } from 'react-router-dom';

import { Metadata } from '../../server/update_metadata';
import { Comment, InputComment } from '../../server/comments.ts';
import { printDateEn, printDateNo, useMutableFetch } from './utils.tsx';
import { LangContextStruct, LangContext } from '../infrastructure/root.tsx';

const noticeStyle: React.CSSProperties = { 
    backgroundColor: "#EEEE88",
    width: "80%",
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

export const PostWrapper = (props: {metadata: Metadata, children: React.ReactNode}) => {
    return (<>
        <PostHeader metadata={props.metadata} />
        {props.children}
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


// Comments

interface CommentProps {
    metadata: Metadata;
    comment: Comment;
};

const CommentElement = (props: CommentProps) => {
    let [replies, setReplies]: [Comment[], (c: Comment[]) => void] = React.useState(props.comment.replies);
    const addReply = (c: Comment) => { console.log("Calling setreplies with "); console.dir(c); setReplies([...replies, c]); };
    return (<div>
        <b>{props.comment.author}</b><br />
        {props.comment.text}<br />
        {printDateEn(new Date(props.comment.timestamp))}<br />
        <CollapsibleCommentField metadata={props.metadata} addToList={addReply} parentComment={props.comment} /> <br />
        <div style={{paddingLeft: "10px"}}>
            {props.comment.replies.map((comment: Comment) => (<CommentElement key={comment.id} comment={comment}
                                                                              metadata={props.metadata} />))}
        </div>
    </div>);
}

interface CommentSectionProps {
    metadata: Metadata;
};


export const CommentSection = (props: CommentSectionProps) => {
    let [comments, setComments]: [Comment[], (c: Comment[]) => void] = useMutableFetch(`/comments/${props.metadata.fileName}`, []);
    console.log("Comments = ");
    console.dir(comments);
    const addComment = (c: Comment) => { setComments([...comments, c]); };
    return (<>
        <h4>Comments</h4>
        { comments.map((comment) => (<div  key={comment.id}><CommentElement comment={comment} metadata={props.metadata} /><br /> </div>)) }
            <CommentField metadata={props.metadata} addToList={addComment} />
    </>)
};


// Comment field

const mockComment = (inComment: InputComment): Comment => {
    const comment: Comment = {
        author: inComment.author,
        text: inComment.text,
        id: -1,
        timestamp: new Date(),
        replies: []
    };
    return comment;
}

const submitComment = (author: string, text: string, postFileName: string, parentComment: Comment): Comment => {
    const inputComment: InputComment = {
        author: author,
        text: text,
        postFileName: postFileName,
        parentId: parentComment?.id ?? -1
    };
    
    const body = JSON.stringify(inputComment);
    
    console.log("Submit with body " + body);
    fetch('/submit_comment', { method: 'POST', headers: {"Content-Type": 'application/json'}, body: body })
        .then(response => console.log("After posting comment, got status " + response.status))
        .catch(err => console.log("After posting comment, got error " + err));
    return mockComment(inputComment);
};

interface CommentFieldProps {
    metadata: Metadata;
    addToList: (c: Comment) => void;
    parentComment?: Comment;
};

export const CommentField = (props: CommentFieldProps) => {
    const [author, setAuthor] = React.useState('');
    const [text, setText] = React.useState('');
    
    return ( <>
        <label>Author</label> <input type="text" value={author} onChange={(event) => { setAuthor(event.target.value); }} /> <br/>
        <div><label>Text</label>
            <textarea rows={4} cols={50} style={{resize: 'none'}} value={text} onChange={(event) => { setText(event.target.value);}} /></div>
        <input type="submit" value="Submit" onClick={() => {
            console.log("Setting author and text to ''");
            setAuthor('');
            setText('');
            const mock: Comment = submitComment(author, text, props.metadata.fileName, props.parentComment);
            props.addToList(mock);
        }} />
    </>);
}

export const CollapsibleCommentField = (props: CommentFieldProps) => {
    const [active, setActive] = React.useState(false);

    return (
        <>
            <label onClick={() => { setActive(!active); }} ><u>{active ? "Nah" : "Reply" }<br /></u></label>
            {active ? <CommentField {...props} /> : (<></>)}
        </>
    );
}
