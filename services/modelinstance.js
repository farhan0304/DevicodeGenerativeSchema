import { ChatFireworks } from "@langchain/community/chat_models/fireworks";

const modelInstances = {};

function getModelInstance(modelType) {
    const modelKey = String(modelType); 

    if (!modelInstances[modelKey]) {
        modelInstances[modelKey] = new ChatFireworks({
            model: modelKey === "llama3.3"
                ? "accounts/fireworks/models/llama-v3p3-70b-instruct"
                : "accounts/fireworks/models/llama-v3p2-3b-instruct",
            temperature: 0.5
        });
    }

    return modelInstances[modelKey];
}

export {
    getModelInstance
}
