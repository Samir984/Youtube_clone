import Loader from "../component/Loader";
import { useVideo } from "../context/VideoContext";
import Video from "../component/Video";
import { NavLink } from "react-router-dom";

function AppFeed() {
  const { loading, data } = useVideo();
  const { contents } = data;
  if (loading || data === "") return <Loader />;
  if (data.Error) return <Loader message={data.Error} />;

  return (
    <div className="p-3 h-[90vh] overflow-y-scroll">
      <div className="grid justify-items-center gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 ">
        {contents.map((content) => {
          return (
            <NavLink key={content.video.videoId}>
              <Video videoDetail={content.video} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default AppFeed;

// cursorNext
