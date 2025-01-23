import { z } from "zod";

export type StandFormType = z.infer<typeof standFormSchema>;

export const standFormSchema = z.object({
  space_and_package: z.string(),
  company: z.string(),
  name: z.string(),
  job_title: z.string(),
  participants_number: z.string(),
  country: z.string(),
  email_address: z.string().email(),
  phone_number: z.string(),
  website: z.string(),
  visa_support: z.string(),
});

export const standDefaultValues = {
  space_and_package: "space",
  company: "",
  name: "",
  job_title: "",
  participants_number: "",
  country: "",
  email_address: "",
  phone_number: "",
  website: "",
  visa_support: "yes",
};
