import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { langchainGenerative } from "../services/schemaGeneratePrompt.js";


const healthCheck = (req,res)=>{
    return res.status(200).json(new ApiResponse(200,"Schema Route is working fine"))
}

const generateSchema = asyncHandler(async (req,res) => {
    const {schemaName,details} = req.body;
    if(!schemaName){
        throw new ApiError(401,"Schema Name is required");
    }
    let schemaDetails;
    if(!details){
        schemaDetails = "Generate Relevant fields and methodList with jwt disabled";
    }else{
        schemaDetails = details;
    }
    const schemaData = await langchainGenerative(schemaName,schemaDetails);
    if(!schemaData){
        throw new ApiError(400,"Something went wrong in getting Schema Data")
    }
    res.status(200).json(new ApiResponse(200,{Schema: schemaData}));
})

export {
    healthCheck,
    generateSchema,
}