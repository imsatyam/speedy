const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors');

const jwtRoutes = require('./routes/jwt-route');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/jwt', jwtRoutes);
const port = process.env.PORT || 4201;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
