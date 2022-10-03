import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, htmlFor }) => {
  return (
    <label
      className="inline-block text-sm font-medium cursor-pointer text-text-2 "
      htmlFor={htmlFor}>
      {children}
      <span className="text-red-500">*</span>
    </label>
  );
};
Label.propTypes = {
  children: PropTypes.string,
};
export default Label;
