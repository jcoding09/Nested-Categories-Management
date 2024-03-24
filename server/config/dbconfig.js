require("dotenv").config();
const mongoose = require("mongoose");

//ES7 method to connect with DB
const dbConnect = async () => {
  try {
    const uri = "mongodb://localhost:27017/NESTED_CATEGORIES";

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const conn = await mongoose.connect(uri, options);
    console.log(`MongoDB database Connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB : ${error}`);
  }
};

module.exports = dbConnect;
