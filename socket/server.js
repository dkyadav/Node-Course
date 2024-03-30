const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.serverport || 3555;
// const mongoose = require("mongoose");

// (async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.info('MongoDB has connected successfully.');
//     } catch (error) {
//         console.error('MongoDB connection error :',error);
//     }
// })();

// require("./schemas/user.schema");

app.use(express.json());

// const { mainRoute } = require("./routes/main.routes");
// const { userRoute } = require("./routes/user.routes");
// app.use(mainRoute);
// app.use(userRoute);


app.get("/", (req, res) => {
	res.send({ status: "hello world!!!", code: 200 });
});

app.listen(PORT, () => {
	console.log(`Server is running at port:${PORT}`);
});
