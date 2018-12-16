const express = require('express');
const jwtDecode = require('jwt-decode');

const app = express();
const jwtRoutes = express.Router();

jwtRoutes.route('/decode').post(function (req, res) {
  if (!req.body.data) {
    res.status(400).send("Token cannot be null or empty.");
  }
  try {
    res.status(200).json(jwtDecode(req.body.data));
  } catch(err) {
    console.log(err);
    res.status(500).send("unable to decode token! ");
  }
});

module.exports = jwtRoutes;
