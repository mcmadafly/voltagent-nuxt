import { Memory, InMemoryStorageAdapter } from "@voltagent/core";

// Shared memory instance for all agents
export const sharedMemory = new Memory({
    storage: new InMemoryStorageAdapter({
        storageLimit: 100,
    }),
});

