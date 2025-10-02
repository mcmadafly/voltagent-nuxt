<script setup lang="ts">
const loading = ref(false)
const input = ref('')
const response = ref('')
const model = ref('gpt-4o')

const onSubmit = async () => {
    if (!input.value.trim()) return
    
    loading.value = true
    try {
        const data = await $fetch('/api/chat', {
            method: 'POST',
            body: {
                message: input.value
            }
        })
        
        response.value = data.response
        input.value = '' // Clear input after successful submission
    } catch (error) {
        console.error('Error generating response:', error)
        response.value = 'Sorry, there was an error processing your request.'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div>
        <UPageSection
            id="features"
            title="Nuxt + Nuxt UI + Voltagent AI"
            description="Supervisor Agent with Sub-Agents. Watch how the supervisor delegates tasks to specialized agents"
        />
        <UContainer class="flex-1 flex max-w-screen-md mx-auto flex-col justify-center gap-4 sm:gap-6 py-8">
                        <!-- Display the response -->
                        <div v-if="response" class="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 class="font-semibold mb-2">Response:</h3>
                <p>{{ response }}</p>
            </div>

            <UChatPrompt
                v-model="input"
                :status="loading ? 'streaming' : 'ready'"
                class="[view-transition-name:chat-prompt]"
                variant="subtle"
                @submit="onSubmit"
            >
                <UChatPromptSubmit color="neutral" />

                <template #footer>
                    <ModelSelect v-model="model" />
                </template>
            </UChatPrompt>
            
        </UContainer>
    </div>
</template>
