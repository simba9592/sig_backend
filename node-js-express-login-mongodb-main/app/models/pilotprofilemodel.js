const mongoose = require("mongoose");

const PilotProfile = mongoose.model(
    "Pilotprofile",
    new mongoose.Schema({
        fullname: String,
        company: String,
        phonenumber: String,
        emailaddress: String,
        imagename: String
    })
);

module.exports = PilotProfile;