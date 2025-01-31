import {openAI_API_key,prompt} from "./apiKey.js";
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";


const langchainGenerative = async () =>{
    const model = new ChatOpenAI({ model: "gpt-4o-mini",temperature: 0.5, apiKey:openAI_API_key});
    const schemaTemplate = PromptTemplate.fromTemplate(prompt);
    return await schemaTemplate.invoke({ schemaName: "FestAtendee",details:"Generate Relevant fields and methodList with jwt disabled" }); 
}

export {
    langchainGenerative
}


