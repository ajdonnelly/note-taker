//bring in notes db
const notes = require('../db/save-notes');

//start an instance of Router:
const router = require('express').Router();

//get, post and delete requests
router.get('/notes', function (req, res) {
    notes.getNotes().then(notes => res.json(notes)).catch(err => res.status(500).json(err));
  });

router.post('/notes', (req, res) => {
    notes.addNote(req.body).then((note) => res.json(note)).catch(err => res.status(500).json(err));
});

//delete notes-find ID to delete using query parameter 
// read all notes from the db.json file, 
//remove the note with the given id property, 
//rewrite the notes to the db.json file.
router.delete("/notes/:id", function (req, res) {
    notes.delNote(req.params.id).then(() => res.json({ ok: true })).catch(err => res.status(404).json(err));
  });
  
module.exports  = router;