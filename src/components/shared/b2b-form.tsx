import { AnimatePresence, motion } from "motion/react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  defaultValuesOfB2b,
  formSchema,
  FormType,
} from "@/lib/get-b2b-form-details";
import { Form } from "../ui/form";
import { Stage1, Stage2, Stage3 } from "./b2b";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface Props {
  stage: number;
  setStage: (i: number | any) => void;
}

export const B2bForm: FC<Props> = ({ stage, setStage }) => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValuesOfB2b,
    mode: "onChange",
  });

  const handleNext = async () => {
    const fieldsToValidate = getFieldsForStage(stage);
    const isValid = await form.trigger(fieldsToValidate);

    if (isValid) {
      setStage((prev: number) => prev + 1);
    }
  };

  // Отправка формы на последнем этапе
  const onSubmit = (values: FormType) => {
    console.log("Submitted values:", values);
    setStage(0);
    // Здесь вы можете отправить данные на сервер
  };

  const getFieldsForStage = (currentStage: number): (keyof FormType)[] => {
    switch (currentStage) {
      case 1:
        return [
          "type",
          "company",
          "name",
          "job",
          "participants_numbers",
          "country",
          "email",
          "phone",
          "web_site",
        ];
      case 2:
        return [
          "primary_meeting",
          "brief_desc",
          "relevant_government_agency",
          "industry",
          "key_services",
          "experience",
        ];
      case 3:
        return [
          "preffered_date",
          "preferred_mode",
          "lang",
          "additional_technical",
        ];
      default:
        return [];
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
          <AnimatePresence>{stage === 3 && <Stage3 />}</AnimatePresence>

          {form.formState.isSubmitSuccessful && (
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
