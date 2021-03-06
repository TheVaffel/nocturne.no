import * as fs from 'fs';

import { Metadata } from './update_metadata.ts';

export interface InputComment {
    parentId?: number;
    text: string;
    author: string;
    postFileName: string;
};

export interface Comment {
    id: number;
    text: string;
    author: string;
    timestamp: Date;
    admin?: boolean;
    replies: Comment[];
};

interface MetadataCommentPair {
    comments: Comment[];
    metadata: Metadata;
};

export interface CommentMap {
    [key: string]: Comment[];
};

export interface IdCommentMap {
    [key: number]: Comment;
};


export let comments: CommentMap = {};
export let idCommentMap: IdCommentMap = {};

const addComment = (idCommentMap: IdCommentMap, com: Comment) => {
    idCommentMap[com.id] = com;
    com.replies.forEach((rep) => addComment(idCommentMap, rep));
}

const createIdCommentMap = (comments: CommentMap): IdCommentMap => {
    let idCommentMap: IdCommentMap = {};
    for (const key in comments) {
        comments[key].forEach((comment) => {
            addComment(idCommentMap, comment);
        });
    }

    return idCommentMap;
}

const commentFileDirectory: string = 'comments/';

const getCommentFileName = (postFileName: string): string => {
    const fileNameComps = postFileName.split('.');
    const commentFileName =
        commentFileDirectory
        + fileNameComps.slice(0, fileNameComps.length - 1).join('.')
        + '.json';
    return commentFileName;
};

const initCommentsForPost = (metadata: Metadata): Promise<MetadataCommentPair> => {
    return new Promise<MetadataCommentPair>((resolve, reject) => {
        const commentFileName = getCommentFileName(metadata.fileName);

        const exists = fs.existsSync(commentFileName);

        if (!exists) {
            const originalCommentFile: Comment[] = [];

            try {
                fs.writeFileSync(commentFileName, JSON.stringify(originalCommentFile));
            } catch (err) {
                reject(err);
            }
        }

        fs.readFile(commentFileName, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }

            const comments: Comment[] = JSON.parse(data);

            resolve({ comments: comments, metadata: metadata });
        });
    });
};

export const initComments = (metadata: Metadata[][]): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        const concatted: Metadata[] = [].concat(...metadata);

        const promises: Promise<MetadataCommentPair>[] = concatted.map(initCommentsForPost);

        Promise.all(promises).then((data: MetadataCommentPair[]) => {
            const mp: CommentMap = {};
            data.forEach((com: MetadataCommentPair) => {
                if (com.metadata.fileName in mp) {
                    console.log("Experienced duplicate file name: " + com.metadata.fileName);
                    console.log("File names must be unique, also across blogs. Exiting");
                    process.exit(-1);
                }
                mp[com.metadata.fileName] = com.comments;
            });

            setInterval(popFromQueue, 10_000);
            comments = mp;
            idCommentMap = createIdCommentMap(comments);
            resolve();
        }).catch(err => {
            console.log("Could not initialize comments: " + err);
            reject(err)
        });
    });
};

const MAX_COMMENTS_IN_QUEUE = 10;
let commentQueue: InputComment[] = new Array(MAX_COMMENTS_IN_QUEUE);
let currentCommentIndex: number = 0;
let numCommentsInQueue: number = 0;
let firstCommentInQueue: number = 0;


const isCommentValid = (c: InputComment) => c.author.trim().length > 0 && c.text.trim().length > 0;

export const receiveComment = (inComment: InputComment): boolean => {
    if (numCommentsInQueue == MAX_COMMENTS_IN_QUEUE || !isCommentValid(inComment)) {
        return false;
    }

    commentQueue[currentCommentIndex] = inComment;
    numCommentsInQueue++;
    currentCommentIndex = (currentCommentIndex + 1) % MAX_COMMENTS_IN_QUEUE;

    return true;
};


const popFromQueue = () => {
    if (numCommentsInQueue == 0) {
        return;
    }

    const inComment: InputComment = commentQueue[firstCommentInQueue];
    firstCommentInQueue = (firstCommentInQueue + 1) % 10;
    numCommentsInQueue--;

    let newId: number = 0;
    do {
        newId = Math.floor(Math.random() * 1e10);
    } while (newId in idCommentMap);

    const comment: Comment = {
        admin: false,
        author: inComment.author,
        id: newId,
        text: inComment.text,
        timestamp: new Date(Date.now()),
        replies: []
    };

    if (!(inComment.postFileName in comments)) {
        console.log("Could not find filename " + inComment.postFileName + " in comment map");
        return;
    }


    if (inComment.parentId >= 0) {
        if (!(inComment.parentId in idCommentMap)) {
            console.log("Could not find parent id in id map, dropping comment");
            return;
        }

        idCommentMap[inComment.parentId].replies.push(comment);
    } else {
        comments[inComment.postFileName].push(comment);
    }

    idCommentMap[comment.id] = comment;

    const commentFileName = getCommentFileName(inComment.postFileName);
    fs.writeFileSync(commentFileName, JSON.stringify(comments[inComment.postFileName], null, 2));
    console.log("Wrote comments for " + inComment.postFileName);
};
