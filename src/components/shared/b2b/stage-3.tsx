import { FC } from "react";
import { motion } from "motion/react";
import { FieldError, useFormContext } from "react-hook-form";
import { Field } from "../field";
import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
}

export const Stage3: FC<Props> = ({}) => {
  const { control, formState } = useFormContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } }}
      transition={{ duration: 1 }}
    >
      <h3 className="h2 mb-8">Meeting Logistics</h3>

      <div className="flex flex-col gap-6">
        <Field
          control={control}
          name={"preffered_date"}
          error={formState.errors.preffered_date as FieldError}
          placeholder=""
          label="Preferred date and time for the meeting"
        />
        <Field
          control={control}
          name={"preferred_mode"}
          error={formState.errors.preferred_mode as FieldError}
          placeholder=""
          label="Preferred mode of meeting (in-person, virtual (via zoom/teams/other), hybrid)"
        />
        <Field
          control={control}
          name={"additional_technical"}
          error={formState.errors.additional_technical as FieldError}
          placeholder=""
          label="Additional technical or logistical requirements (e.g. AV equipment, interpreters, etc)"
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

      <div className="flex flex-col gap-8">
        <div className="">
          <h3 className="h2 mt-10">Attachments</h3>
          <h5 className="text-on_surface_v">
            (Please attach the following documents as applicable)
          </h5>
        </div>

        <Field
          control={control}
          name="company_file"
          label="Company/organization profile"
          type="file"
          textDark
        />
        <Field
          control={control}
          name="proposal_presentation"
          label="Proposal presentation"
          type="file"
          textDark
        />
        <Field
          control={control}
          name="relevant_certification"
          label="Relevant certification/licenses"
          type="file"
          textDark
        />
      </div>

      <Button type="submit" className="w-full mt-10">
        Далее
      </Button>
    </motion.div>
  );
};
