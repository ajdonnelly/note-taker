const path = require('path');

//start an instance of Router:
const router = require('express').Router();

//get all routes from root 
  router.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

//notes.html file
  router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  module.exports  = router;