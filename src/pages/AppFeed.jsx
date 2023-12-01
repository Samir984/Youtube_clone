import Loader from "../component/Loader";
import { useVideo } from "../context/VideoContext";
import Video from "../component/Video";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function AppFeed() {
  const { isLoading, data, fetchData } = useVideo();
  useEffect(() => {
    fetchData("/home/?hl=en&gl=np");
    console.log("appfeed");
  }, [fetchData]);
  if (isLoading) return <Loader />;
  if (data?.Error) return <Loader message={data.Error} />;
  const { contents } = data;

  return (
    <div className="p-3 h-[90vh] overflow-y-scroll">
      <div className="grid justify-items-center gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 ">
        {contents?.map((content) => {
          return (
            <NavLink
              key={content.video?.videoId}
              to={`/watch?id=${content.video?.videoId}`}
            >
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
