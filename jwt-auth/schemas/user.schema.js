const mongoose = require("mongoose");

//const schema = mongoose.Schema;

const Users = mongoose.model(
	"users",
	new mongoose.Schema({
		name: { type: String, max: [127, "Max Length is 127 characters"] },
		email: { type: String, required: true, unique: true },
		password: { type: String },
		date: { type: Date, default: Date.now },
	})
);

module.exports = {
	Users,
};
