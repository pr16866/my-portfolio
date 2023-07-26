import Express from "express";
import { connection } from "./Db connection/DB.js";
import dotenv from "dotenv";
import route from "./router/Routes.js";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();

const app = Express();

dotenv.config();
const URL1 = process.env.URL;

app.use(cors());
app.use(route);

connection(URL1);

app.use(Express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.get("*", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  } catch (err) {
    res.send(err);
  }
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`your server is listning on port :- ${PORT}`);
});
