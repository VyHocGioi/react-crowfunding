import React from "react";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignImage from "./parts/CampaignImage";
import CampaignMeta from "./parts/CampaignMeta";
import CampTitle from "./parts/CampTitle";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-8 max-w-[1048px] w-full mb-8">
      <CampaignImage className="h-[266px] flex-1"></CampaignImage>
      <div className="flex-1 max-w-[435px]">
        <CampaignCategory
          text="Architecture"
          className="mb-4 text-sm"></CampaignCategory>
        <CampTitle className="mb-4 text-xl font-bold ">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampaignDesc className="mb-6 text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampaignDesc>
        <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-5">
          <div className="w-3/4 h-full rounded-full bg-primary"></div>
        </div>
        <div className="flex justify-between flex-start">
          <CampaignMeta
            amount="$2000"
            description="Raised of $2500"
            size=""></CampaignMeta>
          <CampaignMeta
            amount="173"
            description="Total backer"
            size=""></CampaignMeta>
          <CampaignMeta
            amount="30"
            description="Days left"
            size=""></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
