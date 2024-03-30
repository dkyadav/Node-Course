const mongoose = require("mongoose");
const UserModel = mongoose.model("users");

const user_add = async (req,res,) => {
		
	const userdata = new UserModel(req.body);

	try {
		const add_ret = await userdata.save();
		res.send("User Added");
	} catch (error) {
		console.error(error);
        res.status(400).send(error.message);
	}
};

const user_find = async (req,res) => {
		
    console.log('in user find');
    
	const user_res = await UserModel.findOne({
        _id: req._id,
    });

	try {
		//const add_ret = await userdata.save();
		res.send(user_res);
	} catch (error) {
		console.error(error);
        res.status(400).send(error.message);
	}
};

module.exports = {
	user_add,
    user_find
};
