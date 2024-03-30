const mongoose = require("mongoose");

const user_create = async (req, res, next) => {
	try {
		const UserModel = mongoose.model("users");
		const userdata = new UserModel(req.body);
		const add_ret = await userdata.save();
		console.log(add_ret);

		res.send("user created successfully!");
	} catch (error) {
		console.error(error);
		res.status(500).send(error.message);
	}
};

const profile = async (req, res) => {
	try {
		const user_profile = await mongoose
			.model("users")
			.findById({ _id: req._id });
		console.log(user_profile);
		res.send(user_profile);
	} catch (error) {
        console.log(error);
        res.status(500).send({"Errorname": error.name,"Errormessage": error.message});
    }
};

module.exports = {
	user_create,
	profile,
};
