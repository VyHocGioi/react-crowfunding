import React from "react";

const CampaignDesc = ({ children, className = "mb-4" }) => {
  return (
    <p
      className={`text-sm font-normal text-text-3 ${className}
      `}>
      {children}
    </p>
  );
};

export default CampaignDesc;
