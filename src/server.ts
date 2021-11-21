import express, { Application } from 'express';
import { setupRoutes } from './routes/routes';

const app: Application = express();
app.use(express.json());

setupRoutes({app});

export default app;