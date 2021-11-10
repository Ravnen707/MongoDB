const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  clicks: String,
});

module.exports = mongoose.model("Clicks", StatsSchema);