const mongoose = require("mongoose");

require("dotend").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB connection is successful"))
    .catch((error) => {
        console.log("Error has occur in connection DB");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;