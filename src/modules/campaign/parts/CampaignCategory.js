import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";

const CampaignCategory = ({
  text = "Education",
  className = "mb-4,text-xs,font-medium ",
}) => {
  return (
    <Link
      to="/"
      className={`flex items-baselines gap-x-3 text-text-3 ${className}`}>
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampaignCategory;
