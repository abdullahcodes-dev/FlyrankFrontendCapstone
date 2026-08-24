import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ReportPage from "./page";

describe("ReportPage", () => {
  it("keeps the Analyze button disabled until the issue reaches 20 characters", () => {
    render(<ReportPage />);

    const textarea = screen.getByLabelText("What is the issue?");
    const analyzeButton = screen.getByRole("button", {
      name: "Analyze issue",
    });

    expect(analyzeButton).toBeDisabled();

    fireEvent.change(textarea, {
      target: { value: "This is a short issue" },
    });

    expect(analyzeButton).not.toBeDisabled();
  });

  it("displays the AI analysis after a successful request", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        headers: new Headers({
          "content-type": "application/json",
        }),
        json: async () => ({
          analysis: {
            issueType: "Street lighting",
            urgency: "Medium",
            whatMayBeHappening: [
              "The light fixture may be damaged.",
              "There may be an electrical or maintenance issue.",
            ],
            recommendedNextSteps: [
              "Report the affected location to the relevant authority.",
              "Document the issue with a photo if possible.",
            ],
          },
        }),
      })
    );

    render(<ReportPage />);

    const textarea = screen.getByLabelText("What is the issue?");
    const analyzeButton = screen.getByRole("button", {
      name: "Analyze issue",
    });

    fireEvent.change(textarea, {
      target: {
        value:
          "The street light near our community park has been broken for several days.",
      },
    });

    fireEvent.click(analyzeButton);

    expect(screen.getByText("Analyzing...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("CommuniNest AI Analysis")).toBeInTheDocument();
    });

    expect(screen.getByText("Street lighting")).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();

    expect(
      screen.getByText("The light fixture may be damaged.")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Report the affected location to the relevant authority."
      )
    ).toBeInTheDocument();
  });

  it("shows an error message when the AI request fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        headers: new Headers({
          "content-type": "application/json",
        }),
        json: async () => ({
          error:
            "We couldn't analyze the issue right now. Please try again later.",
        }),
      })
    );

    render(<ReportPage />);

    const textarea = screen.getByLabelText("What is the issue?");
    const analyzeButton = screen.getByRole("button", {
      name: "Analyze issue",
    });

    fireEvent.change(textarea, {
      target: {
        value:
          "The street lights near our community park have been broken for several days.",
      },
    });

    fireEvent.click(analyzeButton);

    await waitFor(() => {
      expect(screen.getByText("Analysis failed")).toBeInTheDocument();
    });

    expect(
      screen.getByText(
        "We couldn't analyze the issue right now. Please try again later."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Try again" })
    ).toBeInTheDocument();
  });
});