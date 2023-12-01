import { useEffect } from "react";
import { useNavContext } from "../context/NavContext";

function VideoFeed() {
  const { setMobileNav, setVideoPlayingPage } = useNavContext();
  useEffect(() => {
    setMobileNav(true);
    setVideoPlayingPage(true);
    return () => {
      setMobileNav(false);
      setVideoPlayingPage(false);
    };
  }, [setMobileNav, setVideoPlayingPage]);
  return <div>videoFeeds</div>;
}

export default VideoFeed;
