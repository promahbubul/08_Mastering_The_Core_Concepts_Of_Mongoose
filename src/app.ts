import express from 'express';
import cors from 'cors';
import { StudentRoute } from './app/module/student/student.route';

// initializatin
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// routing
app.get('/', (req, res) => {
  res.send({ success: true, message: 'Hello world' });
});

// application route
app.use('/api/v1/students', StudentRoute);

export default app;
