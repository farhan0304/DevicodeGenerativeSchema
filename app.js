import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.json());

import schemaRoute from "./routes/schemaGenerate.routes.js";

app.get("/",(req,res)=>{
    return res.status(200).json({"message":"Hello from server"});
})

app.use("/api/v1/schema",schemaRoute);



export {app}