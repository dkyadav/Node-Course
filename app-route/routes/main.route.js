import express from "express";
import HCC, { addCurTime, finalCheck } from "../controller/main.controller.js";

const mainrouter = express.Router();

mainrouter.get("/health", (req, res) => {
	res.send({ health: "OK" });
});

mainrouter.post("/health", HCC);

mainrouter.put("/health", addCurTime, finalCheck);

export default mainrouter;
// module.exports = {
//     mainrouter,
// }
