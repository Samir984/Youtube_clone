import Loader from "../component/Loader";
import { useVideo } from "../context/VideoContext";
import VideoItem from "../component/VideoItem";

function AppFeed() {
  const { isLoading, data } = useVideo();
  if (isLoading) return <Loader />;
  if (data?.Error) return <Loader message={data.Error} />;
  const { contents } = data;

  return (
    <div className="p-3 h-[90vh] overflow-y-scroll">
      <div className="grid justify-items-center gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 ">
        {contents?.map((content) => {
          return <VideoItem content={content} key={content.video?.videoId} />;
        })}
      </div>
    </div>
  );
}

export default AppFeed;

// cursorNext
