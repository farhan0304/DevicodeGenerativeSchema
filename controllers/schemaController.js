import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateSchema = asyncHandler(async (req,res) => {
    res.status(200).json(new ApiResponse(200,"Schema Generated Successfully"))
})

export {
    generateSchema
}