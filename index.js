import express from "express";
import router from "./Rout.js";
const port = process.env.PORT || 3000

const exp = express();
exp.use(express.json({ extended : true }))

exp.use('/' , router );

exp.listen(3000)