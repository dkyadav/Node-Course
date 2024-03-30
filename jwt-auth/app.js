const { json } = require("express");
const express = require("express");
const app = express();
require("dotenv").config({ path: "./env_files/.env" });
//require("dotenv").config();
const mongoose = require("mongoose");

const server_port = process.env.SERVER_PORT || 3660;

(async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.info(`Mongo db connected!`);
	} catch (error) {
		console.error(error);
	}
})();
require("./schemas/user.schema");

app.use(express.json());

//const {userRoutes} = require("./routes/user.routes");
//app.use(userRoutes);

app.use(require("./routes/user.routes").userRoutes);

app.get("/", (req, res) => {
	res.send("Ok 200");
});



app.listen(server_port, () => {
	console.log(`server running on port: ${server_port}`);
});
