import React from "react";
import { useController } from "react-hook-form";

const TextArea = (props) => {
  const {
    control,
    name,
    type = "text",
    error = "",
    placeholder = "",
    children,
    ...rest
  } = props;
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <textarea
      className="w-full px-4 py-6 bg-transparent border outline-none min-h-[140px] resize-none rounded-xl text-text-1 dark:placeholder:text-text-2 dark:text-white h-14"
      placeholder={placeholder}
      {...field}
      {...rest}></textarea>
  );
};

export default TextArea;
