/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();


module.exports = function(sequelize, DataTypes) {
  var Timecards = sequelize.define("Timecards", {

    employeeName : {
     type: DataTypes.STRING,
     allowNull:false
   },
    jobCode : {
     type: DataTypes.STRING,
     allowNull:false
   },
    storeNumber : {
     type: DataTypes.SMALLINT,
     allowNull:false
   },
    date: {
     type: DataTypes.STRING,
     allowNull:false
   },
    inTime : {
     type: DataTypes.STRING,
     allowNull:false
   },
    outTime : {
     type: DataTypes.STRING,
     allowNull:true
   }

  });

  return Timecards;
};