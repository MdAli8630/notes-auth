const express = require('express');
const { addNotes, getAllNotes } = require('../controllers/noteController');
const auth = require("../middlewares/auth")

const NotesRouter = express.Router();



NotesRouter.post("/addNotes",auth,addNotes)
NotesRouter.get("/getAllNotes",auth,getAllNotes)

 

module.exports = NotesRouter