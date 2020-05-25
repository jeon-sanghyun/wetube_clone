import mongoose from "mongoose";


mongoose.connect(
    "mongodb://localhost:27017/we-tube",
    {
        useNewUrlParser: true, 
        useFindAndModify:false
    });

    const db = mongoose.connection;

    const handlerOpen = () => console.log("✅ Connect to DB");
    const handlerError = (error) => console.log(`❌ Error on DB Connection:${error}`);

    db.once("open", handlerOpen);
    db.on("error", handlerError);