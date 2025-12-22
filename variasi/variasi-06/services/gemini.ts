import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Bunda AI", a friendly and empathetic assistant for the "Masterclass NotebookLM: Solusi Ibu Pintar Era Digital 2026".
Your target audience is Indonesian mothers ("Ibu-ibu") who want to be more productive and digitally literate.

Key Course Information to reference:
- Price: Rp 129.000 (Discounted from Rp 499.000).
- Date: Saturday, 27 Dec 2025.
- Time: 19.00 WIB.
- Platform: Live Zoom.
- Benefit 1: Turn school materials (Kurikulum Merdeka) into Podcasts (Audio Overviews) so moms can listen while cooking.
- Benefit 2: Verify health information from WhatsApp groups to avoid hoaxes.
- Benefit 3: Create quizzes/flashcards for kids in 2 minutes.
- Guarantee: 100% Money Back Guarantee if not satisfied in the first 60 mins.
- Bonus: Cheat Sheet PDF + E-Certificate.

Tone: Warm, encouraging, empathetic, slightly informal but professional (use "Bunda" or "Ibu" to address the user).
Language: Indonesian (Bahasa Indonesia).

If the user asks about registering, guide them to the registration form at the bottom of the page.
`;

export const streamGeminiResponse = async (
  history: { role: string; text: string }[],
  onChunk: (text: string) => void
): Promise<string> => {
  if (!API_KEY) {
    const errorMsg = "Maaf Bunda, sistem AI sedang offline (Missing API Key).";
    onChunk(errorMsg);
    return errorMsg;
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const lastUserMessage = history[history.length - 1].text;
    const resultStream = await chat.sendMessageStream({ message: lastUserMessage });

    let fullText = '';
    for await (const chunk of resultStream) {
      const c = chunk as GenerateContentResponse; // Type assertion based on SDK behavior
      const text = c.text;
      if (text) {
        fullText += text;
        onChunk(fullText);
      }
    }
    return fullText;
  } catch (error) {
    console.error("Gemini API Error:", error);
    const errorMessage = "Maaf Bunda, saya sedang mengalami gangguan sinyal. Boleh diulangi pertanyaannya?";
    onChunk(errorMessage);
    return errorMessage;
  }
};
