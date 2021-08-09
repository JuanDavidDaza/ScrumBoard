const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String,
  roleId: { type: mongoose.Schema.ObjectId, ref: "role" },
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

//crear un token incriptado para cuando me traiga esta información sea mas seguro --- por medio del metodo JWT
userSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};
const user = mongoose.model("user", userSchema);
module.exports = user;
