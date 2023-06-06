const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.report = require("./report.model");
db.owner = require("./ownerprofilemodel");
db.pilotprofile = require("./pilotprofilemodel");
db.airplaneprofile = require("./airplaneprofilemodel");

db.ROLES = ["owner","pilot","admin"];

module.exports = db;