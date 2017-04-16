let mongoose = require("mongoose");
let moment = require("moment");
mongoose.connect("mongodb://127.0.0.1/message");
exports.Message = mongoose.model("Message", new mongoose.Schema({
    username: String,
    content: String,
    createAt: {
        type: Date, default: Date.now
    }
}));