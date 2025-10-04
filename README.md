# VoltAgent + Nuxt UI Demo

A demonstration project showcasing the integration of **VoltAgent** (AI agent framework) with **Nuxt UI** to create an intelligent chat interface with tool execution capabilities.

## 🚀 What This Project Does

This project demonstrates a **Supervisor Agent** that delegates tasks to specialized sub-agents:

- **🔤 UppercaseAgent**: Converts text to uppercase
- **📊 WordCountAgent**: Analyzes and counts words in text
- **📖 StoryWriterAgent**: Generates creative 50-word stories

The UI displays real-time tool execution results with:
- Streaming chat interface
- Tool execution status indicators
- JSON output display for each agent
- User-friendly summaries of agent actions

## 🛠️ Tech Stack

- **[Nuxt 4](https://nuxt.com/)** - Full-stack Vue.js framework
- **[Nuxt UI](https://ui.nuxt.com/)** - Beautiful UI components for Nuxt
- **[VoltAgent](https://voltagent.dev/)** - TypeScript AI agent framework
- **[OpenAI](https://platform.openai.com/)** - LLM provider (GPT-4o-mini)

## 📚 Documentation

### Framework Documentation
- **[Nuxt Documentation](https://nuxt.com/docs)** - Learn Nuxt framework
- **[Nuxt UI Documentation](https://ui.nuxt.com/)** - UI component library
- **[VoltAgent Documentation](https://voltagent.dev/)** - AI agent framework

### Key Features Demonstrated
- **Agent Orchestration**: Supervisor agent coordinating multiple sub-agents
- **Tool Execution**: Real-time tool calling and result display
- **Streaming Responses**: Live chat interface with streaming AI responses
- **Modern UI**: Beautiful, responsive interface with dark/light mode

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ or Bun
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mcmadafly/voltagent-nuxt.git
   cd voltagent-nuxt
   ```

2. **Install dependencies**
   ```bash
   # Using bun (recommended)
   bun install
   
   # Or using npm
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your OpenAI API key to `.env`:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the development server**
   ```bash
   bun dev
   # or npm run dev
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - VoltAgent Server: http://localhost:3141
   - API Documentation: http://localhost:3141/ui

## 🎯 Usage

1. **Start a conversation**: Type any text in the chat input
2. **Watch the magic**: The supervisor agent will automatically:
   - Convert your text to uppercase
   - Count and analyze the words
   - Generate a creative story based on your input
3. **Explore results**: Expand the tool execution cards to see detailed JSON outputs

## 🏗️ Project Structure

```
voltagent-nuxt/
├── app/
│   ├── components/          # Vue components
│   │   └── ToolExecution.vue # Tool result display
│   ├── pages/
│   │   └── index.vue        # Main chat interface
│   └── app.vue              # App layout with header/footer
├── server/
│   └── api/
│       └── chat.post.ts     # Chat API endpoint
├── voltagent/
│   ├── index.ts             # Agent definitions and tools
│   └── memory.ts            # Shared memory configuration
└── README.md
```

## 🔧 Development

### Available Scripts

```bash
# Development server
bun dev

# Build for production
bun build

# Preview production build
bun preview

# Type checking
bun run type-check

# Linting
bun run lint
```

### Adding New Agents

1. **Define tools** in `voltagent/index.ts`
2. **Create agents** with specific instructions
3. **Add to supervisor** agent's tool list
4. **Update UI parsing** in `app/pages/index.vue`

## 🚀 Deployment

This project can be deployed to any platform that supports Node.js:

- **Vercel**: Zero-config deployment
- **Netlify**: Git-based deployment
- **Railway**: Simple container deployment
- **Docker**: Containerized deployment

See [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment) for more details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **[VoltAgent](https://voltagent.dev/)** for the amazing AI agent framework
- **[Nuxt](https://nuxt.com/)** for the powerful Vue.js framework
- **[Nuxt UI](https://ui.nuxt.com/)** for the beautiful component library
- **[OpenAI](https://openai.com/)** for the language models

---

**Star this repository** if you find it helpful! ⭐