const mongoose = require("mongoose");

const AirplaneProfile = mongoose.model(
    "airplanes",
    new mongoose.Schema({
        airplanename: String,
        airplanemark: String,
        owner: String,
        pilot: String,
        imagename: String
    })
);

module.exports = AirplaneProfile;
