const mongoose = require("mongoose");

const OwnerProfile = mongoose.model(
    "owners",
    new mongoose.Schema({
        firstname: String,
        lastname: String,
        phonenumber: String,
        emailaddress: String,
        location: String,
        amount: String,
        imagename: String
    })
);

module.exports = OwnerProfile;
