import { Field } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  standDefaultValues,
  standFormSchema,
  StandFormType,
} from "@/lib/get-stand-form-details";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

interface Props {
  className?: string;
}

export const StandForm: FC<Props> = ({ className }) => {
  const form = useForm<StandFormType>({
    resolver: zodResolver(standFormSchema),
    defaultValues: standDefaultValues,
  });

  const onSubmit = (data: StandFormType) => console.log(data);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  return (
    <div className={className}>
      <div className="relative flex items-center h-[216px] w-full justify-center">
        <img
          src="/b2b-cover.png"
          className="-z-10 absolute size-full object-cover top-0 left-0"
        />
        <h1 className="text-on_primary text-5xl">Забронировать стенд</h1>
      </div>

      <Form {...form}>
        <form
          className="w-[808px] mx-auto mt-20 mb-[120px] flex flex-col gap-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            defaultValue={""}
            control={form.control}
            name="space_and_package"
            render={({ field }) => (
              <FormItem className="space-y-5">
                <FormLabel className="text-xl">
                  Select your space and package option:
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
                          value={"space"}
                          checked={field.value === "space"}
                        />
                      </FormControl>
                      <FormLabel className="text-base">Space Only</FormLabel>
                    </FormItem>

                    <FormItem className="flex items-center space-x-5 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value={"package"}
                          checked={field.value === "package"}
                        />
                      </FormControl>
                      <FormLabel className="text-base">Stand Package</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <Field
            label="Company/Organization Name"
            name="company"
            control={form.control}
          />
          <Field
            label="Name of Representative"
            name="name"
            control={form.control}
          />
          <Field
            label="Job title/Position"
            name="job_title"
            control={form.control}
          />
          <Field
            label="Number of the participants"
            name=""
            control={form.control}
          />
          <Field label="Country" name="country" control={form.control} />
          <Field
            label="E-mail address"
            name="email_address"
            control={form.control}
          />
          <Field
            label="Phone number"
            name="phone_number"
            control={form.control}
          />

          <FormField
            defaultValue={""}
            control={form.control}
            name="visa_support"
            render={({ field }) => (
              <FormItem className="space-y-5">
                <FormLabel className="text-xl">Visa support: </FormLabel>

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
                      <FormLabel className="text-base">Yes</FormLabel>
                    </FormItem>

                    <FormItem className="flex items-center space-x-5 space-y-0 ">
                      <FormControl>
                        <RadioGroupItem
                          value={"no"}
                          checked={field.value === "no"}
                        />
                      </FormControl>
                      <FormLabel className="text-base">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <Button className="mt-5">Отправить</Button>
        </form>
      </Form>
    </div>
  );
};
