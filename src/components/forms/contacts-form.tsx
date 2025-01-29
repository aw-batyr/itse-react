import { FC, useState } from "react";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactsFormType,
  contactsSchema,
  defaultValuesContacts,
} from "@/lib/get-contacts-details";
import { cn } from "@/lib/utils";
import { Field } from "../shared";
import { Button } from "../ui/button";
import { postContact } from "@/services/service";

interface Props {
  className?: string;
}

export const ContactsForm: FC<Props> = ({ className }) => {
  const [status, setStatus] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactsSchema),
    defaultValues: defaultValuesContacts,
  });

  async function onSubmit(data: ContactsFormType) {
    try {
      const status = await postContact(data);

      setStatus(status);
    } catch (error) {
      console.error("POST contact", error);
    }
  }

  const { errors } = form.formState;

  console.log(status);

  return (
    <div className={cn("bg-primary rounded-[8px] py-8 px-6 ", className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h2 className="h2 !text-on_primary lg:mb-8 mb-6">Связаться с нами</h2>

          <div className="flex flex-col gap-8">
            <Field
              onPrimary
              name="name"
              control={form.control}
              label="Имя"
              error={errors.name}
            />

            <div className="flex flex-col lg:flex-row gap-6">
              <Field
                onPrimary
                name="email"
                control={form.control}
                label="E-mail"
                error={errors.email}
              />
              <Field
                onPrimary
                name="phone"
                control={form.control}
                label="Телефон"
                error={errors.phone}
              />
            </div>

            <Field
              onPrimary
              name="company_name"
              control={form.control}
              label="Название компании"
              error={errors.name}
            />
            <Field
              onPrimary
              textArea
              name="message"
              label="Сообщение"
              control={form.control}
              error={errors.message}
            />
            <Button className="w-full" variant="secondary">
              Отправить
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
