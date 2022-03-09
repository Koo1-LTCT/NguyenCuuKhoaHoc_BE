import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import createError from "http-errors";
import { Endpoint } from "./configs/endpoint";
import logger from "./middleware/logger";
import appRouter from "./routes/app";
import authRouter from "./routes/auth";
import categoryRouter from "./routes/category";
import questionRouter from "./routes/question";
import answerRouter from "./routes/answer";

const app = express();

app.use(logger());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(Endpoint.AUTH, authRouter);
app.use(Endpoint.BASE, appRouter);
app.use(Endpoint.CATEGORY, categoryRouter);
app.use(Endpoint.QUESTION, questionRouter);
app.use(Endpoint.ANSWER, answerRouter);

app.use((req: any, res: any, next: any) => {
  next(createError(404));
});

// app.use((err: any, req: any, res: any, next: any) => {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.render('error');
// });

export default app;
