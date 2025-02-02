import {prompt,jsonSchema} from "./prompts.js";
import { PromptTemplate } from "@langchain/core/prompts";
import { ChatFireworks } from "@langchain/community/chat_models/fireworks";


const langchainGenerative = async (schemaName,details) =>{

    const model = new ChatFireworks({
        model: "accounts/fireworks/models/llama-v3p2-3b-instruct",
        temperature: 0.5
      });

    const schemaTemplate = PromptTemplate.fromTemplate(prompt);
    const schemaPrompt =  await schemaTemplate.invoke({ schemaName,details}); 
    const modelWithStructuredSchema = model.withStructuredOutput(jsonSchema);

    return await modelWithStructuredSchema.invoke(schemaPrompt);
}

export {
    langchainGenerative
}


