import { defaultImg } from "constants/global";
import React from "react";

const CampaignImage = ({ className = "h-[158px] w-full" }) => {
  return (
    <div>
      <img
        src={defaultImg}
        alt=""
        className={`object-cover rounded-2xl ${className}`}
      />
    </div>
  );
};

export default CampaignImage;
