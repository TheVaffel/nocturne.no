import * as fs from 'fs';

const statistics_file = './statistics/statistics.json';

interface Statistics {
    loadCount: number; // Number of times the site has been loaded
}

let global_statistics: Statistics;

export const initStatistics = (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        const ex = fs.existsSync(statistics_file);


        if (!ex) {
            const originalStatistics: Statistics = { loadCount: 0 };
            try {
                fs.writeFileSync(statistics_file, JSON.stringify(originalStatistics));
            } catch (err) {
                reject(err);
            }
        }

        fs.readFile(statistics_file, 'utf8', (err, data) => {
            if (err != null) {
                reject(err);
            }

            global_statistics = JSON.parse(data);
            
            // Ensure statistics file is written every minute
            setInterval(writeStatistics, 60_000);
            resolve();
        });
    });
}

const writeStatistics = () => {
    console.dir("Syncronized statistics file");
    fs.writeFileSync(statistics_file, JSON.stringify(global_statistics));
}

export const incrementLoadCount = () => {
    global_statistics.loadCount++;
    console.dir("Incremented load count");
}
