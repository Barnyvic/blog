import express, { Express, Request, Response } from 'express';
import logger from 'morgan';
import helmet from 'helmet';

const app: Express = express();
app.use(helmet());
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
        res.send('Express + TypeScript Server');
});

app.use('*', (req: Request, res: Response) => {
        return res.status(404).json({ message: 'route not found' });
});

export default app;