import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  let defaultClassName = `flex items-center p-4 text-base font-semibold rounded-xl justify-center min-h-[56px] `;
  // if (rest.href) return <Link to={rest.href}>{children}</Link>;
  switch (rest.kind) {
    case "primary":
      defaultClassName += "bg-primary text-white";
      break;
    case "secondary":
      defaultClassName += "bg-secondary text-white";
      break;
    case "ghost":
      defaultClassName += "!bg-[#EEEAFD] !text-secondary";
      break;
    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={defaultClassName}>
        {children}
      </Link>
    );
  return (
    <button
      className={`flex items-center p-4 mx-auto text-base font-semibold rounded-xl justify-center text-white min-h-[56px] ${
        !!isLoading ? "opacity-50" : ""
      } ${className}`}
      type={type}
      {...rest}>
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
