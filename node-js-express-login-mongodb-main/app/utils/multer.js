const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { fileURLToPath } = require("url");

const { dirname } = path;

// Config name file and destination
const storageUserAvatar = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/avatars')
  },
  filename: function (req, file, cb) {
    console.log(file);
    const avatarId = uuidv4();
    const fileName = `${avatarId}.${file.originalname.split('.')[1]}`;
    req.avatarId = fileName;
    cb(null, fileName)
  }

});

const storagePilotAvatar = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/pilotavatars')
  },
  filename: function (req, file, cb) {
    console.log(file);
    const avatarId = uuidv4();
    const fileName = `${avatarId}.${file.originalname.split('.')[1]}`;
    req.avatarId = fileName;
    cb(null, fileName)
  }

});

const storageAirplaneAvatar = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/airplaneimages')
  },
  filename: function (req, file, cb) {
    console.log(file);
    const avatarId = uuidv4();
    const fileName = `${avatarId}.${file.originalname.split('.')[1]}`;
    req.avatarId = fileName;
    cb(null, fileName)
  }

});

exports.uploadUserAvatar = multer({
  storage: storageUserAvatar
});

exports.uploadPilotAvatar = multer({
  storage: storagePilotAvatar
});

exports.uploadAirplaneAvatar = multer({
  storage: storageAirplaneAvatar
});
