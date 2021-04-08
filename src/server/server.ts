import * as express from 'express';
import { Request, Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as helmet from 'helmet';
import { updateMetadata, Metadata } from './update_metadata.ts';
import { initStatistics, incrementLoadCount } from './statistics.ts';

const app = express();

const port = 3000;

let metadataList: Metadata[][];
updateMetadata().then((res : Metadata[][]) =>
    {
        const sortedLists = res.map((mets: Metadata[]) =>
            {
                mets.sort((a, b) => a.createDate > b.createDate ? -1 : 1);
                return mets;
            });
        metadataList = sortedLists;

        console.dir("MetadataList = " + JSON.stringify(metadataList));
        main();
    });

initStatistics().catch((err: Error) => {
    console.log("Was unable to initialize statistics: " + err);
    process.exit(-1);
});

function main() : void {
    app.use(helmet());

    function serve(res: Response, url: string) {

        let filename = path.resolve(path.join('./dist/public', url));

        if (!fs.existsSync(filename)) {
            filename = path.resolve(path.join('./dist/public/index.html'));
            incrementLoadCount();
        }

        res.sendFile(filename);
    }

    app.get('/devblog_list', (req : Request, res: Response) => {
        res.send(metadataList[0]);
    });

    app.get('/tutorial_lists', (req : Request, res: Response) => {
        console.dir("Giving tutorial lists: ")
        console.dir([metadataList[1], metadataList[2]]);
        res.send([metadataList[1], metadataList[2]]);
    });

    app.get('/', (req : Request, res: Response) => {
        incrementLoadCount();
        serve(res, '/index.html');
    });
    
    app.get(/(\/.*)*/, (req : Request, res : Response) => {
        serve(res, req.url);
    });

    app.listen(port, () => console.log('Server is running on port ' + port + '!'));
}
