const express = require("express");
const router = express.Router();
const BoardController = require("../controllers/board");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");
const multiparty = require("connect-multiparty");
const Upload = require("../middleware/file");
const mult = multiparty();

router.post("/saveTask", Auth, ValidateUser, BoardController.saveTask);
router.post(
  "/saveTaskImg",
  mult,
  Upload,
  Auth,
  ValidateUser,
  BoardController.saveTaskImg
);
router.get("/lisTask", Auth, ValidateUser, BoardController.lisTask);
router.put("/updateTask", Auth, ValidateUser, BoardController.updateTask);
router.delete(
  "/deleteTask/:_id",
  Auth,
  ValidateUser,
  BoardController.deleteTask
);

module.exports = router;
