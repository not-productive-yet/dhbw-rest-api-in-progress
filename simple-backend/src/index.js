import express from "express";
import bodyParser from "body-parser";
import router from "./routes/booksRoutes.js";
import mongoose from "mongoose";

// initialize app
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/books", router);

// connect to database
mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
