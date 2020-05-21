// const express = require('express');
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

// function handleListening () {
//     console.log(`Listening on: http://localhost:${PORT}`)
// }

const handleHome = (req, res) =>res.send("hello from home respond");

// function handleHome(req, res){
//     console.log("hi from home!!@!@!@!@");
//     res.send("hello from home respond");
// }

const handleProfile = (req, res) => res.send("You are on my profile");

// function handleProfile(req, res){
//     res.send("You are on my profile");
// }

app.get("/", handleHome);

app.get("/profile", handleProfile)

app.listen(PORT, handleListening);