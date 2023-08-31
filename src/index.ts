import 'reflect-metadata';
import { AppDataSource } from './db/data-source';
import app from './app';



AppDataSource.initialize()
        .then(() => {
                app.listen(3000, () => {
                        console.log('Server is running on port 3000');
                });
        })
        .catch((error) => console.log('TypeORM connection error: ', error));
