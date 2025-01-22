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
      transition={{ duration: 1 }}
    >
      <h3 className="h2 mb-8">Meeting Purposes:</h3>

      <div className="flex flex-col gap-8">
        <Field
          control={control}
          name={"primary_meeting"}
          error={formState.errors.primary_meeting as FieldError}
          placeholder=""
          label="Primary objective of the meeting"
        />
        <Field
          control={control}
          name={"brief_desc"}
          error={formState.errors.brief_desc as FieldError}
          placeholder=""
          label="Brief description of your proposal/project/request"
        />
        <Field
          control={control}
          name={"relevant_government_agency"}
          error={formState.errors.relevant_government_agency as FieldError}
          placeholder=""
          label="Relevant government agency/department"
        />

        <h3 className="h2 mt-4">Company/Organization Profile:</h3>

        <Field
          control={control}
          name={"industry"}
          error={formState.errors.industry as FieldError}
          placeholder=""
          label="Sector Industry"
        />
        <Field
          control={control}
          name={"key_services"}
          error={formState.errors.key_services as FieldError}
          placeholder=""
          label="Key Services/Products"
        />
        <Field
          control={control}
          name={"experience"}
          error={formState.errors.experience as FieldError}
          placeholder=""
          label="Previous Experience working with Governments (if applicable)"
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
