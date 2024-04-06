import express from "express";
import dotenv from "dotenv";
dotenv.config();
import dbconect from './database/connect.js';
dbconect();
import("./database/models/User.js");

import userRoutes from './routes/user.route.js';

const app = express();
app.use(express.json());
app.use(userRoutes);


app.get('/',(req,res)=>res.send('OK'));

app.listen(process.env.PORT, () => {
	console.log(`server running on ${process.env.PORT}`);
});
