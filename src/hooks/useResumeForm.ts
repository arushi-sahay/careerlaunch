import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  resumeSchema,
  ResumeData,
  defaultResumeData,
} from "@/lib/resume-schema";
import { useCallback, useEffect, useState } from "react";
import { sampleData } from "@/data/sampleData";

export function useResumeForm(professionId: string) {
  const [score, setScore] = useState(0);

  // Load saved resume from localStorage
  const savedResume = localStorage.getItem(
    "careerlaunch-resume"
  );

  const initialData: ResumeData = savedResume
    ? JSON.parse(savedResume)
    : defaultResumeData;

  const form = useForm<ResumeData>({
    resolver: zodResolver(resumeSchema),
    defaultValues: initialData,
  });

  const { watch, reset, setValue } = form;

  const formData = watch();

  const calculateScore = useCallback((data: ResumeData) => {
    let currentScore = 0;

    // Basic info (30 points)
    if (data.fullName.length > 2) currentScore += 10;
    if (
      data.email.length > 5 &&
      data.email.includes("@")
    )
      currentScore += 10;

    if (data.phone.length > 5) currentScore += 10;

    // Links (10 points)
    if (
      data.linkedin &&
      data.linkedin.length > 10
    )
      currentScore += 5;

    if (
      data.portfolio &&
      data.portfolio.length > 10
    )
      currentScore += 5;

    // Sections (60 points)
    if (data.education.length > 0)
      currentScore += 15;

    if (data.skills.length >= 5)
      currentScore += 15;
    else if (data.skills.length > 0)
      currentScore += 5;

    if (data.experience.length > 0)
      currentScore += 15;

    if (data.projects.length > 0)
      currentScore += 10;

    if (
      data.certifications.length > 0 ||
      data.achievements.length > 0
    )
      currentScore += 5;

    return Math.min(100, currentScore);
  }, []);

  // Update score
  useEffect(() => {
    setScore(calculateScore(formData));
  }, [formData, calculateScore]);

  // Auto-save resume
  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem(
        "careerlaunch-resume",
        JSON.stringify(value)
      );
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  // Load sample data
  const loadSampleData = useCallback(() => {
    if (
      professionId &&
      sampleData[professionId]
    ) {
      reset(sampleData[professionId]);
    }
  }, [professionId, reset]);

  return {
    form,
    formData,
    score,
    loadSampleData,
    setValue,
  };
}