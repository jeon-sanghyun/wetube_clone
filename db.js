import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true, 
        useFindAndModify:false
    });

    const db = mongoose.connection;

    const handlerOpen = () => console.log("✅ Connect to DB");
    const handlerError = (error) => console.log(`❌ Error on DB Connection:${error}`);

    db.once("open", handlerOpen);
    db.on("error", handlerError);