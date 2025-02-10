import { FC } from "react";
import { Container } from "../shared";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { useLang } from "@/hooks/use-lang";

interface Props {
  className?: string;
}

const schema = z.object({
  email: z.string().email(),
});

export type SubscribeType = z.infer<typeof schema>;

export const SubscribeForm: FC<Props> = () => {
  const form = useForm<SubscribeType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: SubscribeType) {
    console.log(data);
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="py-8 bg-bg_surface_container"
    >
      <Container className="flex lg:flex-row flex-col gap-6 lg:items-center justify-between">
        <h2 className="h2">
          {useLang("Подпишитесь на новости:", "Subscribe to the news:")}
        </h2>

        <div className="relative">
          <input
            {...form.register("email")}
            placeholder="Email"
            className="input xl:w-[392px] lg:w-[320px] w-full"
          />
          <span className="text-error absolute -bottom-6 text-sm left-0">
            {form.formState.errors?.email?.message}
          </span>
        </div>

        <Button className="xl:w-[288px] lg:w-[220px] w-full">
          {useLang("Подписаться", "Subscribe")}
        </Button>
      </Container>
    </form>
  );
};
