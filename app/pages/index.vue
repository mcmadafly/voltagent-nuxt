<script setup lang="ts">
interface Message {
    id: string
    role: 'user' | 'assistant'
    parts: Array<{
        type: 'text'
        text: string
    }>
}

const loading = ref(false)
const input = ref('')
// const messages = ref<Message[]>([])
const messages = ref([
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
    parts: [
      {
        type: 'text',
        text: 'Hello, how are you?'
      }
    ]
  },
  {
    id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: 'I am doing well, thank you for asking! How can I assist you today?'
      }
    ]
  },
  {
    id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a',
    role: 'user',
    parts: [
      {
        type: 'text',
        text: 'What is the current weather in Tokyo?'
      }
    ]
  },
  {
    id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies. The forecast for the rest of the week shows a slight chance of rain on Thursday, with temperatures gradually rising to 28°C by the weekend. Humidity levels are moderate at around 65%, and wind speeds are light at 8 km/h from the southeast. Air quality is good with an index of 42. The UV index is high at 7, so it's recommended to wear sunscreen if you're planning to spend time outdoors. Sunrise was at 5:24 AM and sunset will be at 6:48 PM, giving Tokyo approximately 13 hours and 24 minutes of daylight today. The moon is currently in its waxing gibbous phase."
      }
    ]
  },
  {
    id: 'c3e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'user',
    parts: [
      {
        type: 'text',
        text: 'Can you recommend some popular tourist attractions in Kyoto?'
      }
    ]
  },
  {
    id: 'd4f5g8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: 'Kyoto is known for its beautiful temples, traditional tea houses, and gardens. Some popular attractions include Kinkaku-ji (Golden Pavilion) with its stunning gold leaf exterior reflecting in the mirror pond, Fushimi Inari Shrine with its thousands of vermilion torii gates winding up the mountainside, Arashiyama Bamboo Grove where towering stalks create an otherworldly atmosphere, Kiyomizu-dera Temple perched on a hillside offering panoramic views of the city, and the historic Gion district where you might spot geisha hurrying to evening appointments through narrow stone-paved streets lined with traditional wooden machiya houses.'
      }
    ]
  }
])

const model = ref('gpt-4o')

const onSubmit = async () => {
    if (!input.value.trim()) return
    
    // Add user message
    const userMessage: Message = {
        id: crypto.randomUUID(),
        role: 'user',
        parts: [
            {
                type: 'text',
                text: input.value
            }
        ]
    }
    messages.value.push(userMessage)
    
    const currentInput = input.value
    input.value = '' // Clear input after adding message
    
    loading.value = true
    try {
        const data = await $fetch('/api/chat', {
            method: 'POST',
            body: {
                message: currentInput
            }
        })
        
        // Add assistant response
        const assistantMessage: Message = {
            id: crypto.randomUUID(),
            role: 'assistant',
            parts: [
                {
                    type: 'text',
                    text: data.response
                }
            ]
        }
        messages.value.push(assistantMessage)
    } catch (error) {
        console.error('Error generating response:', error)
        // Add error message
        const errorMessage: Message = {
            id: crypto.randomUUID(),
            role: 'assistant',
            parts: [
                {
                    type: 'text',
                    text: 'Sorry, there was an error processing your request.'
                }
            ]
        }
        messages.value.push(errorMessage)
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div>
        <UPageHero
            id="features"
            title="Nuxt + Nuxt UI + Voltagent AI"
            description="Watch how the supervisor delegates tasks to specialized agents"
            headline="Supervisor Agent with Sub-Agents."
        />
        <UContainer class="flex-1 flex max-w-screen-md mx-auto flex-col justify-center gap-4 sm:gap-6 py-8 border border-gray-800 rounded-lg">
            <!-- Chat Messages -->
            <UChatMessages
                :messages="messages"
                :status="loading ? 'streaming' : 'ready'"
                auto-scroll-icon="i-lucide-chevron-down"
                :should-scroll-to-bottom="false"
                class="flex-1 min-h-0 overflow-y-auto"
            />

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
