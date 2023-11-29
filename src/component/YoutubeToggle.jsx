import { IoIosMenu } from "react-icons/io";
import youtubeLogo from "./../assets/youtubelogo.svg";
import { useNavContext } from "../context/NavContext";

function YoutubeToggle() {
  const { setIsExpand } = useNavContext();

  return (
    <div className={`flex gap-3 `}>
      <div
        className="p-1 sm:p-3 hover:bg-slate-100 rounded-full inline-block "
        onClick={() => setIsExpand((prev) => !prev)}
      >
        <IoIosMenu size={24} />
      </div>
      <img src={youtubeLogo} alt="youtubeLogo" className="w-24" />
    </div>
  );
}

export default YoutubeToggle;
