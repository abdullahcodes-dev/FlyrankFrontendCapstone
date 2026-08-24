"use client";

import { useState } from "react";

type Analysis = {
  issueType?: string;
  urgency?: string;
  whatMayBeHappening?: string[];
  recommendedNextSteps?: string[];
};

export default function ReportPage() {
  const [issue, setIssue] = useState("");
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAnalyze() {
    if (issue.trim().length < 20 || loading) return;

    setLoading(true);
    setError("");
    setAnalysis(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ issue }),
      });

      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        throw new Error(
          "The analysis service returned an unexpected response. Please try again."
        );
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      if (!data.analysis || typeof data.analysis !== "object") {
        throw new Error(
          "The analysis service returned an unexpected result. Please try again."
        );
      }

      setAnalysis(data.analysis);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to analyze the issue."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setIssue("");
    setAnalysis(null);
    setError("");
  }

  const characterCount = issue.length;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Page introduction */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Report an issue
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">
            Tell us what is happening.
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
            Describe a problem in your community and CommuniNest will help you
            understand it and decide what to do next.
          </p>
        </div>

        {/* Report form */}
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <label
            htmlFor="issue"
            className="text-base font-semibold text-slate-900"
          >
            What is the issue?
          </label>

          <p className="mt-1 text-sm text-slate-500">
            Include what happened, where it happened, and anything else that
            might help.
          </p>

          <textarea
            id="issue"
            value={issue}
            onChange={(e) => {
              setIssue(e.target.value);
              setError("");
            }}
            placeholder="Example: The street lights near our community park have been broken for three days..."
            rows={7}
            disabled={loading}
            aria-describedby="issue-help"
            className="mt-5 w-full rounded-2xl border border-slate-300 px-4 py-4 text-base text-slate-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-slate-50"
          />

          <div
            id="issue-help"
            className="mt-2 flex items-center justify-between text-xs text-slate-400"
          >
            <span>
              Please describe the issue in at least 20 characters.
            </span>

            <span>{characterCount} characters</span>
          </div>

          <button
            type="button"
            onClick={handleAnalyze}
            disabled={loading || issue.trim().length < 20}
            className="mt-6 inline-flex min-w-40 items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <span
                  className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                  aria-hidden="true"
                />
                Analyzing...
              </>
            ) : (
              "Analyze issue"
            )}
          </button>

          {/* Loading message */}
          {loading && (
            <div
              className="mt-6 rounded-xl border border-green-100 bg-green-50 p-5"
              role="status"
              aria-live="polite"
            >
              <p className="font-semibold text-slate-900">
                CommuniNest is analyzing your issue
              </p>

              <p className="mt-1 text-sm text-slate-600">
                This may take a few seconds. We are identifying the issue type,
                estimating urgency, and preparing practical next steps.
              </p>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div
              role="alert"
              aria-live="assertive"
              className="mt-6 rounded-xl border border-red-200 bg-red-50 p-5 text-red-800"
            >
              <p className="font-semibold">Analysis failed</p>

              <p className="mt-1 text-sm">{error}</p>

              <button
                type="button"
                onClick={handleAnalyze}
                className="mt-4 rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
              >
                Try again
              </button>
            </div>
          )}

          {/* Submitted issue */}
          {analysis && !loading && (
            <div className="mt-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Your reported issue
                </p>

                <p className="mt-3 leading-7 text-slate-700">{issue}</p>
              </div>

              {/* AI analysis */}
              <div
                className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-6"
                aria-live="polite"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-xl font-bold text-slate-900">
                    CommuniNest AI Analysis
                  </h2>

                  <span className="inline-flex w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    AI-generated guidance
                  </span>
                </div>

                {analysis.issueType && (
                  <div className="mt-6">
                    <h3 className="font-semibold text-slate-900">
                      1. Issue type
                    </h3>

                    <p className="mt-2 text-slate-700">
                      {analysis.issueType}
                    </p>
                  </div>
                )}

                {analysis.urgency && (
                  <div className="mt-6">
                    <h3 className="font-semibold text-slate-900">
                      2. Urgency
                    </h3>

                    <p className="mt-2 text-slate-700">
                      {analysis.urgency}
                    </p>
                  </div>
                )}

                {analysis.whatMayBeHappening &&
                  analysis.whatMayBeHappening.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-semibold text-slate-900">
                        3. What may be happening
                      </h3>

                      <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700">
                        {analysis.whatMayBeHappening.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                {analysis.recommendedNextSteps &&
                  analysis.recommendedNextSteps.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-semibold text-slate-900">
                        4. Recommended next steps
                      </h3>

                      <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700">
                        {analysis.recommendedNextSteps.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>

              {/* Reset */}
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Analyze another issue
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}