import express from 'express';
import { api } from './api';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(api);

app.listen(3002, () => console.log('Server started'));
