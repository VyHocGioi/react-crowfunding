import React from "react";

const CampaignMeta = ({
  amount = "2000$",
  description = "Raised of $1,900",
  size = "small",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={` text-text-2 ${size === "small" ? "text-sm" : "text-xl"}`}>
        {amount}
      </h4>
      <span
        className={`text-xs text-text-4 ${
          size === "small" ? "text-xs" : "text-base"
        }`}>
        {description}
      </span>
    </div>
  );
};

export default CampaignMeta;
