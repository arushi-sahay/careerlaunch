import { z } from "zod";

export const resumeSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  linkedin: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  portfolio: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  education: z.array(z.object({
    id: z.string(),
    institution: z.string(),
    degree: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    gpa: z.string().optional()
  })),
  skills: z.array(z.object({
    id: z.string(),
    name: z.string()
  })),
  projects: z.array(z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    technologies: z.string(),
    link: z.string().optional()
  })),
  experience: z.array(z.object({
    id: z.string(),
    company: z.string(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string()
  })),
  certifications: z.array(z.object({
    id: z.string(),
    name: z.string(),
    issuer: z.string(),
    date: z.string()
  })),
  achievements: z.array(z.object({
    id: z.string(),
    description: z.string()
  }))
});

export type ResumeData = z.infer<typeof resumeSchema>;

export const defaultResumeData: ResumeData = {
  fullName: "",
  email: "",
  phone: "",
  linkedin: "",
  portfolio: "",
  education: [],
  skills: [],
  projects: [],
  experience: [],
  certifications: [],
  achievements: []
};
