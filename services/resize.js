const sharp = require("sharp");

const resizeImage = async ({ buffer, ...args }) => {
  Object.keys(args).forEach((key) => {
    if (args[key] === "x") {
      args[key] = undefined;
      return;
    }
    args[key] = Number(args[key]);
  });

  // args = {width, height}
  return sharp(buffer).resize(args).toBuffer();
};

module.exports = { resizeImage };
