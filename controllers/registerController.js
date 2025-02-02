import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"

const generateAccessToken = (req,res) => {
    const {password} = req.body;
    if(!password){
        throw new ApiError(400,"Password is required Field")
    }

    const passwd = String(password);
    const myPassword = String(process.env.TOKKEN_SECRET);
    if(passwd !== myPassword){
        throw new ApiError(401,"Password is not correct")
    }
    const authToken = jwt.sign({
        id:"Auth Token"
    },process.env.JWT_SECRET);

    if(!authToken){
        throw new ApiError(401,"Something went wrong in generating auth token")
    }

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    }
    return res.status(200)
    .cookie("accessToken",authToken,options)
    .json( new ApiResponse(200,
        {
            message: "user is logged in successfully"
        }
    ) );
}


const logoutUser = (req,res)=>{

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
}

export {
    generateAccessToken,
    logoutUser
}
