import React from "react";

const CampTitle = ({ children, className = "mb-1 font-semibold" }) => {
  return <h3 className={`mb-1  text-text-1 ${className}`}>{children}</h3>;
};

export default CampTitle;
