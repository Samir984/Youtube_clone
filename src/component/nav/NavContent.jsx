/* eslint-disable react/prop-types */

import { IoMdHome } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import { IoIosMusicalNotes } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoMedalOutline } from "react-icons/io5";
import { MdOutlineReportProblem } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlineFeedback } from "react-icons/md";
import { NavLink } from "react-router-dom";

const navs = [
  {
    label: "Home",
    link: "/",
    Icon: <IoMdHome size={24} />,
  },
  {
    label: "Trending",
    link: "trending",
    Icon: <AiOutlineFire size={24} />,
  },
  {
    label: "Music",
    link: "music",
    Icon: <IoIosMusicalNotes size={24} />,
  },
  {
    label: "Gaming",
    link: "game",
    Icon: <IoGameControllerOutline size={24} />,
  },

  {
    label: "Sport",
    link: "sport",
    Icon: <IoMedalOutline size={24} />,
  },
  {
    label: "Setting",
    link: "setting",
    Icon: <IoSettingsOutline size={24} />,
  },
  {
    label: "Report",
    link: "report",
    Icon: <MdOutlineReportProblem size={24} />,
  },
  {
    label: "Help",
    link: "help",
    Icon: <BiHelpCircle size={24} />,
  },
  {
    label: "Feedbacks",
    link: "feedbacks",
    Icon: <MdOutlineFeedback size={24} />,
  },
];

function NavContent({ isExpand, mobileNav }) {
  return (
    <ul className="flex flex-col mx-2 my-1 gap-1 cursor-pointer text-lg">
      {navs.map((nav, idx) => {
        if (idx <= 4)
          return (
            <NavLink to={`${nav.link}`} key={idx}>
              <NavItem
                mobileNav={mobileNav}
                isExpand={isExpand}
                nav={nav}
                idx={idx}
              />
            </NavLink>
          );
        else {
          return (
            <NavItem
              key={idx}
              mobileNav={mobileNav}
              isExpand={isExpand}
              nav={nav}
              idx={idx}
            />
          );
        }
      })}
    </ul>
  );
}

function NavItem({ mobileNav, isExpand, nav, idx }) {
  return (
    <li
      className={`flex px-5 py-2  items-center  hover:bg-zinc-200 active:bg-zinc-200 rounded-lg ${
        !isExpand && !mobileNav ? " flex-col" : "gap-6"
      }`}
    >
      {nav.Icon}
      <span
        className={` whitespace-nowrap ${
          !isExpand ? "text-[11px] font-normal  " : ""
        } ${idx > 3 && isExpand && "font-light"}`}
      >
        {nav.label}
      </span>
    </li>
  );
}

export default NavContent;
