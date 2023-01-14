const router = require("express").Router();
const { upload } = require("../services/multer");
const { uploadController } = require("../controllers/upload");
const { getImageController } = require("../controllers/getImage");

router.use("/upload", upload.single("file"), uploadController);

router.use("/image/:imageName", getImageController);

module.exports = router;
