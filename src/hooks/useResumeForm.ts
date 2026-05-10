import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resumeSchema, ResumeData, defaultResumeData } from "@/lib/resume-schema";
import { useCallback, useEffect, useState } from "react";
import { sampleData } from "@/data/sampleData";

export function useResumeForm(professionId: string) {
  const [score, setScore] = useState(0);

  const form = useForm<ResumeData>({
    resolver: zodResolver(resumeSchema),
    defaultValues: defaultResumeData,
  });

  const { watch, reset, setValue } = form;
  const formData = watch();

  const calculateScore = useCallback((data: ResumeData) => {
    let currentScore = 0;
    
    // Basic info (30 points)
    if (data.fullName.length > 2) currentScore += 10;
    if (data.email.length > 5 && data.email.includes("@")) currentScore += 10;
    if (data.phone.length > 5) currentScore += 10;
    
    // Links (10 points)
    if (data.linkedin && data.linkedin.length > 10) currentScore += 5;
    if (data.portfolio && data.portfolio.length > 10) currentScore += 5;
    
    // Sections (60 points)
    if (data.education.length > 0) currentScore += 15;
    if (data.skills.length >= 5) currentScore += 15;
    else if (data.skills.length > 0) currentScore += 5;
    
    if (data.experience.length > 0) currentScore += 15;
    if (data.projects.length > 0) currentScore += 10;
    if (data.certifications.length > 0 || data.achievements.length > 0) currentScore += 5;
    
    return Math.min(100, currentScore);
  }, []);

  useEffect(() => {
    setScore(calculateScore(formData));
  }, [formData, calculateScore]);

  const loadSampleData = useCallback(() => {
    if (professionId && sampleData[professionId]) {
      reset(sampleData[professionId]);
    }
  }, [professionId, reset]);

  return {
    form,
    formData,
    score,
    loadSampleData,
    setValue
  };
}
