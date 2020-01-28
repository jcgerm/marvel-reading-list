import express from "express";
import path from "path";
import bodyParser from "body-parser";

import marvel from "./router";

const app: express.Application = express();
const port: number = parseInt(process.env.PORT || "5000");

app.use(express.static(path.join(__dirname, "client/build")));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/api/marvel", marvel);

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
