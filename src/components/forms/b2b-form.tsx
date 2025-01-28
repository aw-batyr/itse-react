// $validator = Validator::make($data, [
//   'type' => 'required|string',
//   'company_name' => 'required|string',
//   'representative_name' => 'required|string',
//   'job_title' => 'required|string',
//   'participants_number' => 'required|string',
//   'country' => 'required|string',
//   'email_address' => 'required|email',
//   'phone_number' => 'required|string',
//   // 'website' => 'nullable|url',
//   'meeting_objective' => 'nullable|string',
//   // 'proposal_description' => 'nullable|string',
//   'government_agency' => 'nullable|string',
//   'sector_industry' => 'nullable|string',
//   // 'key_services' => 'nullable|string',
//   // 'government_experience' => 'nullable|string',
//   'preferred_meeting_datetime' => 'nullable|string',
//   'meeting_mode' => 'nullable|string',
//   'language_preference' => 'nullable|string',
//   // 'technical_requirements' => 'nullable|string',
//   'company_profile' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
//   'proposal_presentation' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
//   'relevant_certification' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
// ]);

import { AnimatePresence, motion } from "motion/react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {
  defaultValuesOfB2b,
  formSchema,
  FormType,
} from "@/lib/get-b2b-form-details";
import { Form } from "../ui/form";
import { Stage1, Stage2, Stage3 } from "../shared/b2b";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface Props {
  stage: number;
  setStage: (i: number | any) => void;
}

export const B2bForm: FC<Props> = ({ stage, setStage }) => {
  const [success, setSuccess] = useState(false);

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValuesOfB2b,
    mode: "onChange",
  });

  // const { handleNext } = useB2bForm(form);

  const getFieldsForStage = (currentStage: number): (keyof FormType)[] => {
    switch (currentStage) {
      case 1:
        return [
          "type",
          "company_name",
          "representative_name",
          "job_title",
          "participants_number",
          "country",
          "email_address",
          "phone_number",
          "website",
        ];
      case 2:
        return [
          "meeting_objective",
          "proposal_description",
          "government_agency",
          "sector_industry",
          "key_services",
          "government_experience",
        ];
      case 3:
        return [
          "preferred_meeting_datetime",
          "meeting_mode",
          "language_preference",
          "technical_requirements",
          "company_profile",
          "proposal_presentation",
          "relevant_certification",
        ];
      default:
        return [];
    }
  };

  const handleNext = async () => {
    const fieldsToValidate = getFieldsForStage(stage);
    const isValid = await form.trigger(fieldsToValidate);

    if (isValid) {
      setStage((prev: number) => prev + 1);
    }
  };

  const onSubmit = async (values: FormType) => {
    try {
      const formData = new FormData();

      // Перебираем все поля
      Object.entries(values).forEach(([key, value]) => {
        if (value instanceof File) {
          console.log(`Добавляем файл: ${key}`, value); // Отладочный вывод
          formData.append(key, value);
        } else if (value !== undefined) {
          console.log(`Добавляем поле: ${key}`, value); // Отладочный вывод
          formData.append(key, value as string);
        }
      });

      // Отправляем запрос
      const res = await axios.post(
        "https://itse.turkmenexpo.com/app/api/v1/form",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        console.log("Форма успешно отправлена!");
        setSuccess(true);
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="relative">
          <AnimatePresence>
            {stage === 1 && <Stage1 handleNext={handleNext} />}
          </AnimatePresence>
          <AnimatePresence>
            {stage === 2 && <Stage2 handleNext={handleNext} />}
          </AnimatePresence>
          <AnimatePresence>
            {stage === 3 && success === false && <Stage3 />}
          </AnimatePresence>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-8 mt-20"
            >
              <h3 className="text-3xl text-center ">
                Форма успешно отправлена!
              </h3>
              <Link className="w-fit mx-auto" to="/">
                <Button variant={"outline"}>Вернуться на главную</Button>
              </Link>
            </motion.div>
          )}
        </div>
      </form>
    </Form>
  );
};
