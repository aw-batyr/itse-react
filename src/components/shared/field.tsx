import { FieldError } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type Props = {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  error?: FieldError | undefined;
  area?: boolean;
  type?: string;
  className?: string;
  disabled?: boolean;
  textDark?: boolean;
  supporText?: string;
};

export const Field = ({
  control,
  name,
  label,
  placeholder,
  error,
  area = false,
  type = "text",
  className,
  disabled,
  textDark,
  supporText,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className, "flex flex-col w-full relative")}>
          <FormLabel
            className={cn(
              " text-xl",
              textDark ? "text-on_surface" : "text-on_surface_v"
            )}
          >
            {label}
          </FormLabel>

          <FormControl>
            {!area && (
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                disabled={disabled}
                className={error?.message && "border-[#BA1A1A]"}
              />
            )}
          </FormControl>

          <FormMessage
            className={cn(
              "absolute -bottom-5 left-0 text-sm font-medium leading-[130%] ",
              error ? "text-[#BA1A1A]" : "text-on_surface_v"
            )}
          >
            {error ? error.message : supporText}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};
