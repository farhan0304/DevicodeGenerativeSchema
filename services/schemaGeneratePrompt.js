import {prompt,jsonSchema} from "./prompts.js";
import { PromptTemplate } from "@langchain/core/prompts";
import { getModelInstance } from "./modelinstance.js";


const langchainGenerative = async (modelType,schemaName,details) =>{
    
    const model = getModelInstance(modelType);

    const schemaTemplate = PromptTemplate.fromTemplate(prompt);
    const schemaPrompt =  await schemaTemplate.invoke({ schemaName,details}); 
    const modelWithStructuredSchema = model.withStructuredOutput(jsonSchema);

    return await modelWithStructuredSchema.invoke(schemaPrompt);
}

export {
    langchainGenerative
}


