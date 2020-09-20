
// Create a route that the front-end can request data from. 
//require data
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//initiate express
const express = require('express');

const PORT = process.env.PORT || 3001;

//initiate server
const app = express();

//middleware
//give access to frontside
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//make server listen
app.listen(PORT, () => {console.log(`API server now on port ${PORT}!`);});
