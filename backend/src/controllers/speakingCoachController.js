import { GoogleGenerativeAI } from "@google/generative-ai";

const COACH_SYSTEM_PROMPT =
  "You are a friendly English speaking coach. Correct grammar briefly, explain simply, and ask one short follow-up question. Keep replies short and clear for learners.";

export const chatWithSpeakingCoach = async (req, res) => {
  try {
    const { message } = req.body;

    // Validate user message
    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    // Check API key at request time so the server can still start without it
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "Gemini API key is not configured on the server.",
      });
    }

    // Initialize Gemini client lazily
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: COACH_SYSTEM_PROMPT,
    });

    const result = await model.generateContent(message);
    const responseText = result.response.text();

    // Send response to frontend
    return res.status(200).json({
      success: true,
      userMessage: message,
      coachReply: responseText,
    });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Speaking coach AI error:`, error);
    return res.status(500).json({
      success: false,
      message: "Failed to get AI coach reply from Gemini.",
    });
  }
};