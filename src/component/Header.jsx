import { RxCross1 } from "react-icons/rx";

import { IoIosSearch } from "react-icons/io";
import ChannelAvatar from "./ChannelAvatar";
import { useState } from "react";

import YoutubeToggle from "./YoutubeToggle";
import { useNavigate } from "react-router-dom";
function Header() {
  return (
    <div className="flex items-center px-[12px] sm:px-4 py-2 bg-white gap-2 justify-between sticky top-0 z-10">
      <YoutubeToggle />
      <SearchBar />
      <ChannelAvatar />
    </div>
  );
}

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [seatchFoucs, setSearchFoucs] = useState(false);
  const naviagte = useNavigate();

  function handelSubmitQuery(e) {
    e.preventDefault();
    if (!searchQuery) return;
    naviagte(`/results?query=${searchQuery}`);
    setSearchQuery("");
  }

  return (
    <form className="flex">
      <div className="relative flex w-full ">
        <input
          type="text"
          name="query"
          placeholder="Search"
          className="pl-10 pr-10  w-48  sm:w-80 lg:w-[480px] xl:w-[600px] max-[470px]:w-32  max-[410px]:w-24 rounded-l-3xl focus:border-gray-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setSearchFoucs(true)}
          onBlur={() => setSearchFoucs(false)}
        />
        {searchQuery && (
          <div
            className="absolute right-[52px] top-[6px] p-2 hover:bg-gray-200 rounded-full "
            onClick={() => setSearchQuery("")}
          >
            <RxCross1 size={20} />
          </div>
        )}

        {seatchFoucs && (
          <div className={`absolute top-[11px] left-3 `}>
            <IoIosSearch size={24} fill="#666" />
          </div>
        )}
        <button
          className="p-[12px] bg-gray-100 rounded-r-3xl hover:bg-gray-200"
          onClick={handelSubmitQuery}
        >
          <IoIosSearch size={24} fill="#666" />
        </button>
      </div>
    </form>
  );
}

export default Header;
