import { Button } from "components/button";
import { defaultImg } from "constants/global";
import React from "react";
import CampTitle from "./parts/CampTitle";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div>
      <div className="bg-white shadow-1 rounded-xl">
        <img
          src={defaultImg}
          alt=""
          className="h-[232px] object-cover rounded-xl w-full"
        />
        <div className="p-5">
          <span className="inline-block px-3 py-1 mb-5 text-xs font-medium text-white rounded bg-secondary">
            Featured
          </span>
          <CampTitle className="mb-1 text-xl font-semibold">
            Special One Camera
          </CampTitle>
          <div className="flex items-center">
            <span className="mr-[10px] text-xl font-bold text-text-1">
              $2,724 USD
            </span>{" "}
            <span className="text-sm text-error ">
              <span className="mr-[5px] line-through"> $1,504 USD </span>(12%
              OFF)
            </span>
          </div>
          <div className="flex flex-col mb-4 gap-y-1">
            <strong>Estimate shipping </strong>
            <span className="text-text2">October 2022</span>
            <p className="mt-3 text-text-2">05 claimed</p>
            <p className="mt-3 text-text-2">Ships worldwide</p>
          </div>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button className="w-full text-white bg-secondary">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
