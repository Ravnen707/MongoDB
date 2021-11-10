const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb+srv://Admin:0907@cluster0.uoi6s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;