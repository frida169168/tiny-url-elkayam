import express from 'express'
import linkRouter from "./Routers/linkRouter.js";
import userRouter from "./Routers/userRouter.js";
import bodyParser from 'body-parser';
import connectDB from './db.js'
import authRouter from './Routers/authRouter.js'
import cors from 'cors';
// import MailSender from './mail/mail.js'


const app = express()
connectDB();


const port =6001;

app.use(bodyParser.json());
app.use(cors());

app.use("/",linkRouter);
app.use('/users',userRouter);
app.use("/login",authRouter);

// app.get('/mail', async(req, res) => { 
//    await MailSender.sendEmail();
//   res.send("send email");
// });

app.listen(port, () => {
     console.log(`app listening on http://localhost:${port}`)
 });
