import path from "path";
import multer from "multer";
import mime from "mime-types";
import fs from "fs";

export const APP_DIR = path.join(__dirname, "../");
export const IMAGES_DIR = path.join(APP_DIR, "uploads/images");
export const DOCUMENTS_DIR = path.join(APP_DIR, "uploads/documents");

export const storageImages = multer.diskStorage({
  filename: (req, file, cb) => {
    const filename =
      file.fieldname +
      new Date().getTime() +
      "." +
      mime.extension(file.mimetype);
    cb(null, filename);
  },
  destination: (req, file, cb) => {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
    cb(null, IMAGES_DIR);
  },
});
export const storageDocuments = multer.diskStorage({
  filename: (req, file, cb) => {
    const filename =
      file.fieldname +
      new Date().getTime() +
      "." +
      mime.extension(file.mimetype);
    cb(null, filename);
  },
  destination: (req, file, cb) => {
    fs.mkdirSync(DOCUMENTS_DIR, { recursive: true });
    cb(null, DOCUMENTS_DIR);
  },
});

export const midUploadImage = multer({ storage: storageImages });
export const midUploadDocument = multer({ storage: storageDocuments });
