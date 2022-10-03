import Button from "components/button/Button";
import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import React, { Fragment } from "react";

const CampaignPage = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-3xl">
        <div className="flex items-start gap-x-6">
          <div className="bg-[#A992FE] w-14 h-14 rounded-full flex items-center justify-center text-white bg-opacity-60">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5V19"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold mb-2">
              Create your campaign
            </h1>
            <p className="mb-2 text-sm font-normal text-text-3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <p className="text-sm text-primary">Need any help? Learn More...</p>
          </div>
        </div>
        <Button
          type="button"
          className="px-8"
          kind="ghost"
          href="/start-campaign">
          Create campaign
        </Button>
      </div>
      <Gap></Gap>
      <Heading number={4}>Your campaign</Heading>
      <CampaignGrid type="campaign">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <div className="h-[50px] w-[200px] mx-auto">
        <Button
          type="button"
          kind="ghost"
          href="/"
          className="h-[50px] w-[200px] ">
          See more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Button>
      </div>
    </Fragment>
  );
};

export default CampaignPage;
