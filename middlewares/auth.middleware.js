import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const jwtVerify = asyncHandler(async(req, _, next) => {
    try {
        const authToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        
        if (!authToken) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET);
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
    
})