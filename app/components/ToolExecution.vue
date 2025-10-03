<script setup lang="ts">
interface ToolExecutionProps {
    toolName: string;
    status: 'running' | 'completed' | 'error';
    input: Record<string, any>;
    output?: Record<string, any>;
    summary?: string;
}

const props = defineProps<ToolExecutionProps>();

const inputOpen = ref(false);
const outputOpen = ref(false);
</script>

<template>
    <UCard class="w-full">
        <template #header>
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <UIcon name="i-lucide-wrench" class="text-blue-500" />
                    <h3 class="font-semibold text-lg">{{ toolName }}</h3>
                    <UBadge :color="status === 'completed' ? 'success' : status === 'error' ? 'error' : 'info'"
                        variant="soft">
                        {{ status === 'completed' ? 'output-available' : status === 'error' ? 'error' : 'running' }}
                    </UBadge>
                </div>
            </div>
        </template>

        <div class="space-y-4">
            <!-- Input Section -->
            <UCollapsible v-model:open="inputOpen">
                <UButton variant="ghost" color="neutral"
                    class="w-full justify-between p-0 h-auto font-medium text-blue-500 hover:bg-color-transparent cursor-pointer click:bg-color-transparent"
                    trailing-icon="i-lucide-chevron-down" :ui="{
                        trailingIcon: inputOpen ? 'rotate-180 transition-transform duration-200' : 'transition-transform duration-200'
                    }">
                    Input
                </UButton>
                <template #content>
                    <div class="mt-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <pre
                            class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{{ JSON.stringify(input, null, 2) }}</pre>
                    </div>
                </template>
            </UCollapsible>

            <!-- Output Section -->
            <UCollapsible v-if="output" v-model:open="outputOpen">
                <UButton color="neutral" variant="ghost"
                    class="w-full justify-between p-0 h-auto font-medium text-green-500 hover:bg-color-transparent cursor-pointer click:bg-color-transparent"
                    trailing-icon="i-lucide-chevron-down" :ui="{
                        trailingIcon: outputOpen ? 'rotate-180 transition-transform duration-200' : 'transition-transform duration-200'
                    }">
                    Output
                </UButton>
                <template #content>
                    <div class="mt-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <pre
                            class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{{ JSON.stringify(output, null, 2) }}</pre>
                    </div>
                </template>
            </UCollapsible>

            <!-- Step Separator -->
            <USeparator label="→ step" />

            <!-- Summary -->
            <div v-if="summary" class="text-sm text-gray-600 dark:text-gray-400">
                <span v-html="summary"></span>
            </div>
        </div>
    </UCard>
</template>
