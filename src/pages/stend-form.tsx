import { Cover, Field, FormSuccesStatus } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AnimatePresence, motion } from "motion/react";
import {
  standDefaultValues,
  standFormSchema,
  StandFormType,
} from "@/lib/get-stend-form-details";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { postStend } from "@/services/service";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { useLangStore } from "@/store/lang";
import { stendData } from "@/data/stend.data";
import { useTranslate } from "@/hooks/use-translate";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const StendForm: FC<Props> = ({ className }) => {
  useScrollTop();

  const lang = useLangStore((state) => state.lang);
  const [success, setSuccess] = useState(false);
  const form = useForm<StandFormType>({
    resolver: zodResolver(standFormSchema),
    defaultValues: standDefaultValues,
  });

  const onSubmit = async (data: StandFormType) => {
    try {
      const transformedData = {
        ...data,
        space_package:
          data.space_package === "1"
            ? "Participate as a visitor ( free of charge)"
            : data.space_package === "2"
            ? "Participate as an exhibitor - Stand Space only"
            : "Participate as an exhibitor - Prefabricated stand",
      };

      const status = await postStend(transformedData);

      setSuccess(status);
    } catch (error) {
      console.error("POST stend-form. Error:", error);
    }
  };

  const { errors } = form.formState;

  return (
    <div className={className}>
      <Cover title={stendData[useTranslate(lang)].cover} />

      <AnimatePresence>
        {!success && (
          <Form {...form}>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[828px] px-5 mx-auto mt-20 mb-[120px] flex flex-col gap-8"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="space_package"
                render={({ field }) => (
                  <FormItem className="space-y-5">
                    <FormLabel className="text-xl">
                      {stendData[useTranslate(lang)].h2}
                    </FormLabel>

                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-4 ml-3"
                      >
                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value={"1"}
                              checked={field.value === "1"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {stendData[useTranslate(lang)].radio}
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value={"package"}
                              checked={
                                field.value === "package" ||
                                field.value === "2" ||
                                field.value === "3"
                              }
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {stendData[useTranslate(lang)].radio_2}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="space_package"
                render={({ field }) => (
                  <FormItem
                    className={cn(
                      "space-y-5 ml-14",
                      field.value !== "package" &&
                        field.value !== "2" &&
                        field.value !== "3" &&
                        "opacity-50 pointer-events-none"
                    )}
                  >
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-4 ml-3"
                      >
                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value={"2"}
                              checked={field.value === "2"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {stendData[useTranslate(lang)].radio_group?.radio}
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value={"3"}
                              checked={field.value === "3"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {stendData[useTranslate(lang)].radio_group?.radio_2}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Field
                label={stendData[useTranslate(lang)].label_1}
                name="company_name"
                control={form.control}
                error={errors.company_name}
              />
              <Field
                label={stendData[useTranslate(lang)].label_2}
                name="rep_name"
                control={form.control}
                error={errors.rep_name}
              />
              <Field
                label={stendData[useTranslate(lang)].label_3}
                name="job_title"
                control={form.control}
                error={errors.job_title}
              />
              <Field
                label={stendData[useTranslate(lang)].number_of_participants}
                type="number"
                name="participants_number"
                control={form.control}
                error={errors.participants_number}
              />
              <Field
                label={stendData[useTranslate(lang)].label_4}
                name="country"
                control={form.control}
                error={errors.country}
              />
              <Field
                label={stendData[useTranslate(lang)].label_5}
                name="email"
                control={form.control}
                error={errors.email}
              />
              <Field
                label={stendData[useTranslate(lang)].label_6}
                name="phone"
                control={form.control}
                error={errors.phone}
              />

              <Field
                label={stendData[useTranslate(lang)].label_7}
                name="website"
                control={form.control}
              />

              <FormField
                control={form.control}
                name="visa_support"
                render={({ field }) => (
                  <FormItem className="space-y-5">
                    <FormLabel className="text-xl">
                      {stendData[useTranslate(lang)].visa}
                    </FormLabel>

                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-4 ml-3"
                      >
                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value={"yes"}
                              checked={field.value === "yes"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {stendData[useTranslate(lang)].visa_radio}
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-5 space-y-0 ">
                          <FormControl>
                            <RadioGroupItem
                              value={"no"}
                              checked={field.value === "no"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {stendData[useTranslate(lang)].visa_radio_2}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button disabled={form.formState.isSubmitting} className="mt-5">
                {form.formState.isSubmitting ? (
                  <Loader className="animate-spin" />
                ) : (
                  stendData[useTranslate(lang)].button
                )}
              </Button>
            </motion.form>
          </Form>
        )}
      </AnimatePresence>

      {success && <FormSuccesStatus delay={0.3} />}
    </div>
  );
};
