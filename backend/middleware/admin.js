//valida quien puede registra user
//valida que tipo de rol tiene
const Role = require("../models/role");
const admin = async (req, res, next) => {
  let role = await Role.findById(req.user.roleId);
  if (!role)
    return res
      .status(400)
      .send("Process failed: the role does not exist in db");

  if (role.name === "admin") next();
  else return res.status(400).send("Process failed: Unauthorized user");
};

module.exports = admin;
