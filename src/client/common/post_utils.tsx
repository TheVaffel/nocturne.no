import * as React from 'react';
import { Link } from 'react-router-dom';

import { Metadata } from '../../server/update_metadata';
import { Comment, InputComment } from '../../server/comments.ts';
import { printDateEn, printDateNo, localizedDate, localize, useMutableFetch, Db } from './utils.tsx';
import { LangContextStruct, LangContext } from '../infrastructure/root.tsx';

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


/*
 * Comments
 */

const commentsHeaderText: string[] = ["Kommentarer", "Comments"];
const authorLabel: string[] = ["Navn", "Name"];
const textLabel: string[] = ["Tekst", "Text"];
const submitText: string[] = ["Send", "Submit"];
const replyText: string[] = ["Svar", "Reply"];
const dontReplyText: string[] = ["Eller ikke...", "Nah"];

interface CommentProps {
    metadata: Metadata;
    comment: Comment;
};

const CommentElement = (props: CommentProps) => {
    const [thisReplies, setReplies]: [Comment[], (c: Comment[]) => void] = React.useState(props.comment.replies);
    const admin: boolean = props.comment.admin ?? false;
    
    const addReply = (c: Comment) => { setReplies([...thisReplies, c]); };
    return (<div style={{borderStyle: "solid", borderWidth: "1px", padding: "5px", margin: "2px"}}>
        <b style={{backgroundColor: admin ? "#FFFF22" : "#FFFFFF"}}>{props.comment.author}</b><br />
        {props.comment.text}<br />
        <span style={{color: "#888888"}}>{localizedDate(new Date(props.comment.timestamp))}</span><br />
        <CollapsibleCommentField metadata={props.metadata} addToList={addReply} parentComment={props.comment} /> <br />
        <div style={{paddingLeft: "10px"}}>
            {thisReplies.map((comment: Comment) =>
                (<CommentElement key={comment.id} comment={comment} metadata={props.metadata} />))}
        </div>
    </div>);
}

interface CommentSectionProps {
    metadata: Metadata;
};


export const CommentSection = (props: CommentSectionProps) => {
    let [comments, setComments]: [Comment[], (c: Comment[]) => void] = useMutableFetch(`/comments/${props.metadata.fileName}`, []);
    const addComment = (c: Comment) => { setComments([...comments, c]); };
    return (<>
        <h2>{localize(commentsHeaderText)}</h2>
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
    const valid = author.trim().length > 0 && text.trim().length > 0;

    const onSubmit = () => {
        setAuthor('');
        setText('');
        const mock: Comment = submitComment(author, text, props.metadata.fileName, props.parentComment);
        props.addToList(mock);
    };
    
    return ( <div style={{margin: "5px"}}>
        <table>
            <tbody>
            <tr>
                <td align='right' style={{fontSize: 'contents'}}>{localize(authorLabel)}</td>
                <td align='left'style={{marginLeft: '5px'}}><input type="text" width="50px" value={author} onChange={(event) => { setAuthor(event.target.value); }} /></td>
            </tr>
            <tr>
                <td align='right'>{localize(textLabel)}</td>
                <td align='left' style={{marginLeft: '5px'}}><textarea style={{resize: 'none'}} value={text} onChange={(event) => { setText(event.target.value);}} /></td>
            </tr>
            </tbody>
        </table>
        <input type="submit" disabled={!valid} value={localize(submitText)} onClick={onSubmit} />
    </div>);
}

export const CollapsibleCommentField = (props: CommentFieldProps) => {
    const [active, setActive] = React.useState(false);

    const wrappedAddReply = (c: Comment) => { setActive(false); props.addToList(c); };
    
    return (
        <>
            <label onClick={() => { setActive(!active); }} >
                <u>{active ? localize(dontReplyText) : localize(replyText) }<br /></u>
            </label>
            {active ? <CommentField {...props} addToList={wrappedAddReply} /> : (<></>)}
        </>
    );
}
