<template>
    <USelect
        v-model="selectedModel"
        :options="modelOptions"
        placeholder="Select model"
        size="sm"
        class="w-48"
    />
</template>

<script setup lang="ts">
interface ModelOption {
    label: string
    value: string
}

const modelOptions: ModelOption[] = [
    { label: 'GPT-4o', value: 'gpt-4o' },
    { label: 'GPT-4', value: 'gpt-4' },
    { label: 'GPT-3.5 Turbo', value: 'gpt-3.5-turbo' }
]

const selectedModel = defineModel<string>({ required: true })
</script>
