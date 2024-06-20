const db = require("../models");
const bcrypt = require("bcrypt");

exports.createNewUser = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    await db.cuentas.create({ email: email, name: name, password: hash });
    res.status(200).json({
      message: "Creado con exito!",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear el usuario!",
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const ususarios = await db.cuentas.findAll();
    res.status(200).json({
      users: ususarios,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener todos los usuarios",
    });
  }
};

exports.changeUser = async (req, res) => {
  const { email, newName } = req.body;
  await db.cuentas.update(
    { name: newName },
    {
      where: {
        email: email,
      },
    }
  );
  try {
    res.status(200).json({
      message: "Modificado con exito!",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al cambiar datos del usuario",
    });
  }
};
