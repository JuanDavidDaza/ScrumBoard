const User = require("../models/user");
const  mongoose  = require("mongoose");

const user = async (req, res, next) => {
  //validar el id de usuario directamente con mongoose 
  const validId = mongoose.Types.ObjectId.isValid(req.user._id);
  if(!validId) return res.status(400).send("Process failed: Invalid id");

  //valido si ese id de usuario esta registrado
  const user = await User.findById(req.user._id);
  if (!user)
    return res.status(400).send("Process failed: User without permission");
  next();
};
module.exports = user;


