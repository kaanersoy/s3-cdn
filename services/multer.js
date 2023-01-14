const multer = require("multer");
const upload = multer({ storage: null });

module.exports = { upload };
