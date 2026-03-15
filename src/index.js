import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server running on port ${process.env.PORT || 8000}`);
    })
    app.on("Error", (err) =>{
        console.log("Server error: ", err);
    })
})
.catch((err) =>{
    console.log("MONGODB connection failed !!! ", err);
})

// Basic route
app.get("/", (req, res) => {
  res.send("Server running");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));