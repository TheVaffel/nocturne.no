import * as express from 'express';
import { Request, Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as helmet from 'helmet';

const app = express();

const port = 3000;

app.use(helmet());

function serve(res: Response, url: string) {

    let filename = path.resolve(path.join('./dist/public', url));

    if (!fs.existsSync(filename)) {
        filename = path.resolve(path.join('./dist/public/index.html'));
    }

    res.sendFile(filename);
}

app.get('/', (req : Request, res: Response) => {
    serve(res, '/index.html');
});

app.get('/:file_req', (req : Request, res : Response) => {
    serve(res, req.url);
});

app.listen(port, () => console.log('Server is running on port ' + port + '!'));