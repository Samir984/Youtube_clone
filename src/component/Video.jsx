import { formatNumber, formatTime } from "../utils/helper";
import ChannelAvatar from "./ChannelAvatar";
import { RiVerifiedBadgeFill } from "react-icons/ri";

/* eslint-disable react/prop-types */
function Video({ video }) {
  const videoDetail = video.video;

  return (
    <div className="flex flex-col gap-1 bg-white">
      <div className="rounded-xl overflow-hidden">
        <img src={videoDetail.thumbnails[0].url} className="" />
      </div>

      <div className="relative flex gap-4">
        <div className=" ">
          <ChannelAvatar src={videoDetail.author.avatar[0].url} />
        </div>

        <div className="absolute text-sm rounded-xl bg-slate-100 p-1 right-6 -top-12">
          {formatTime(videoDetail.lengthSeconds)}
        </div>
        <div className="flex flex-col">
          <h1 className="text-[17px] font-semibold">{videoDetail.title}</h1>

          <div className="text-sm text-gray-600 ">
            <div className="flex">
              {videoDetail.author.title}&nbsp;&nbsp;
              {videoDetail.author.badges[0].type === "VERIFIED_CHANNEL" && (
                <RiVerifiedBadgeFill size={20} />
              )}
            </div>
            <div>
              {formatNumber(videoDetail.stats.views)} views{" "}
              <span className="font-bold text-xl inline-block -translate-y-1">
                .
              </span>{" "}
              {videoDetail.publishedTimeText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;

export const videos = {
  contents: [
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKaKwjIJcbOzfUfKB87wKrxTJssS11Udfe4EOC8ijg=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@GugaFoods",
          channelId: "UCfE5Cz44GlZVyoaYTHJbuZw",
          title: "Guga Foods",
        },
        badges: [],
        isLiveNow: false,
        lengthSeconds: 1233,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/ksiskwlNNVs/mqdefault_6s.webp?du=3000&sqp=CLGcnqsG&rs=AOn4CLBzoyirqM6TTMPy3ZkRa0f_Ft-XRA",
            width: 320,
          },
        ],
        publishedTimeText: "10 days ago",
        stats: {
          views: 3331780,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/ksiskwlNNVs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7mLPeb6Cr7OTVR-asIQ0Kh-_1CQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/ksiskwlNNVs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIigbaeTNsJKlh0LCFipqAzxCPfg",
            width: 720,
          },
        ],
        title: "I Cooked 100 Years of Burgers",
        videoId: "ksiskwlNNVs",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/PLsX6LIg5JbMJR9v7eTD7nQOPmZN16_X7h_uACw5qeWLAewiNfasZFsxQ48Dn8wZ_4McKUPZSA=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@failarmy",
          channelId: "UCPDis9pjXuqyI7RYLJ-TTSA",
          title: "FailArmy",
        },
        badges: [],
        isLiveNow: false,
        lengthSeconds: 721,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/4MJb60MzOag/mqdefault_6s.webp?du=3000&sqp=COCanqsG&rs=AOn4CLBOQH4Aaj1KDCTq-Bedvlwz6eGNEA",
            width: 320,
          },
        ],
        publishedTimeText: "8 months ago",
        stats: {
          views: 17349972,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/4MJb60MzOag/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxp9ebx6r9Es6BaeGgZvpI3lmf6A",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/4MJb60MzOag/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKbKQai569ZnitmfvNFcfi9WC_NQ",
            width: 720,
          },
        ],
        title: "Idiots In Cars | Bad Driving Fails Compilation",
        videoId: "4MJb60MzOag",
      },
    },
  ],

  // cursorNext: "NHFtRnNnS1FFaElQUmtWM2FHRjBYM1J2WDNkaGRHTm9HdHdSUTBKb05tOUJNVWhUTUU1b1RqSkdSVTVFV2xwVFZWSk9Xak5PU21OV1FsRlVWekZwVmtSc2MyUlZhRz"
};
