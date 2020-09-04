
// Create a route that the front-end can request data from. 
//require data
const { animals } = require('./data/animals');

//initiate express
const express = require('express');

const PORT = process.env.PORT || 3001;

//initiate server
const app = express();

//add route to data
//route the client will have to fetch from
//second is a callback function
app.get('/api/animals', (req, res) => {
    //using the send() method from the res parameter (short for response) to send the string Hello! to our client
    res.json(animals);
  });

//make our server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  