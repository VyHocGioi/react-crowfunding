import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    error = "",
    placeholder,
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  console.log(error);
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        placeholder={error.length > 0 ? error : placeholder}
        className={`w-full px-4 py-6 border  rounded-xl text-text-1 dark:placeholder:text-text-2 dark:text-white h-14 bg-transparent  ${
          error.length > 0
            ? "border-error placeholder:text-error"
            : "border-strock placeholder:text-text-4 dark:border-darkStroke"
        } ${children ? "pr-16" : ""}`}
        {...rest}
        {...field}
      />
      {children && (
        <span className="absolute cursor-pointer right-6 top-2/4 -translate-y-2/4">
          {children}
        </span>
      )}

      {/* <span className="absolute text-sm font-medium text-error top-2/4 -translate-y-2/4 left-6">
        {error}
      </span> */}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default withErrorBoundary(Input, {
  // FallbackComponent: <ErrorComponent></ErrorComponent>, //! errorr
  FallbackComponent: ErrorComponent, //* correct
});
