import * as fs from 'fs';
import { Md5 } from 'ts-md5';

const postDirectoryPrefix = './src/client';
const postDirectories : string[] = ['devblog'];
const metadataDirectorySuffix = '/metadata';

export interface Metadata {
    title: string;
    description: string;
    createDate: Date;
    updateDate: Date;
    hash: string;
    fileName: string;
};

const getMetadataFileName = (fileName : string) : string => {
    const spl = fileName.split('/');
    const lastPart : string = spl.pop();
    spl.pop();
    return spl.join('/')  + metadataDirectorySuffix + '/' +
        lastPart.substring(0, lastPart.length - 4) + '.json';
}

const missesTitle = (metadata : Metadata) : Boolean => {
    return !('title' in metadata) || 
        typeof metadata['title'] != 'string' || 
        (metadata['title'] as string).length == 0;
}

const missesHash = (metadata : Metadata) : Boolean => {
    return !('hash' in metadata) ||
        typeof metadata['hash'] != 'string' ||
        (metadata['hash'] as string).length == 0;
}

const updateFileMetadata = (metadata : Metadata, postFileName : string) : [Metadata, Boolean] => {
    
    const lastPart = postFileName.substring(postFileName.lastIndexOf('/') + 1);

    if (missesTitle(metadata)) {
        // There has not been provided a title, so will just leave as is
        console.log("[updateFileMetadata] Did not find title in metadata for file " + 
            postFileName + ", ignoring");
        return [metadata, false];
    
    } else if (missesHash(metadata)) {
        // Create hash and initialize create / write dates
        const readFile = fs.readFileSync(postFileName);
        const hashish = Md5.hashStr(readFile.toString());
        const nowDate = Date.now();
        
        console.log("[updateFileMetadata] File " + postFileName + " initialized with createDate and hash");
        return [Object.assign({}, metadata, { 'hash': hashish,
            'createDate': nowDate,
            'updateDate': nowDate,
            'fileName': lastPart}), true];
    
    } else {
        // Has hash, check if updated
        const readFile = fs.readFileSync(postFileName);
        const hashish = Md5.hashStr(readFile.toString());
        if (hashish != metadata['hash']) {
            // Hash was different, change updateDate and update hash
            console.log("[updateFileMetadata] File " + postFileName + " was changed since last hash, updating");
            
            const nowDate = Date.now();
            return [Object.assign({}, metadata, { 'hash': hashish,
                'updateDate': nowDate,
                'fileName': lastPart }), true]; // filename not really necessary in the future
        }
        
        console.log("[updateFileMetadata] File " + postFileName + " was up to date, ignoring");
        return [metadata, true];
    }
}

const getMetadataForFile = function(dir: string, filename : string) : Promise<Metadata> {
    const fullFileName = dir + '/' + filename;
    
    const metadataFile = getMetadataFileName(fullFileName);
    let metadataContent: Buffer;
    try {
        metadataContent = fs.readFileSync(metadataFile);
    } catch(error) {
        console.log("Could not read metadata file = " + metadataFile + 
            ", will assume it doesn't exist");
        fs.writeFileSync(metadataFile, JSON.stringify({
            title: "",
            description: "",
            createDate: "",
            updateDate: "",
            hash: "",
            fileName: "",
        }, null, '\t'));
        metadataContent = fs.readFileSync(metadataFile);
        console.log("Successfully created new metadata file");
    }

    return new Promise<Metadata>((resolve, reject) => {
        if (metadataContent.length == 0) {
            console.log("Warning: Failed to read metadata file " + metadataFile);
            reject();
        } else {
        
            const metadataJson : Metadata = JSON.parse(metadataContent.toString());

            const [newMetadata, shouldUse] = updateFileMetadata(metadataJson, fullFileName);

            if (newMetadata == metadataJson) {
                console.log(">>>Ignored file " + fullFileName);
            } else {
                console.log(">>>Writing metadata for file " + fullFileName);
                fs.writeFileSync(metadataFile, JSON.stringify(newMetadata, null, '\t'));
            }

            if (shouldUse) {
                console.dir("Pushing m = " + JSON.stringify(newMetadata, null, '\t'));
                resolve(newMetadata);
                // metadataList.push(newMetadata)
            } else {
                reject();
            }
        }
    });
}

const getMetadataListPromise = function(dir : string) : Promise<Metadata[]> {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (error, files) => {
            if (error) {
                console.log("Error reading directory " + dir);
                return;
            }
            
            console.log("Found files " + files);
            const metadataPromises = files.map(filename => {
                return getMetadataForFile(dir, filename);
            });
            
            return Promise.allSettled(metadataPromises).then((res) => {
                const newRes: Metadata[] = res.filter(rr => rr.status === "fulfilled").
                    map((el) => (el as PromiseFulfilledResult<Metadata>).value);
                resolve(newRes);
            });
        })
    });
}

export const updateMetadata = function() : Promise<Metadata[][]> {
    let metadataList : Metadata[] = [];

    let pr = new Promise<Metadata[][]>((resolve, reject) => { 
        const metadataPrs = postDirectories.map((dirPart) => {
            const dir = postDirectoryPrefix + '/' + dirPart + '/posts';
            return getMetadataListPromise(dir);
            
        });
        return Promise.all(metadataPrs).then(resolve);
    });
    return pr;
};