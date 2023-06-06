const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const Report = db.report;
const Owner = db.owner;
const Pilot = db.pilotprofile;
const Airplane = db.airplaneprofile

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Owner Content.");
};

exports.getAllUser = async (req, res) => {
  const users = await User.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(users);
  }
};

exports.getAllPilot = async (req, res) => {
  const pilots = await Pilot.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(pilots);
  }
};

exports.getAllAirplane = async (req, res) => {
  const airplanes = await Airplane.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(airplanes);
  }
};

exports.getAllOnwer = async (req, res) => {
  const owners = await Owner.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(owners);
  }
};

exports.sendReport = async (req, res) => {
  console.log(req.body);
  const report = new Report({
    selectedAirplane: req.body.selectedAirplane,
    selectedMark: req.body.selectedMark,
    selectedDates: req.body.selectedDates,
    fuelexpenss: req.body.fuelexpenss,
    oilsexpenss: req.body.oilsexpenss,
    serviceexpenss: req.body.serviceexpenss,
    fboexpenss: req.body.fboexpenss,
    formpredata : req.body.formpredata,
    formpostdata: req.body.formpostdata,
  });

  const reportdata = await report.save();

  try {
    if (!req.body) {
      res.send({
        status: false,
        message: "no response",
      });
    } else {
      res.send({
        status: true,
        message: 'OK',
        data: reportdata,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }

}


exports.receiveReportData = async (req, res) => {
  const receivereportdata = await Report.find();
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(receivereportdata);
  }
};

exports.sendReportData =async (req, res) => {
  console.log('param id', req.params.id);

  let collection = await Report.findOne({
    _id: req.params.id
  });

  console.log('result', collection);

  if (!collection) res.send("Not found").status(404);
  else res.send(collection).status(200);
}
  
exports.createOwnerProfile = async (req, res) => {

  const showreport = new Owner({
    firstname: req.body.FirstName,
    lastname: req.body.LastName,
    phonenumber: req.body.PhoneNumber,
    emailaddress: req.body.EmailAddress,
    location: req.body.Location,
    amount: req.body.Amount,
    imagename: req.avatarId,
  });

  const showreportdata = await showreport.save();

  try {
    if (!req.body) {
      res.send({
        status: false,
        message: "no response",
      });
    } else {
      res.send({
        status: true,
        message: 'OK',
        data: showreportdata,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }

};

exports.createPilotProfile = async (req, res) => {
  console.log(req.avatarId);
  console.log(req.body);
  const pilotprofile = new Pilot({
    fullname: req.body.FullName,
    company: req.body.Company,
    phonenumber: req.body.PhoneNumber,
    emailaddress: req.body.EmailAddress,
    imagename: req.avatarId,
  });

  const pilotprofiledata = await pilotprofile.save();

  try {
    if (!req.body) {
      res.send({
        status: false,
        message: "no response",
      });
    } else {
      res.send({
        status: true,
        message: 'OK',
        data: pilotprofiledata,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }

};

exports.createAirplaneProfile = async (req, res) => {
  console.log(req.avatarId);
  console.log(req.body);
  const airplaneprofile = new Airplane({
    airplanename: req.body.AirplaneName,
    airplamemark: req.body.AirplaneMark,
    owner: req.body.Owner,
    pilot: req.body.Pilot,
    imagename: req.avatarId,
  });

  const airplaneprofiledata = await airplaneprofile.save();

  try {
    if (!req.body) {
      res.send({
        status: false,
        message: "no response",
      });
    } else {
      res.send({
        status: true,
        message: 'OK',
        data: airplaneprofiledata,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }

};
