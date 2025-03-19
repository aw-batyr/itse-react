import { z } from "zod";

export type StandFormType = z.infer<typeof standFormSchema>;

export const standFormSchema = z.object({
  space_package: z.string({ message: "Выберите опцию" }),

  company_name: z
    .string()
    .min(3, { message: "Название компании должно быть не менее 3 символов" }),

  rep_name: z
    .string()
    .min(3, { message: "Имя представителя должно быть не менее 3 символов" }),

  job_title: z
    .string()
    .min(3, { message: "Должность должна быть не менее 3 символов" }),

  participants_number: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Укажите количество участников")
  ),

  country: z
    .string()
    .min(3, { message: "Название страны должно быть не менее 3 символов" }),

  email: z.string().email({ message: "Укажите корректный email" }),

  phone: z
    .string()
    .min(8, { message: "Номер телефона должен быть не менее 8 символов" }),

  website: z.string().optional(),

  visa_support: z.string().optional(),
});

export const standDefaultValues = {
  space_package: "",
  company_name: "выффвы",
  rep_name: "ывфыфв",
  job_title: "ыфвыфв",
  participants_number: 1,
  country: "ывфыфв",
  email: "test@gmail.com",
  phone: "34242323423",
  website: "",
  visa_support: "",
};
