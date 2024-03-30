const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
	name: { type: String, max : [127, "Max Length is 127 characters"] },
	email: { type: String, required: true, unique:true },
	password: { type: String },
    date: { type: Date, default: Date.now },
});

const Users = mongoose.model('users', userSchema);

module.exports={
    Users
}