const upload = async (req, res, next) => {
  if (req.files.image.type) {
    let type = req.files.image.type;
    if (
      type !== "image/png" &&
      type !== "image/img" &&
      type !== "image/jpeg" &&
      type !== "image/git"
    ) {
      return res.status(400).send("Invalid format: only .png .git .jepg . jpg");
      next();
    } else {
      next();
    }
  }
};
module.exports = upload;
