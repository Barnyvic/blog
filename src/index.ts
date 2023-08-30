import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import {AppDataSource} from "./data-source"

const app = express();

app.use(express.json());


AppDataSource.initialize()
        .then(() => {
                app.listen(3000, () => {
                        console.log('Server is running on port 3000');
                });
        })
        .catch((error) => console.log('TypeORM connection error: ', error));
