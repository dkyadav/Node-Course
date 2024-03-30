const userRoute = require("express").Router();
const { verify_jwt } = require("../controllers/auth.controller");
const { user_add, user_find } = require("../controllers/user.controller");

userRoute.post("/api/v1/user",user_add);

userRoute.post("/api/v1/user/profile", verify_jwt, user_find);

module.exports = {
	userRoute,
};
