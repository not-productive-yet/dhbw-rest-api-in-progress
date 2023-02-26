import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import router from "./routes/booksRoutes.js";
import swaggerDocs from "../swaggerDocs.js";

// initialize app
const app = express();
const port = 4000;

app.use(bodyParser.json());

// only book routes and documentation is valid
// everything else throws a 404
app.use("/books", router);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.all("*", (req, res) => res.sendStatus(404));

// connect to database
mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});

//start server
app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
