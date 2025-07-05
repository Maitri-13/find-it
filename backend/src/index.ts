import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

async function callOllama(query: string): Promise<string> {
  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama2',
      prompt: `You are a shopping assistant. Given this user query, extract the best search keywords for Zara.com: "${query}". Respond with only the keywords, nothing else.`,
      stream: false
    });
    // Ollama returns { response: string, ... }
    return response.data.response.trim();
  } catch (error) {
    console.error('Error calling Ollama:', error);
    return query; // fallback to original query
  }
}

app.post('/search', async (req: express.Request, res: express.Response) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }
  // Call Ollama to get refined search keywords
  const keywords = await callOllama(query);
  // Use keywords to build Zara search link
  const zaraLink = `https://www.zara.com/search?q=${encodeURIComponent(keywords)}`;
  res.json({ links: [zaraLink], keywords });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 