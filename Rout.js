import express from "express";
import { Adduser } from "./Adduser.js";
import { Getuser } from "./Getuser.js";
import { Getusers } from "./Getusers.js";
import { Updateuser } from "./Updateuser.js";

const router = express.Router();

router.get('/users' , Getusers)
router.get('/update/:id' , Updateuser)
router.get('/add' , Adduser);
router.get('/user/:id' , Getuser)

export default router;