import { NextResponse } from "next/server";
import { GoogleGenAI, Type, ThinkingLevel } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { issue } = await request.json();

    if (!issue || typeof issue !== "string" || issue.trim().length < 5) {
      return NextResponse.json(
        { error: "Please describe the issue in more detail." },
        { status: 400 }
      );
    }

    console.time("Gemini request");

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: `
You are the community issue analysis assistant for CommuniNest.

Analyze this community issue:

${issue}

Return practical, concise guidance.

Rules:
- Do not invent facts.
- Classify the issue into a clear general category.
- Choose urgency as exactly Low, Medium, or High.
- Give 2-4 plausible explanations for what may be happening.
- Give 2-4 practical next steps.
- Keep each explanation and action concise.
      `,
      config: {
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.MINIMAL,
        },
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            issueType: {
              type: Type.STRING,
              description: "The general category of the community issue.",
            },
            urgency: {
              type: Type.STRING,
              description: "The urgency level: Low, Medium, or High.",
            },
            whatMayBeHappening: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
              description:
                "Two to four plausible explanations for what may be happening.",
            },
            recommendedNextSteps: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
              description:
                "Two to four practical recommended actions.",
            },
          },
          required: [
            "issueType",
            "urgency",
            "whatMayBeHappening",
            "recommendedNextSteps",
          ],
        },
      },
    });

    console.timeEnd("Gemini request");

    const text = response.text;

    if (!text) {
      throw new Error("Gemini returned an empty response");
    }

    const analysis = JSON.parse(text);

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error("AI analysis error:", error);

    return NextResponse.json(
      {
        error:
          "We couldn't analyze the issue right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}