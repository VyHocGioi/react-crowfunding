import React from "react";
import classNames from "utils/classNames";

const Heading = ({ children, number = null }) => {
  return (
    <h2 className="mb-5 text-lg font-semibold text-text-1">
      {children}
      {number && <span className="text-secondary">({number})</span>}
    </h2>
  );
};

export default Heading;
