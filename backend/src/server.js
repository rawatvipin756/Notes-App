import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5001;

connectDB();

app.use("/api/notes",notesRoutes);

app.listen(PORT,()=> {
    console.log("Server started at Port :",PORT);
});

// 6MzDyF7iOtwtFz0D

//mongodb+srv://<db_username>:6MzDyF7iOtwtFz0D@cluster0.y7y0eej.mongodb.net/