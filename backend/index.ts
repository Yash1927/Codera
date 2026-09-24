import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import 'dotenv/config';
import userRouter from "./routes/user";
import adminRouter from "./routes/admin";
import contestRouter from "./routes/contest";


const JWT_TOKEN:string = process.env.JWT_TOKEN || '';

const app = express();
app.use(cors())
app.use(express.json())

app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/contest', contestRouter);


app.listen(3000);