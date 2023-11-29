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

const navs = [
  {
    label: "Home",
    Icon: <IoMdHome size={24} />,
  },
  {
    label: "Trending",
    Icon: <AiOutlineFire size={24} />,
  },
  {
    label: "Music",
    Icon: <IoIosMusicalNotes size={24} />,
  },
  {
    label: "Gaming",
    Icon: <IoGameControllerOutline size={24} />,
  },

  {
    label: "Sport",
    Icon: <IoMedalOutline size={24} />,
  },
  {
    label: "Setting",
    Icon: <IoSettingsOutline size={24} />,
  },
  {
    label: "Report",
    Icon: <MdOutlineReportProblem size={24} />,
  },
  {
    label: "Help",
    Icon: <BiHelpCircle size={24} />,
  },
  {
    label: "Feedbacks",
    Icon: <MdOutlineFeedback size={24} />,
  },
];

function NavContent({ isExpand, mobileNav }) {
  return (
    <ul className="flex flex-col mx-2 my-1 gap-1 cursor-pointer text-lg">
      {navs.map((nav, idx) => {
        return (
          <li
            key={idx}
            className={`flex px-5 py-2 items-center gap-6 hover:bg-zinc-200 rounded-lg ${
              !isExpand && !mobileNav ? " flex-col gap-0  " : ""
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
      })}
    </ul>
  );
}

export default NavContent;
