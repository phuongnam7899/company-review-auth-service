// filepath: src/app.ts
import express, { Request, Response } from 'express';
import cors from 'cors';

import authRoutes from './routes/auth';

const app = express();

const whitelist = ['http://localhost:3000'];

const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  };

app.use(cors(corsOptions));

app.use("/api/auth", authRoutes)

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello from the TypeScript microservice!');
});

export default app;