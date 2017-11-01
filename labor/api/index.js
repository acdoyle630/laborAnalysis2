/*jshint esversion: 6 */
const express = require('express');
const Router  = express.Router();

Router.use('/timecards', require('./Timecards'));


module.exports = Router;