import { FC } from "react";
import { cn } from "@/lib/utils";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { FieldProps } from "./field";

export const Radio: FC<FieldProps> = ({
  className,
  control,
  name,
  onPrimary,
  textDark,
  label,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn(
            className,
            "flex gap-2 cursor-pointer items-center  w-full relative"
          )}
        >
          <FormControl>
            <input type="radio" {...field} className="radio" />
          </FormControl>
          <FormLabel
            className={cn(
              "text-xl !mt-0",
              onPrimary && "!text-on_primary ",
              textDark ? "text-on_surface" : "text-on_surface_v"
            )}
          >
            {label}
          </FormLabel>
        </FormItem>
      )}
    />
  );
};
