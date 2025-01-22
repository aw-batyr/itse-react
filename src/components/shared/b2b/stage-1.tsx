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
      exit={{ opacity: 0, x: "100%", transition: { duration: 0.2 } }}
      className="w-full"
    >
      <h3 className="h2 mb-8">Applicant Information (matchmaking):</h3>

      <div className="flex flex-col gap-8">
        <FormField
          defaultValue={1}
          control={control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-xl">Type:</FormLabel>

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-4"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={1} checked={field.value === 1} />
                    </FormControl>
                    <FormLabel className="text-base">B2B</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={2} checked={field.value === 2} />
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
          name={"company"}
          error={formState.errors.company as FieldError}
          placeholder=""
          label="Company/Organization Name"
        />
        <Field
          control={control}
          name={"name"}
          error={formState.errors.name as FieldError}
          placeholder=""
          label="Name of Representative"
        />
        <Field
          control={control}
          name={"job"}
          error={formState.errors.job as FieldError}
          placeholder=""
          label="Job title/Position"
        />
        <Field
          control={control}
          name={"participants_numbers"}
          error={formState.errors.participants_numbers as FieldError}
          placeholder=""
          label="Number of the participants"
        />
        <Field
          control={control}
          name={"country"}
          error={formState.errors.country as FieldError}
          placeholder=""
          label="Country"
        />
        <Field
          control={control}
          name={"email"}
          error={formState.errors.email as FieldError}
          placeholder=""
          label="E-mail address"
        />
        <Field
          control={control}
          name={"phone"}
          error={formState.errors.phone as FieldError}
          placeholder=""
          label="Phone number"
        />
        <Field
          control={control}
          name={"web_site"}
          placeholder=""
          label="Website"
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
