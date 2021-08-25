const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/role");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");
const Admin = require("../middleware/admin");
//GET POST PUT DELETE
// http://localhost:3001/api/role/registerRole
router.post("/registerRole", Auth,ValidateUser,Admin, RoleController.registerRole);
router.post("/updateRole", Auth,ValidateUser,Admin, RoleController.updateRole);
// http://localhost:3001/api/role/listRole
router.get("/listRole",Auth,ValidateUser,Admin, RoleController.listRole);

module.exports=router;