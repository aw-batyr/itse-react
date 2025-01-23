import { FC } from "react";
import { FieldError, useFormContext } from "react-hook-form";
import { Field } from "../";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
  handleNext: VoidFunction;
}

export const Stage2: FC<Props> = ({ handleNext }) => {
  const { control, formState } = useFormContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } }}
      exit={{ opacity: 0, y: 100 }}
    >
      <h3 className="h2 mb-8">Цели встречи:</h3>

      <div className="flex flex-col gap-8">
        <Field
          control={control}
          name={"meeting_objective"}
          error={formState.errors.meeting_objective as FieldError}
          placeholder=""
          label="Основная цель встречи"
        />
        <Field
          control={control}
          name={"proposal_description"}
          error={formState.errors.proposal_description as FieldError}
          placeholder=""
          label="Краткое описание вашего предложения/проекта/запроса"
        />
        <Field
          control={control}
          name={"government_agency"}
          error={formState.errors.government_agency as FieldError}
          placeholder=""
          label="Соответствующее государственное учреждение/департамент"
        />

        <h3 className="h2 mt-4">
          Информация о компании/организации:
          {/* Company/Organization Profile: */}
        </h3>

        <Field
          control={control}
          name={"sector_industry"}
          error={formState.errors.sector_industry as FieldError}
          placeholder=""
          // label="Sector sector_industry"
          label="Отраслевая промышленность"
        />
        <Field
          control={control}
          name={"key_services"}
          error={formState.errors.key_services as FieldError}
          placeholder=""
          label="Ключевые услуги/продукты"
          // label="Key Services/Products"
        />
        <Field
          control={control}
          name={"government_experience"}
          error={formState.errors.government_experience as FieldError}
          placeholder=""
          label="Предыдущий опыт работы с правительствами (если применимо)"
          // label="Previous Experience working with Governments (if applicable)"
        />
      </div>

      <Button
        variant={"secondary"}
        type="button"
        onClick={handleNext}
        className="w-full mt-10"
      >
        Далее
      </Button>
    </motion.div>
  );
};
