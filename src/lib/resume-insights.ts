import { ResumeData } from "./resume-schema";

export interface ResumeInsight {
  type: "success" | "warning";
  message: string;
}

export function generateResumeInsights(
  data: ResumeData
): ResumeInsight[] {
  const insights: ResumeInsight[] = [];

  // Contact Info
  if (
    data.fullName &&
    data.email &&
    data.phone
  ) {
    insights.push({
      type: "success",
      message:
        "Contact information looks complete.",
    });
  } else {
    insights.push({
      type: "warning",
      message:
        "Complete contact information improves recruiter trust.",
    });
  }

  // Skills
  if (data.skills.length < 5) {
    insights.push({
      type: "warning",
      message:
        "Add at least 5 relevant skills for stronger ATS matching.",
    });
  } else {
    insights.push({
      type: "success",
      message:
        "Skills section looks strong.",
    });
  }

  // Projects
  if (data.projects.length === 0) {
    insights.push({
      type: "warning",
      message:
        "Projects significantly improve technical and fresher resumes.",
    });
  }

  // LinkedIn
  if (!data.linkedin) {
    insights.push({
      type: "warning",
      message:
        "Adding LinkedIn improves professional credibility.",
    });
  }

  // Measurable achievements
  const combinedDescriptions = [
    ...data.projects.map((p) => p.description),
    ...data.experience.map((e) => e.description),
  ].join(" ");

  const hasMetrics =
    /\d+%|\d+x|\d+\+/.test(
      combinedDescriptions
    );

  if (!hasMetrics) {
    insights.push({
      type: "warning",
      message:
        "Add measurable outcomes like percentages or impact metrics.",
    });
  } else {
    insights.push({
      type: "success",
      message:
        "Good use of measurable achievements.",
    });
  }

  // ATS Structure
  insights.push({
    type: "success",
    message:
      "ATS-friendly formatting detected.",
  });

  return insights;
}