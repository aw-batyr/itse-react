import { z } from "zod";

export type FormType = z.infer<typeof formSchema>;

export const formSchema = z.object({
  // stage 1
  type: z.number().optional(),
  company: z.string().optional(),
  name: z.string().optional(),
  job: z.string().optional(),
  participants_numbers: z.string().optional(),
  country: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  web_site: z.string().optional(),

  // stage 2
  primary_meeting: z.string().optional(),
  brief_desc: z.string().optional(),
  relevant_government_agency: z.string().optional(),
  industry: z.string().optional(),
  key_services: z.string().optional(),
  experience: z.string().optional(),

  // stage 3
  preffered_date: z.string().optional(),
  preferred_mode: z.string().optional(),
  lang: z.string().optional(),
  additional_technical: z.string().optional(),
  company_file: z.string().optional(),
  proposal_presentation: z.string().optional(),
  relevant_certification: z.string().optional(),
});

export const defaultValuesOfB2b = {
  type: 1,
  company: "",
  name: "",
  job: "",
  participants_numbers: "",
  country: "",
  email: "",
  phone: "",
  web_site: "",
  primary_meeting: "",
  brief_desc: "",
  relevant_government_agency: "",
  industry: "",
  key_services: "",
  experience: "",
  preffered_date: "",
  preferred_mode: "",
  lang: "",
  additional_technical: "",
};
