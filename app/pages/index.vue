<template>
    <div>
        <UPageSection
            id="features"
            title="Nuxt + Nuxt UI + Voltagent AI"
            description="Supervisor Agent with Sub-Agents. Watch how the supervisor delegates tasks to specialized agents"
        />
        <UContainer class="flex-1 flex max-w-screen-md mx-auto flex-col justify-center gap-4 sm:gap-6 py-8">
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
