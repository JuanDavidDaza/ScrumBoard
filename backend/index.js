const express = require("express");
//nos ayuda que todo este en orden
const cors = require("cors");
//conexión a la base de datos y saco el dbConnection
const { dbConnection } = require("./db/db");
//para configurar las variables de entorno - archivo .env
const Role = require("./routes/role");
const User = require("./routes/user");
const Auth = require("./routes/auth");
const Board = require("./routes/board");
require("dotenv").config();

const app = express();
//se va manejar en formato json
app.use(express.json());
//usa los cors para la aplicación --- cors para todo la seguridad 
app.use(cors());
//url
app.use("/api/role/", Role);
app.use("/api/user/", User);
app.use("/api/auth/", Auth);
app.use("/api/board/", Board);

//se va ejecutar por un puerto y lo llama del archivo .env con el process.env.PORT

app.listen(process.env.PORT, () =>
  console.log("Backend server running OK, on port: ", process.env.PORT)
);
//se puede usar este modulo porque llamamos la conexión en la linea 5
dbConnection();


