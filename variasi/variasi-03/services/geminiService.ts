import { GoogleGenAI } from "@google/genai";

const WEBINAR_CONTEXT = `
Event: Exclusive Webinar: AI for Medical & Clinical Research
Topic: NotebookLM & Gemini 3 for Medical Data Synthesis
Date: Saturday, 27 Dec 2025 | 19.00 WIB
Price: Rp 129.000 (Discounted from Rp 499.000)
Platform: Zoom Meeting
Target Audience: Clinical Researchers, Doctors, Nurses, Medical Data Managers, Medical Students.

Key Problems Solved:
1. Information Deluge (Too much unorganized data).
2. AI Hallucination risks in medicine.
3. Slow Database Lock processes.
4. Patient Privacy concerns.

Solution Features:
- Grounded Q&A: AI answers only from uploaded docs.
- Auto Data Tables: Convert clinical PDFs to structured tables.
- Audio Deep Dive: Turn medical articles into podcasts.

Guarantee: 100% Money Back Guarantee if not satisfied in the first 60 minutes.

Speaker: Health Data Specialist & Clinical AI Researcher.
`;

let aiClient: GoogleGenAI | null = null;

export const getAIClient = (): GoogleGenAI => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const ai = getAIClient();
    // Using gemini-3-flash-preview for fast, reasoning-capable text tasks
    const modelId = "gemini-3-flash-preview"; 
    
    const response = await ai.models.generateContent({
      model: modelId,
      contents: message,
      config: {
        systemInstruction: `You are a helpful and persuasive AI assistant for a medical webinar registration page. 
        Your goal is to answer questions about the webinar based on the following context. 
        Keep answers concise (under 50 words) and professional yet encouraging.
        If the user asks something outside this context, politely steer them back to the webinar benefits.
        
        CONTEXT:
        ${WEBINAR_CONTEXT}`,
        temperature: 0.7,
      },
    });

    return response.text || "Maaf, saya tidak dapat memproses pertanyaan tersebut saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, terjadi kesalahan pada sistem AI. Silakan coba lagi nanti.";
  }
};
