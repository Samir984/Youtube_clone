import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import youtubeLogo from "./../assets/youtubelogo.svg";
import { IoIosSearch } from "react-icons/io";
import UserAvatar from "./UserAvatar";
import { useState } from "react";
import { useNavContext } from "../context/NavContext";
function Header() {
  const { setIsExpand } = useNavContext();
  return (
    <div className="flex items-center px-[6px] sm:px-4 py-2 bg-white gap-3 justify-between sticky top-0 z-10">
      <div className="flex gap-2">
        <div
          className="p-1 sm:p-3 hover:bg-slate-100 rounded-full inline-block "
          onClick={() => setIsExpand((prev) => !prev)}
        >
          <IoIosMenu size={24} />
        </div>
        <img src={youtubeLogo} alt="youtubeLogo" className="w-24" />
      </div>
      <SearchBar />
      <UserAvatar />
    </div>
  );
}

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [seatchFoucs, setSearchFoucs] = useState(false);

  function handelSubmitQuery(e) {
    e.preventDefault();
    if (!searchQuery) return;
    setSearchQuery("");
  }

  return (
    <form className="flex">
      <div className="relative flex w-full ">
        <input
          type="text"
          name="query"
          placeholder="Search"
          className="pl-10 pr-10 py-1 w-48  sm:w-80 lg:w-[480px] xl:w-[600px] max-[470px]:w-32 rounded-l-3xl focus:border-gray-400"
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
          className="p-3 bg-gray-100 rounded-r-3xl hover:bg-gray-200"
          onClick={handelSubmitQuery}
        >
          <IoIosSearch size={24} fill="#666" />
        </button>
      </div>
    </form>
  );
}
export default Header;
