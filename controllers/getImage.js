const { resizeImage } = require("../services/resize");
const { getImage } = require("../services/s3");

const getImageController = async (req, res) => {
  const { imageName } = req.params;
  const { resize } = req.query;
  const image = await getImage(imageName);
  let content = image.Body;

  if (resize) {
    const [width, height] = resize.split(",");
    content = await resizeImage({ buffer: content, width, height });
    res.set("x-resize", resize);
  }

  res.type(image.ContentType);
  res.send(content);
};

module.exports = { getImageController };
