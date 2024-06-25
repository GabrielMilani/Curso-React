const express = require("express");
const router = express.Router();
const { insertPhoto, deletePhoto, getAllPhotos, getUserPhotos, getPhotoById, updatePhoto, likePhoto, commentPhoto, searchPhotos } = require("../controllers/PhotoController");

const { photoInsertValidation, photoUpdateValidation, commentPhotoValidation } = require("../middlewares/PhotoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
const { imageUpload } = require("../middlewares/imageUpload");

router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto);
router.delete("/:id", authGuard, deletePhoto);
router.get("/search", searchPhotos);
router.get("/", getAllPhotos);
router.get("/user/:id", getUserPhotos);
router.get("/:id", getPhotoById);
router.put("/:id", authGuard, imageUpload.single("image"), photoUpdateValidation(), validate, updatePhoto);
router.put("/like/:id", authGuard, likePhoto);
router.put("/comment/:id", authGuard, commentPhotoValidation(), validate, commentPhoto);

module.exports = router;

