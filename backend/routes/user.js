const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");
const Admin = require("../middleware/admin");

router.post("/registerUser", UserController.registerUser);
router.post(
  "/registerAdmin",
  Auth,
  ValidateUser,
  Admin,
  UserController.registerAdmin
);
//http://localhost:3001/api/user/listUser
// ? es opcional y si lo quito es obligatorio
router.get(
  "/listUser/:name?",
  Auth,
  ValidateUser,
  Admin,
  UserController.listUser
);

router.put("/updateUser", Auth, ValidateUser, Admin, UserController.updateUser);

router.put("/deleteUser", Auth, ValidateUser, Admin, UserController.deleteUser);

module.exports = router;
