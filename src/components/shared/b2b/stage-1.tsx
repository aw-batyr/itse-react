import { motion } from "motion/react";

import { FC } from "react";
import { Field } from "../";
import { FieldError, useFormContext } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
  handleNext: VoidFunction;
}

export const Stage1: FC<Props> = ({ handleNext }) => {
  const { control, formState } = useFormContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: "100%", transition: { duration: 0.2 } }}
      className="w-full"
    >
      <h3 className="h2 mb-8">Информация об экспоненте:</h3>

      <div className="flex flex-col gap-8">
        <FormField
          defaultValue={1}
          control={control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-xl">Тип:</FormLabel>

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-4"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={"B2B"}
                        checked={field.value === "B2B"}
                      />
                    </FormControl>
                    <FormLabel className="text-base">B2B</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={"B2G"}
                        checked={field.value === "B2G"}
                      />
                    </FormControl>
                    <FormLabel className="text-base">B2G</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        <Field
          control={control}
          name={"company_name"}
          error={formState.errors.company_name as FieldError}
          placeholder=""
          label="Название компании/организации"
        />
        <Field
          control={control}
          name={"representative_name"}
          error={formState.errors.representative_name as FieldError}
          placeholder=""
          label="Имя представителя"
        />
        <Field
          control={control}
          name={"job_title"}
          error={formState.errors.job_title as FieldError}
          placeholder=""
          label="Название должности/позиция"
        />
        <Field
          control={control}
          name={"participants_number"}
          error={formState.errors.participants_number as FieldError}
          placeholder=""
          label="Количество участников"
        />
        <Field
          control={control}
          name={"country"}
          error={formState.errors.country as FieldError}
          placeholder=""
          label="Страна"
        />
        <Field
          control={control}
          name={"email_address"}
          error={formState.errors.email_address as FieldError}
          placeholder=""
          label="E-mail адрес"
        />
        <Field
          control={control}
          name={"phone_number"}
          error={formState.errors.phone_number as FieldError}
          placeholder=""
          label="Номер телефона"
        />
        <Field
          control={control}
          name={"website"}
          placeholder=""
          label="Вебсайт"
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
