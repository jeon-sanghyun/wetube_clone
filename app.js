import express from "express";
import morgannamesomething from "morgan";
import helmetnamesomething from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) =>res.send("hello from home respond");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmetnamesomething());
app.use(morgannamesomething("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use('/user', userRouter);

export default app;