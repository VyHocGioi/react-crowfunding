import Button from "components/button/Button";
import React from "react";
import { Link } from "react-router-dom";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to="/home">
          <img srcSet="/logo.png 2x" alt="logo" />
        </Link>
        <div className="ml-14 max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button
          className="py-3 ml-0 mr-0 px-7S"
          type="submit"
          href="/start-campaign"
          kind="secondary">
          Start a Campaign
        </Button>
        <img
          src="/avatar.png"
          alt="avatar"
          className="object-cover rounded-full w-14 h-14"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
