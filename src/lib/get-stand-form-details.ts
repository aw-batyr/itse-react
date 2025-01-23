import { z } from "zod";

export type StandFormType = z.infer<typeof standFormSchema>;

export const standFormSchema = z.object({
  space_and_package: z.string(),
  company: z.string(),
  name: z.string(),
  job: z.string(),
  participants_numbers: z.string(),
  country: z.string(),
  emai: z.string().email(),
  phone: z.string(),
  web_site: z.string(),
  visa_support: z.string(),
});

export const standDefaultValues = {
  space_and_package: "space",
  company: "",
  name: "",
  job: "",
  participants_numbers: "",
  country: "",
  emai: "",
  phone: "",
  web_site: "",
  visa_support: "yes",
};
