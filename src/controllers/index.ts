import { Request, Response, static as staticFolder } from "express";

import { IMAGES_DIR, DOCUMENTS_DIR } from "../helpers/util";

export const staticImages = staticFolder(IMAGES_DIR);
export const staticDocuments = staticFolder(DOCUMENTS_DIR);

export const uploadImage = (req: Request, res: Response) => {
  console.log(req.file);

  res.status(200).send({ succes: true });
};
