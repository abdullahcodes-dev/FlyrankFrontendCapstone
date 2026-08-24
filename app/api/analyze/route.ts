import { NextResponse } from "next/server";
import { GoogleGenAI, Type, ThinkingLevel } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const MIN_ISSUE_LENGTH = 20;
const MAX_ISSUE_LENGTH = 2000;

function isValidAnalysis(value: unknown) {
  if (!value || typeof value !== "object") {
    return false;
  }

  const analysis = value as Record<string, unknown>;

  const validUrgency =
    analysis.urgency === "Low" ||
    analysis.urgency === "Medium" ||
    analysis.urgency === "High";

  const validIssueType =
    typeof analysis.issueType === "string" &&
    analysis.issueType.trim().length > 0;

  const validExplanations =
    Array.isArray(analysis.whatMayBeHappening) &&
    analysis.whatMayBeHappening.length >= 2 &&
    analysis.whatMayBeHappening.length <= 4 &&
    analysis.whatMayBeHappening.every(
      (item) => typeof item === "string" && item.trim().length > 0
    );

  const validNextSteps =
    Array.isArray(analysis.recommendedNextSteps) &&
    analysis.recommendedNextSteps.length >= 2 &&
    analysis.recommendedNextSteps.length <= 4 &&
    analysis.recommendedNextSteps.every(
      (item) => typeof item === "string" && item.trim().length > 0
    );

  return (
    validIssueType &&
    validUrgency &&
    validExplanations &&
    validNextSteps
  );
}

export async function POST(request: Request) {
  try {
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request. Please try again." },
        { status: 400 }
      );
    }

    const issue =
      body &&
      typeof body === "object" &&
      "issue" in body &&
      typeof body.issue === "string"
        ? body.issue
        : null;

    const trimmedIssue = issue?.trim() ?? "";

    if (trimmedIssue.length < MIN_ISSUE_LENGTH) {
      return NextResponse.json(
        {
          error: `Please describe the issue in at least ${MIN_ISSUE_LENGTH} characters.`,
        },
        { status: 400 }
      );
    }

    if (trimmedIssue.length > MAX_ISSUE_LENGTH) {
      return NextResponse.json(
        {
          error: `Please keep the issue description under ${MAX_ISSUE_LENGTH} characters.`,
        },
        { status: 400 }
      );
    }

    console.time("Gemini request");

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: `
You are the community issue analysis assistant for CommuniNest.

Analyze this community issue:

${trimmedIssue}

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
              enum: ["Low", "Medium", "High"],
              description: "The urgency level of the community issue.",
            },
            whatMayBeHappening: {
              type: Type.ARRAY,
              minItems: 2,
              maxItems: 4,
              items: {
                type: Type.STRING,
              },
              description:
                "Two to four plausible explanations for what may be happening.",
            },
            recommendedNextSteps: {
              type: Type.ARRAY,
              minItems: 2,
              maxItems: 4,
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

    const text = response.text?.trim();

    if (!text) {
      throw new Error("Gemini returned an empty response");
    }

    let analysis: unknown;

    try {
      analysis = JSON.parse(text);
    } catch {
      throw new Error("Gemini returned invalid JSON");
    }

    if (!isValidAnalysis(analysis)) {
      throw new Error("Gemini returned an invalid analysis structure");
    }

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