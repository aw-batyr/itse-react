import { z } from "zod";

export type ContactsFormType = z.infer<typeof contactsSchema>;

export const contactsSchema = z.object({
  name: z.string().min(2, "Имя необходимо"),
  email: z.string().email("Email необходим"),
  phone: z.string().min(8, "Номер телефона необходим"),
  company: z.string().min(2, "Название компании необходимо"),
  msg: z.string().min(5, "Сообщение необходимо"),
});

export const defaultValuesContacts = {
  name: "",
  email: "",
  phone: "",
  company: "",
  msg: "",
};
