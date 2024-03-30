const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
//const UserModel = mongoose.model("users");

const sign_in = async (req, res, next) => {
	try {
		const user_res = await mongoose
			.model("users")
			.findOne({ email: req.body.email });

		console.log(user_res);

		// const user_res1 = await UserModel.findOne({
		// 	email: req.body.email,
		// });
		// console.log(user_res1);

		if (!user_res) res.status(400).send("Email not found");
		else if (user_res.password != req.body.password)
			res.status(400).send("Password not matching");
		else {
			req._id = user_res._id;

			const jwt_ret = jwt.sign(
				{
					email: req.body.email,
					_id: req._id,
					name: user_res.name,
				},
				process.env.JWT_SECRET_KEY,
				{
					expiresIn: 20,
				}
			);
			const jwt_refresh = jwt.sign(
				{
					_id: req._id,
				},
				process.env.JWT_SECRET_KEY
			);
			res.send({ token: jwt_ret, refresh_token: jwt_refresh });

			//next();
		}

		//console.log(user_res);
	} catch (error) {
		console.error(error);
	}
};

const verify_jwt = async (req, res, next) => {
	const token =
		req.headers["x-access-token"] || req.headers.authorization
			? req.headers.authorization.split(" ")[1]
			: null;

	if (!token) res.status(400).send("Token is required in header");
	else {
		try {
			const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
			//console.log(verified);
			req._id = verified._id;
			next();
		} catch (error) {
            res.status(500).send({"Errorname": error.name,"Errormessage": error.message});
        }
	}
};

module.exports = {
	sign_in,
	verify_jwt,
};
