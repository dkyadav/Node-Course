import express from 'express';
import { check, checkDelete, checkPost, checkPut } from '../controller/index.controller.js';

const indexRouter = express.Router();

indexRouter.get("/health", (req, res) => {
	res.send({ message: "ok", status: 200 });
});

indexRouter.get("/test",check);
indexRouter.post("/test",checkPost);
indexRouter.put("/test",checkPut);
indexRouter.delete("/test",checkDelete);


export default indexRouter;