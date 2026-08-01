import * as fs from 'fs';
import { Md5 } from 'ts-md5';

const postDirectoryPrefix = './src/client';
const postDirectories : [string, (fileName: string) => boolean][] = 
    [['devblog', (_) => true], 
    ['python_tutorial', (name) => name.endsWith('.no.tsx')], 
    ['python_tutorial', (name) => name.endsWith('.en.tsx')]];

const metadataDirectorySuffix = '/metadata';

const defaultIndex = 1e9;

export interface Metadata {
    title: string;
    description: string;
    createDate: Date;
    updateDate: Date;
    hash: string;
    fileName: string;
    urlPath: string;
    index: number;
};

const getURLPartFromFileName = function(str: string) {
    return str.substring(0, str.length - 4);
};

const getURLPart = function(metadata: Metadata) : string {
    return getURLPartFromFileName(metadata.fileName);
};

const getPostFileName = (metadata: Metadata, dirNum: number): string => {
    const dir = postDirectoryPrefix + '/' + postDirectories[dirNum][0] + '/post';
    return dir + '/' + metadata.fileName;
};

const getMetadataFileName = (fileName : string) : string => {
    const spl = fileName.split('/');
    const lastPart : string = spl.pop();
    spl.pop();
    return spl.join('/')  + metadataDirectorySuffix + '/' +
        lastPart.substring(0, lastPart.length - 4) + '.json';
};

const getMetadataFileNameFromMetadata = (metadata: Metadata, dirNum: number): string => {
    const postFileName = getPostFileName(metadata, dirNum);
    return getMetadataFileName(postFileName);
};

const missesTitle = (metadata : Metadata) : boolean => {
    return metadata.title.length == 0;
};

const missesHash = (metadata : Metadata) : boolean => {
    return metadata.hash.length == 0;
};

const updateFileMetadata = (metadata : Metadata, postFileName : string) : [Metadata, boolean] => {
    
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
        return [Object.assign({}, metadata, { hash: hashish,
            createDate: nowDate,
            updateDate: nowDate,
            fileName: lastPart,
            urlPath: getURLPartFromFileName(lastPart),
            index: defaultIndex}), true];
    } else {
        if (metadata.urlPath == '' || metadata.urlPath == undefined) {
            metadata = Object.assign({}, metadata, { 'urlPath': getURLPart(metadata) });
        }

        if (metadata.index == defaultIndex) {
            metadata.index = parseInt(metadata.createDate.toString());
        }

        // Has hash, check if updated
        const readFile = fs.readFileSync(postFileName);
        const hashish = Md5.hashStr(readFile.toString());
        if (hashish != metadata.hash) {
            // Hash was different, change updateDate and update hash
            console.log("[updateFileMetadata] File " + postFileName + " was changed since last hash, updating");
            
            const nowDate = Date.now();
            return [Object.assign({}, metadata, { 'hash': hashish,
                'updateDate': nowDate}), true]; // filename not really necessary in the future
        }
        
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
            urlPath: "",
            index: defaultIndex
        }, null, '\t'));
        metadataContent = fs.readFileSync(metadataFile);
        console.log("Successfully created new metadata file");
    }

    return new Promise<Metadata>((resolve, reject) => {
        if (metadataContent.length == 0) {
            console.log("Warning: Failed to read metadata file " + metadataFile);
            reject();
        } else {
        
            const metadataJson : Metadata = Object.assign({index: defaultIndex}, 
                JSON.parse(metadataContent.toString()));

            const [newMetadata, shouldUse] = updateFileMetadata(metadataJson, fullFileName);

            if (newMetadata == metadataJson) {
                console.log(">>>Ignored file " + fullFileName + " when updating metadata");
            } else {
                console.log(">>>Writing metadata for file " + fullFileName);
                fs.writeFileSync(metadataFile, JSON.stringify(newMetadata, null, '\t'));
            }

            if (shouldUse) {
                resolve(newMetadata);
            } else {
                reject();
            }
        }
    });
}

const getMetadataListPromise = function(dir : string, 
    filter: (fileName: string) => boolean) : Promise<Metadata[]> {

    return new Promise((resolve, reject) => {
        fs.readdir(dir, (error, files) => {
            if (error) {
                console.log("Error reading directory " + dir);
                return;
            }
            
            const metadataPromises = files
                .filter(filter)
                .map(filename => {
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

const ensureIndexesInOrder = (metadatas: Metadata[][]): void => {
    metadatas.forEach((metadata: Metadata[], postDirNum: number) => {
        const sortMet = metadata.sort((a: Metadata, b: Metadata) => (a.index - b.index));
        sortMet.forEach((met: Metadata, ind: number) => {
            if (met.index != ind) {
                met.index = ind;
                const metadataFileName = getMetadataFileNameFromMetadata(met, postDirNum);
                fs.writeFileSync(metadataFileName, JSON.stringify(met, null, '\t'));
            }
        });
        metadatas[postDirNum] = sortMet;
    });
};

export const updateMetadata = function() : Promise<Metadata[][]> {
    let pr = new Promise<Metadata[][]>((resolve, reject) => { 
        const metadataPrs = postDirectories.map(([dirPart, filter]) => {
            const dir = postDirectoryPrefix + '/' + dirPart + '/posts';
            return getMetadataListPromise(dir, filter);
            
        });
        return Promise.all(metadataPrs).then((data: Metadata[][]) =>
            {
                ensureIndexesInOrder(data);
                resolve(data);
            });
    });

    return pr;
};