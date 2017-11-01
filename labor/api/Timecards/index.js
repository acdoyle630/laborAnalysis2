/*jshint esversion: 6 */

const express = require('express');
const timecards = express.Router();
const db = require('../../models');
const { Timecards } = db;

timecards.post('/', ( req, res ) => {
  console.log(`REQ>BODY: ${req.body.date}`);
  Timecards.create( req.body )
  .then(timecards =>{
    res.json( timecards );
  })
    .catch( err => {
      res.json( err );
    });
});

module.exports = timecards;