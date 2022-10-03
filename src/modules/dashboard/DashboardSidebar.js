import {
  IconDashboard,
  IconLightDark,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "components/icons";
import IconCampaign from "components/icons/IconCampaign";
import React from "react";
import { NavLink } from "react-router-dom";
const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/home",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/checkout",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/shipping-address",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
    onclick: () => {},
  },
  {
    icon: <IconLightDark></IconLightDark>,
    title: "Light/Dark",
    url: ".lightdark",
    onclick: () => {},
  },
];
const DashboardSidebar = () => {
  const navLinkClassname = `flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8  last:mt-auto last:bg-white last:shadow-sdprimary `;
  return (
    <div className="w-full md:w-[76px] rounded-3xl shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={({ isActive }) =>
            isActive
              ? `${navLinkClassname}  text-primary bg-primary bg-opacity-20`
              : `${navLinkClassname} text-icon-color`
          }>
          <span>{link.icon}</span>
          <span className="md:hidden"> {link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
