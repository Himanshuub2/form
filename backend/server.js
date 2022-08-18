import express from "express"
import Routes from "./Routes.js";
import {db,Tasks} from "./db/db.js";
import CORS from "cors";

import bodyParser from "body-parser";


const app = express();
const port = 8000;
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(CORS());

db.sync().then(
    async()=>{
        console.log("db connected fine");
    }
)
app.listen(port,console.log("hello from express"))

app.use("/",Routes);