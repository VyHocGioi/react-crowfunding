import { IconFolder } from "components/icons";
import { defaultImg } from "constants/global";
import React from "react";
import { Link } from "react-router-dom";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignImage from "./parts/CampaignImage";
import CampaignMeta from "./parts/CampaignMeta";
import CampAuthor from "./parts/CampAuthor";
import CampTitle from "./parts/CampTitle";

const CampaignItem = () => {
  return (
    <div>
      <CampaignImage></CampaignImage>
      <div className="px-[20px] py-[15px]">
        <CampaignCategory></CampaignCategory>
        <CampTitle children="Powered Kits Learning Boxes"></CampTitle>
        <CampaignDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampaignDesc>
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <CampaignMeta size="small"></CampaignMeta>
          <CampaignMeta
            amount="173"
            description="Total backer"
            size="small"></CampaignMeta>
        </div>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
