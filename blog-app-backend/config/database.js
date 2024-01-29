const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB connected successfully"))
    .catch((error) => {
        console.log("DB facing connection issues");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDB;