import {application, Router} from "express";
import express from "express";
import {addUser,getUser} from "./controller.js";
const router = express.Router();



router.post("/add",addUser);
router.get("/all",getUser);

export default router;