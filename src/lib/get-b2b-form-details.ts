import { z } from "zod";

export type FormType = z.infer<typeof formSchema>;

export const formSchema = z.object({
  // stage 1
  type: z.string(),
  company_name: z.string().min(3),
  representative_name: z.string().min(3),
  job_title: z.string().min(3),
  participants_number: z.string().min(1),
  country: z.string().min(3),
  email_address: z.string().email(),
  phone_number: z.string().min(5),
  website: z.string().optional(),

  // stage 2
  meeting_objective: z.string().optional(),
  proposal_description: z.string().optional(),
  government_agency: z.string().optional(),
  sector_industry: z.string().optional(),
  key_services: z.string().optional(),
  government_experience: z.string().optional(),

  // stage 3
  preferred_meeting_datetime: z.string().optional(),
  meeting_mode: z.string().optional(),
  language_preference: z.string().optional(),
  technical_requirements: z.string().optional(),
  company_profile: z.instanceof(File).optional(),
  proposal_presentation: z.instanceof(File).optional(),
  relevant_certification: z.instanceof(File).optional(),
});

export const defaultValuesOfB2b = {
  type: "B2B",
  company_name: "",
  representative_name: "",
  job_title: "",
  participants_number: "",
  country: "",
  email_address: "awbatyr@gmail.com",
  phone_number: "",
  website: "",
  meeting_objective: "",
  proposal_description: "",
  government_agency: "",
  sector_industry: "",
  key_services: "",
  government_experience: "",
  preferred_meeting_datetime: "",
  meeting_mode: "",
  language_preference: "",
  technical_requirements: "",
};
