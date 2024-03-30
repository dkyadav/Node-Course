const mongoose = require("mongoose");
const UserModel = mongoose.model("users");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

async function signin(req, res, next) {
	try {
		const user_res = await UserModel.findOne({
			email: req.body.email,
		});

		if (!user_res) res.status(403).send("username not found!");
		else if (user_res.password != req.body.password)
			res.status(403).send("password incorrect!");
		else {
			const token_generate = jwt.sign(
				{
					email: user_res.email,
					name: user_res.name,
					_id: user_res._id,
				},
				JWT_SECRET,
				{
					expiresIn: 20, //24 hours, in sec, if used under string then milisecs
				}
			);

			console.log(token_generate);

			res.status(200).send({ token: token_generate });
		}

		console.log(user_res);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

async function verify_jwt(req, res, next) {
	let token =
		req.headers["x-access-token"] || req.headers.authorization
			? req.headers.authorization.split(" ")[1]
			: null;

	if (!token) res.status(403).send({ message: "No token sent in header" });
	try {
		const token_verified = jwt.verify(token, JWT_SECRET);
		req._id = token_verified._id;
		console.log("token_verified");
		console.log(token_verified);
		next();
	} catch (error) {
		console.error(error);
		console.log(error.stack)
		res.status(400).send({
			"Auth Error details": error,
		});
	}
}

module.exports = {
	signin,
	verify_jwt,
};
