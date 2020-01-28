import express from "express";
import path from "path";
import bodyParser from "body-parser";

import marvel from "./router";

const app: express.Application = express();
const port: number = parseInt(process.env.PORT || "5000");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/api/marvel", marvel);

app.listen(port, () => console.log(`Listening on port ${port}`));
