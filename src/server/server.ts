import * as express from 'express';
import { Request, Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as helmet from 'helmet';

import { updateMetadata, Metadata } from './update_metadata.ts';
import { initStatistics, incrementLoadCount } from './statistics.ts';
import { InputComment, receiveComment, initComments, comments } from './comments.ts';

const app = express();

const port = 3000;

let metadataList: Metadata[][];

updateMetadata().then((res: Metadata[][]) => {
    metadataList = res;

    initComments(metadataList).then(() => {
        console.dir("Initialized comments!");
        main();
    }).catch((err: Error) => {
        console.log("Was unable to initialize comments: " + err);
        process.exit(-1);
    });
});

initStatistics().catch((err: Error) => {
    console.log("Was unable to initialize statistics: " + err);
    process.exit(-1);
});


function main(): void {
    app.use(helmet());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    function serve(res: Response, url: string) {

        let filename = path.resolve(path.join('./dist/public', url));

        if (!fs.existsSync(filename)) {
            filename = path.resolve(path.join('./dist/public/index.html'));
            incrementLoadCount();
        }

        res.sendFile(filename);
    }

    const sendFileOptions = {
        root: path.join(__dirname)
    };

    app.get('/hei', (req: Request, res: Response) => {
        res.send({ melding: 'Gratulerer, du fikk tak i denne meldingen!' });
    });

    app.get('/hey', (req: Request, res: Response) => {
        res.send({ message: 'Congratulation, you got this message!' });
    });

    app.get('/files/*', (req: Request, res: Response) => {
        const spl = req.url.split('/');
        const filePath = 'files/' + decodeURI(spl[spl.length - 1]);
        console.log("FilePath = " + filePath);
        res.sendFile(filePath, sendFileOptions);
    });

    app.get('/devblog_list', (req: Request, res: Response) => {
        res.send(metadataList[0]);
    });

    app.get('/tutorial_lists', (req: Request, res: Response) => {
        res.send([metadataList[1], metadataList[2]]);
    });

    app.get('/comments/*', (req: Request, res: Response) => {
        const spl = req.url.split('/');
        const lastPart = spl[spl.length - 1];

        console.log("Sending comments");

        if (lastPart in comments) {
            res.send(comments[lastPart]);
        } else {
            res.sendStatus(404);
        }
    });

    app.post('/submit_comment', (req: Request, res: Response) => {
        const inComment: InputComment = req.body;
        console.log("Received submit comment. inComment = ");
        console.dir(req.body);
        const accepted = receiveComment(inComment);

        if (accepted) {
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
    });

    app.get('/', (req: Request, res: Response) => {
        incrementLoadCount();
        serve(res, '/index.html');
    });

    app.get(/(\/.*)*/, (req: Request, res: Response) => {
        serve(res, req.url);
    });

    app.listen(port, () => console.log('Server is running on port ' + port + '!'));
}
