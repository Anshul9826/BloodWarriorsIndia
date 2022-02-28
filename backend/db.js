const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://bloodwarriorsindia:PRVmfr6!dgcY9bc@cluster0.tnjam.mongodb.net/bloodwarriorsindia?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo SuccessFully");
  });
};

module.exports = connectToMongo;
