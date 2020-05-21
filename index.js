import express from "express";
import morgannamesomething from "morgan";
import helmetnamesomething from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) =>res.send("hello from home respond");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmetnamesomething());
app.use(morgannamesomething("dev"));

const middleware =(req, res, next) =>{
    res.send("not happening");
};

app.get("/", handleHome);

app.get("/profile", handleProfile)

app.listen(PORT, handleListening);