import { Agent } from "@voltagent/core";
import { openai } from "@ai-sdk/openai";
import { Memory, InMemoryStorageAdapter } from "@voltagent/core";

// Create agent on server side where Node.js APIs are available
const voltagentAgent = new Agent({
    name: "My Assistant",
    instructions: "A helpful and friendly assistant that can answer questions clearly and concisely.",
    model: openai("gpt-4o"),
    memory: new Memory({
        storage: new InMemoryStorageAdapter({
            storageLimit: 100,
        }),
    }),
});

export default defineEventHandler(async (event) => {
    try {
        const { message } = await readBody(event);
        
        if (!message || typeof message !== 'string') {
            throw createError({
                statusCode: 400,
                statusMessage: 'Message is required'
            });
        }

        const result = await voltagentAgent.generateText(message);
        
        return {
            success: true,
            response: result.text
        };
    } catch (error) {
        console.error('Error generating response:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Error generating response'
        });
    }
});
