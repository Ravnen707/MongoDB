const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  clicks: String,
}, {
collection:"info"

});

module.exports = mongoose.model("Info", InfoSchema);