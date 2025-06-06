import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLang } from "@/hooks/use-lang";
import { Button } from "@/components/ui/button";
import { postSubscribe } from "@/services/service";
import { cn } from "@/lib/utils";
import { Container } from "../shared";

interface Props {
  className?: string;
  modal?: boolean;
}

const schema = z.object({
  email: z.string().email(),
});

export type SubscribeType = z.infer<typeof schema>;

export const SubscribeForm: FC<Props> = ({ modal = false }) => {
  const [success, setSuccess] = useState(false);

  const form = useForm<SubscribeType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: SubscribeType) {
    try {
      const status = await postSubscribe(data);

      form.reset();
      setSuccess(status);
    } catch (error) {
      console.error("POST subscribe", error);
    }
  }

  const submittedText = useLang("Отправлено", "Submitted");
  const submitText = useLang("Подписаться", "Subscribe");

  useEffect(() => {
    if (form.formState.errors.email) {
      const timer = setTimeout(() => {
        form.clearErrors("email");
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [form.formState.errors.email, form]);

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn(
        "py-8",
        modal ? "max-w-[392px] mx-auto" : "bg-bg_surface_container"
      )}
    >
      <Container
        className={cn(
          "flex gap-8 justify-between",
          modal ? "flex-col w-full" : "lg:flex-row flex-col lg:items-center"
        )}
      >
        <h2 className="h2 !text-left">
          {useLang("Подпишитесь на новости:", "Subscribe to the news:")}
        </h2>

        <div className="relative">
          <input
            {...form.register("email")}
            placeholder="Email"
            className={cn("input", {
              "w-full": modal,
              "xl:w-[392px] lg:w-[320px] w-full": !modal,
            })}
          />
          <span className="text-error absolute -bottom-6 text-sm left-0">
            {form.formState.errors?.email?.message}
          </span>
        </div>

        <Button
          loading={form.formState.isSubmitting}
          disabled={success}
          className={cn({
            "xl:w-[288px] lg:w-[220px] w-full": !modal,
            "w-full": modal,
          })}
        >
          {success ? submittedText : submitText}
        </Button>
      </Container>
    </form>
  );
};
