# Zara Search Agent

A full-stack web app that lets you search for items on Zara.com using natural language. It uses a local LLM (Ollama) to extract the best search keywords from your query and generates a direct Zara search link.

## Features
- Enter a natural language query (e.g., "I want a black dress for a party")
- The app uses Ollama (llama2 model) to extract shopping keywords
- Generates a Zara.com search link with those keywords
- Minimal, modern React UI

## Tech Stack
- **Frontend:** React (TypeScript)
- **Backend:** Express (TypeScript)
- **LLM:** Ollama (llama2 model, runs locally)

## How It Works
1. User enters a query in the frontend
2. Frontend sends the query to the backend `/search` endpoint
3. Backend calls Ollama to extract keywords
4. Backend returns a Zara search link and the keywords
5. Frontend displays the link and keywords

## Local Development

### Prerequisites
- Node.js (v18+ recommended)
- [Ollama](https://ollama.com/) installed and running locally
- `llama2` model pulled (`ollama pull llama2`)

### Setup
1. **Clone the repo:**
   ```sh
   git clone https://github.com/Maitri-13/find-it.git
   cd find-it
   ```
2. **Install dependencies:**
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. **Start Ollama:**
   ```sh
   ollama serve
   ```
4. **Start the backend:**
   ```sh
   cd backend
   npx ts-node src/index.ts
   ```
5. **Start the frontend:**
   ```sh
   cd frontend
   npm start
   ```
6. **Open the app:**
   Go to [http://localhost:3000](http://localhost:3000)

## Deployment Notes
- The backend requires access to an Ollama server (cannot be hosted on Render; must be accessible from the backend)
- Update the backend's Ollama URL if running Ollama on a remote server
- Update the frontend's backend URL for production

## License
MIT 