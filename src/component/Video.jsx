import { formatNumber, formatTime } from "../utils/helper";
import ChannelAvatar from "./ChannelAvatar";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
function Video({ videoDetail }) {
  const video = useRef();

  useEffect(() => {
    const handleHover = () => {
      video.current.style.display = "block";
    };

    const handleLeave = () => {
      video.current.style.display = "none";
    };

    video.current.parentElement.parentElement.addEventListener(
      "mouseenter",
      handleHover
    );
    video.current.parentElement.parentElement.addEventListener(
      "mouseleave",
      handleLeave
    );
  }, []);

  return (
    <div className=" flex  flex-col gap-1 bg-white w-full max-w-[380px] ">
      <div className="relative rounded-xl overflow-hidden  ">
        <img src={videoDetail.thumbnails[0]?.url} className="w-full h-56" />
        <div
          className=" absolute    -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 pl-[14px] pr-3 py-3  hidden  bg-slate-100  opacity-80 rounded-full "
          ref={video}
        >
          <FaPlay size={24} fill="#525252" />
        </div>
      </div>

      <div className="relative flex gap-3 ">
        <div className="shrink-0">
          <ChannelAvatar
            img={videoDetail.author.avatar[0].url}
            type="channelAvatar"
          />
        </div>

        <div className="absolute text-sm rounded-xl bg-slate-100 p-1 right-6 -top-12">
          {formatTime(videoDetail.lengthSeconds)}
        </div>
        <div className="flex flex-col">
          <h1 className="text-[17px] font-semibold line-clamp-2 ">
            {videoDetail.title}
          </h1>

          <div className="text-sm text-gray-600 ">
            <div className="flex">
              {videoDetail.author?.title}&nbsp;&nbsp;
              {videoDetail.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <RiVerifiedBadgeFill size={20} />
              )}
            </div>
            <div>
              {formatNumber(videoDetail.stats?.views)} views{" "}
              <span className="font-bold text-xl inline-block -translate-y-1"></span>{" "}
              {videoDetail.publishedTimeText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
