const Role = require("../models/role");

//registra un rol
const registerRole = async (req, res) => {
  //valido que no me lleguen valores null
  if (!req.body.name || !req.body.description)
    return res.status(401).send("Process failed: Incomplete data");
//find busca todos
//findOne busca uno 
  //validar si existe el rol
  const existingRole = await Role.findOne({ name: req.body.name });
  // ya este registro esta en la base de datos y retorno un error de 401
  if (existingRole)
    return res.status(401).send("Process failed: role already exist");

  //despues de validar entonces ya puedo guardar los datos a la base de datos
  const role = new Role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  const result = await role.save();
  if (!result) return res.status(401).send("Failed to register role");
  return res.status(200).send({ role });
};
//lista los roles
const listRole = async (req, res) => {
    //traigame todo de la colección Role
    const role=await Role.find()
    //valido si no encuentra resultados
    if(!role || role.length === 0) return res.status(401).send("No Role")
    return res.status(200).send({role})
};

const updateRole = async(req,res)=>{
 if(!req.body.description || !req.body._id) return res.status(400).send("Process failed: Incomplete data");

 let role= await Role.findByIdAndUpdate(req.body._id,{
   description:req.body.description
 })
 
 if(!role) return res.status(400).send("Process failed: editing role");

 return res.status(200).send({role});
}

const deleteRole = async(req,res)=>{

}

module.exports = { registerRole, listRole, updateRole, deleteRole };
