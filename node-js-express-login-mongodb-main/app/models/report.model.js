const mongoose = require("mongoose");

const Report = mongoose.model(
    "Report",
    new mongoose.Schema({
        selectedAirplane: {
            label:String, 
            value:String,
        },
        selectedMark: {
            label:String,
            value:String,
        },
        selectedDates: Array,
        fuelexpenss: String,
        oilsexpenss: String,
        serviceexpenss: String,
        fboexpenss: String,
        formpredata: {
            hobbs: Number,
            tach: Number,
            heates: Number,
            fuelleft: Number,
            fuelright: Number,
            oilsleft: Number,
            oilsright: Number,
        },
        formpostdata: {
            posthobbstime: Number,
            posttachtime: Number,
            postheatetime: Number,
            postfuelleft: Number,
            postfuelright: Number,
            postoilsleft: Number,
            postoilsright: Number,
        },
    })
);

module.exports = Report;