import express from "express";
import userRouter from "./routes/user";
import eventRouter from "./routes/event";
import voterRouter from "./routes/voter";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

import * as dotenv from "dotenv";
dotenv.config();

app.use("/v1/user", userRouter);
app.use("/v1/event", eventRouter);
app.use("/v1/voter", voterRouter);

app.listen(3001);
