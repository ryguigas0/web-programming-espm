import express from 'express';

const app: express.Application = express();

const port: number = 3000;

app
    .get("/", (_req, res) => {
        res.send("Hello world!")
    })
    .listen(port, () => {
        console.log(`🚀 Running server at http://localhost:${port}/`);
    });
