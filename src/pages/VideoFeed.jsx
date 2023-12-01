import { useEffect } from "react";
import { useNavContext } from "../context/NavContext";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";

function VideoFeed() {
  const [seatchParam] = useSearchParams();
  const videoId = seatchParam.get("id");
  console.log(videoId);
  const { setMobileNav, setVideoPlayingPage } = useNavContext();
  useEffect(() => {
    setMobileNav(true);
    setVideoPlayingPage(true);
    return () => {
      setMobileNav(false);
      setVideoPlayingPage(false);
    };
  }, [setMobileNav, setVideoPlayingPage]);

  return (
    <div className="mt-2  m-auto">
      <h1 className="p-4 font-bold font-mono text-center text-2xl text-gray-700">
        Video
      </h1>
      <div className="p-3 max-w-3xl m-auto ">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          playing={false}
          controls={true}
          width="100%"
        />
      </div>
    </div>
  );
}

export default VideoFeed;
