/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/module/student/student.route';
import { UserRoutes } from './app/module/user/user.route';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';

// initialization
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// routing
app.get('/', (req: Request, res: Response) => {
  Promise.reject();
  // res.send({ success: true, message: 'Hello world' });
});

// application route
app.use('/api/v1/', router);

// error handling
app.use(globalErrorHandler);
app.use(notFound);

export default app;
