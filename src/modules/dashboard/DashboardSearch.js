import { defaultAvatarImg, defaultImg } from "constants/global";
import React, { useState } from "react";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className="relative z-50">
      <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15);] p-2 w-full max-w-[458px] flex items-center ">
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="w-full text-sm bg-transparent placeholder:text-text-4 text-text-1"
            onClick={handleShowSearch}
          />
        </div>
        <button className="flex items-center justify-center flex-shrink w-20 h-10 bg-primary rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="search-results w-full lg:w-[843px] bg-white absolute top-full left-0 z-50 translate-y-5 pb-6 rounded-3xl">
          <div className="flex items-center justify-between p-3 bg-graySoft rounded-3xl">
            <h4 className="pl-4 text-sm font-medium">
              See all 10,124 fundraisier
            </h4>
            <button
              className="flex items-center justify-center w-[72px] h-[50px] bg-[#F9E3E3]"
              onClick={handleShowSearch}>
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 1.61143L14.3886 0L8 6.38857L1.61143 0L0 1.61143L6.38857 8L0 14.3886L1.61143 16L8 9.61143L14.3886 16L16 14.3886L9.61143 8L16 1.61143Z"
                  fill="#EB5757"
                />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <div className="flex flex-col mb-6 gap-y-5">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h3 className="mb-5 text-sm font-semibold">Related searchs</h3>
            <div className="flex flex-col gap-y-3 ">
              <p>education fund</p>
              <p>scholarship fund</p>
              <p>education and scholarship fund</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
function SearchItem() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={defaultAvatarImg}
        alt=""
        className="w-[50px] h-[50px] rounded-lg object-cover"
      />
      <div className="flex-1 text-sm">
        <h3 className="mb-1 ">
          <strong>Education </strong>
          fund for Durgham Family
        </h3>
        <p className="text-xs font-normal text-text-3">By Durgham Family</p>
      </div>
    </div>
  );
}
export default DashboardSearch;
