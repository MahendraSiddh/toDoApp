const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connection established");
    })
    .catch((error) => {
        console.error("DB connection unsuccessful:", error);
        process.exit(1); // Exits the process with a failure code
    });
};


module.exports= dbConnect;