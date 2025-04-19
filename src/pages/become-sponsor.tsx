import { Cover, Field, FormSuccesStatus } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { AnimatePresence, motion } from "motion/react";
import {
  sponsorDefaultValues,
  sponsorFormSchema,
  SponsorFormType,
} from "@/lib/get-sponsor-form-details";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { postSponsor } from "@/services/service";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Language, useLangStore } from "@/store/lang";
import { stendData } from "@/data/stend.data";
import { useTranslate } from "@/hooks/use-translate";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMasterClasses } from "@/hooks/tanstack/use-master-classes";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}

export const BecomeSponsor: FC<Props> = ({ className }) => {
  useScrollTop();
  const lang = useLangStore((state) => state.lang);

  const [success, setSuccess] = useState(false);
  const form = useForm<SponsorFormType>({
    resolver: zodResolver(sponsorFormSchema),
    defaultValues: sponsorDefaultValues,
  });

  const translate = useTranslate(lang);

  const onSubmit = async (data: SponsorFormType) => {
    try {
      const status = await postSponsor(data, lang);

      if (status) setSuccess(true);
    } catch (error) {
      console.error("POST sponsor error", error);
    }
  };

  const { errors } = form.formState;

  const { data } = useMasterClasses();

  console.log(data);

  return (
    <div className={className}>
      <Cover
        title={
          lang === Language.RU
            ? "Мастер-классы / Cеминары"
            : "Masterclasses / Seminars"
        }
      />

      <AnimatePresence>
        {!success && (
          <Form {...form}>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[828px] mx-auto px-5 md:mt-20 mt-10 mb-20 md:mb-[120px] flex flex-col gap-8"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="master_class"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-on_surface_v text-xl">
                      {stendData[translate].master_classes}
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              lang === "ru"
                                ? "Выберите опцию"
                                : "Please select an option"
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {data?.map((item) => (
                          <SelectItem key={item.id} value={item.name}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage
                      className={cn(
                        "absolute -bottom-5 left-0 text-xs font-medium leading-[130%]",
                        Boolean(errors.master_class) && "text-error"
                      )}
                    >
                      {errors.master_class ? errors.master_class.message : ""}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <Field
                label={stendData[translate].label_1}
                name="company_name"
                control={form.control}
                error={errors.company_name}
              />
              <Field
                label={stendData[translate].label_2}
                name="rep_name"
                control={form.control}
                error={errors.rep_name}
              />
              <Field
                label={stendData[translate].label_3}
                name="job_title"
                control={form.control}
                error={errors.job_title}
              />
              <Field
                label={stendData[translate].label_4}
                name="country"
                control={form.control}
                error={errors.country}
              />
              <Field
                label={stendData[translate].label_5}
                name="email"
                control={form.control}
                error={errors.email}
              />
              <Field
                label={stendData[translate].label_6}
                name="phone"
                control={form.control}
                error={errors.phone}
              />
              <Field
                label={stendData[translate].label_7}
                name="website"
                control={form.control}
              />

              {/* <FormField
                control={form.control}
                name="visa_support"
                render={({ field }) => (
                  <FormItem className="space-y-5">
                    <FormLabel className="text-xl">
                      {stendData[translate].visa}
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
                            {stendData[translate].visa_radio}
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
                            {stendData[translate].visa_radio_2}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              /> */}

              <Button disabled={form.formState.isSubmitting} className="mt-5">
                {form.formState.isSubmitting ? (
                  <Loader className="animate-spin" />
                ) : (
                  stendData[translate].button
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
