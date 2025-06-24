const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("DB Connected Successfully."))
    .catch( (error) => {
        console.log("DB conntection failure");
        console.error(error);
        process.exit(1);
    });
}