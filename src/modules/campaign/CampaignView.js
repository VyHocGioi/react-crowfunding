import { Button } from "components/button";
import React, { Fragment } from "react";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import CampaignPerk from "./CampaignPerk";
import CampaignSupport from "./CampaignSupport";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignImage from "./parts/CampaignImage";
import CampaignMeta from "./parts/CampaignMeta";
import CampTitle from "./parts/CampTitle";
import CampViewAuthor from "./parts/CampViewAuthor";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10"
        style={{
          backgroundImage: `linear-gradient(179.14deg, rgba(32, 18, 63, 0.4) -7.14%, rgba(0,0,0,0.4) 87.01%) ,url(https://source.unsplash.com/random)`,
        }}>
        <h1>Education</h1>
      </div>
      <div className="flex items-center gap-x-10 max-w-[1066px] w-full ">
        <div className="flex-1">
          <CampaignImage className="h-[398px] mb-[35px]"></CampaignImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="w-[89px] h-[70px] rounded-lg object-cover"
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[435px]">
          <CampaignCategory
            text="Architecture"
            className="mb-4 text-sm"></CampaignCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampaignDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampaignDesc>
          <CampViewAuthor></CampViewAuthor>
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
          <Button className="flex items-start justify-center w-full mb-4 text-white gap-x-5 bg-primary">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-200 mb-6 ">
        <div className="flex items-center text-sm font-medium gap-x-14 text-text-3">
          <span className="cursor-pointer">Campaign</span>
          <span className="cursor-pointer">Risks</span>
          <span className="cursor-pointer">FAQ</span>
          <span className="cursor-pointer">Updates</span>
          <span className="cursor-pointer">Comments</span>
        </div>
        <Button className="text-white bg-primary">Back this project</Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div className="w-full bg-white">
          <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
          <div className="w-full bg-white"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;
