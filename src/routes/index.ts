import { Router } from "express";
import { staticImages, staticDocuments, uploadImage } from "../controllers";
import { midUploadImage } from "../helpers/util";

const route = Router({ mergeParams: true });

route.use("/images", staticImages);
route.use("/documents", staticDocuments);
route.post("/image", midUploadImage.single("img"), uploadImage);

export default route;
