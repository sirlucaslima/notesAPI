const { Router } = require("express");
const NotesController = require("../controller/NotesController");
const notesController = new NotesController();
const notesRoutes = Router();

notesRoutes.post("/:user_id", notesController.create);

module.exports = notesRoutes;
 