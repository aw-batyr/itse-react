import React from "react";
import { useController, Control } from "react-hook-form";

interface CustomInputProps {
  name: string;
  label: string;
  control: Control<any>;
}

const CustomInput: React.FC<CustomInputProps> = ({ name, label, control }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div>
      <label htmlFor={name} className="text-xl text-on_surface_v">
        {label}
      </label>
      <input id={name} {...field} />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
};

export default CustomInput;
