import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key exists to avoid immediate errors on load if missing
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const summarizeLegalConcept = async (query: string): Promise<string> => {
  if (!ai) {
    return "API Key is missing. Please configure the environment variable to use the AI demo.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a helpful legal research assistant using NotebookLM principles. 
      Briefly explain the following legal concept or query in the context of Indonesian Law (or general international law if applicable), 
      keeping it simple for a lawyer to review. 
      Query: "${query}"
      
      Format the output with a simulated inline citation [1] at the end of key sentences to mimic NotebookLM's style.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on this simple task
      }
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi.";
  }
};