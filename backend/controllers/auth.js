const bcrypt = require("bcrypt");
const User = require("../models/user");

//función con la que el usuario se va logear
const login = async (req, res) => {
  //buscar el email que me llego del req en User
  let user = await User.findOne({ email: req.body.name });
  //si no esta el correo registrado, muestro el mensaje de error
  if (!user) return res.status(400).send("Incorrect email or password");

  if(user.dbStatus === false) return res.status(400).send("Incorrect email or password");

  const hash = await bcrypt.compare(req.body.password, user.password);
  if (!hash) return res.status(400).send("Incorrect email or password");

  try {
    const jwtToken = user.generateJWT();
    return res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Login error");
  }
};

module.exports = { login };
