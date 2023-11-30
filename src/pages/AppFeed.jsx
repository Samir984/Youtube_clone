import { fetchHomeData } from "../services/youtubeAPI";
import Loader from "../component/Loader";
import { useVideo } from "../context/VideoContext";
import Video, { videos } from "../component/Video";

function AppFeed() {
  const { loading } = useVideo();
  return (
    <div className="p-3 h-screen overflow-y-scroll">
      {loading && <Loader />}
      <div className="grid justify-items-center gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        <Video video={videos.contents[0]} />
        <Video video={videos.contents[0]} />
        <Video video={videos.contents[0]} />
        <Video video={videos.contents[0]} />
        <Video video={videos.contents[0]} />
        <Video video={videos.contents[0]} />
        <Video video={videos.contents[0]} />
        <Video video={videos.contents[0]} />
        <Video video={videos.contents[0]} />
        <Video video={videos.contents[0]} />
        <Video video={videos.contents[0]} />
        <Video video={videos.contents[0]} />
      </div>
    </div>
  );
}

export default AppFeed;
