import express from 'express';
import dotenv from 'dotenv'
import conectarDB from './config/db.js'

const port = process.env.port || 4000;
// const host = process.env.HOST || '0.0.0.0';
dotenv.config();

const app = express();

conectarDB();

app.get('/', (req, res) => {
    res.send(`El servidor esta funcionando`);
});


app.listen(port, () => {
    console.log(`El servidor esta funcionando`);
});