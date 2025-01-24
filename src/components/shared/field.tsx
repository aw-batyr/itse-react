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
import { LegacyRef } from "react";

type Props = {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  error?: FieldError | undefined;
  area?: boolean;
  ref?: LegacyRef<HTMLInputElement>;
  type?: string;
  className?: string;
  disabled?: boolean;
  textDark?: boolean;
  supporText?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Field = ({
  control,
  name,
  label,
  placeholder,
  error,
  type = "text",
  className,
  disabled,
  ref,
  textDark,
  supporText,
  handleChange,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className, "flex flex-col w-full relative")}>
          <FormLabel
            className={cn(
              "text-xl",
              textDark ? "text-on_surface" : "text-on_surface_v"
            )}
          >
            {label}
          </FormLabel>

          <FormControl>
            <>
              {type !== "file" && (
                <Input
                  type={type}
                  placeholder={placeholder}
                  {...field}
                  disabled={disabled}
                  className={error?.message && "border-[#BA1A1A]"}
                />
              )}

              {/* Обработка файлов */}
              {type === "file" && (
                <>
                  <Input
                    ref={ref}
                    type="file"
                    placeholder={placeholder}
                    onChange={handleChange}
                    disabled={disabled}
                    className={error?.message && "border-[#BA1A1A]"}
                  />
                  {field.value && console.log(field.value.name) && (
                    <div className="text-sm mt-2 text-gray-500">
                      Выбранный файл: {field.value.name}
                    </div>
                  )}
                </>
              )}
            </>
          </FormControl>
          <FormMessage
            className={cn(
              "absolute -bottom-5 left-0 text-sm font-medium leading-[130%] ",
              error?.message ? "text-[#BA1A1A]" : "text-on_surface_v"
            )}
          >
            {error ? error.message : supporText}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};
