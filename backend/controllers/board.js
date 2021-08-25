const mongoose = require("mongoose");
const Board = require("../models/board");
//manejar los ficheros de la aplicación
const fs = require("fs");
//manejo de rutas internas - entre directorios - como vamos a a manejar una imagen necesitamos extraer la imagenes e información
const path = require("path");
//formato de fecha
const moment = require("moment");

const saveTask = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send("Process failed: Incomplete data");

  const board = new Board({
    userId: req.user._id,
    name: req.body.name,
    description: req.body.description,
    taskStatus: "to-do",
  });

  const result = await board.save();
  if (!result)
    return res.status(400).send("Process failed: Failed to register task");
  return res.status(200).send({ result });
};

const lisTask = async (req, res) => {
  const board = await Board.find({ userId: req.user._id });
  if (!board || board.length === 0)
    return res.status.status(400).send("Process failed: No task");
  return res.status(200).send({ board });
};

const saveTaskImg = async (req, res) => {};


const updateTask = async (req, res) => {
  if (
    !req.body._id ||
    !req.body.name ||
    !req.body.taskStatus ||
    !req.body.description
  )
    return res.status(400).send("Process failed: Incomplete date");

  let board = await Board.findByIdAndUpdate(req.body._id, {
    userId: req.user._id,
    name: req.body.name,
    description: req.body.description,
    taskStatus: req.body.taskStatus,
  });

  if (!board) return res.status(400).send("Process failed: Task not found");

  return res.status(200).send({ board });
};

const deleteTask = async (req, res) => {
  //linea de codigo para validar los id
  const validId = mongoose.Types.ObjectId.isValid(req.params._id);
  if (!validId) return res.status(400).send("Process failed: Invalid id");

  const board = await Board.findByIdAndDelete(req.params._id);
  if (!board) return res.status(400).send("Process failed: Task not found");
  return res.status(200).send("Task deleted");
};

module.exports = { saveTask, lisTask, updateTask, deleteTask, saveTaskImg };
