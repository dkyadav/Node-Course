const { sign_in, verify_jwt } = require("../controllers/auth.controller");
const { user_create, profile } = require("../controllers/user.controller");

const userRoutes = require("express").Router();

userRoutes.get("/api/health", (req, res) => {
	res.send("Health OK");
});

userRoutes.post("/api/createuser", user_create);

userRoutes.post("/api/signin", sign_in);

userRoutes.post("/api/profile", verify_jwt, profile);


module.exports = {
	userRoutes,
};
//exports.default = userRoutes;