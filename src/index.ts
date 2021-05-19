// Library import
import express, { Express, Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import path from "path";

import connection from "./helpers/connection";

// init app
const app: Express = express();

// cors
app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// multer config
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.fieldname + new Date().getTime() + ".jpg");
  },
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
});
const upload = multer({ storage });
app.post("/upload", upload.single("file"), (req: Request, res: Response) => {
  console.log(req.file);
  res.status(200).send({ succes: true });
});

connection
  .then(() => {
    app.listen(4000, "localhost");
    console.log("app listening on localhost:4000");
  })
  .catch((err) => {
    console.log(err, "error connect to db");
  });
