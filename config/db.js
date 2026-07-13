const mongoose = require("mongoose");

const connectDB = async () => {

    try {

        await mongoose.connect("mongodb+srv://madhusri7225:madhusri@saride@cluster0.qh3vebu.mongodb.net/madhusri");

        console.log("Database Connected");

    } catch (error) {

        console.log("Database Connection Failed");

    }

}

module.exports = connectDB;
