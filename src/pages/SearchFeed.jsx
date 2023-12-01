import { NavLink, useSearchParams } from "react-router-dom";
import { useVideo } from "../context/VideoContext";
import { useEffect } from "react";
import Loader from "../component/Loader";
import Video from "../component/Video";

function SearchFeed() {
  const [searchParams] = useSearchParams();
  const { fetchData, isLoading, data } = useVideo();
  const { contents } = data;
  const query = searchParams.get("query");
  useEffect(() => {
    fetchData(`/search/?q=${query}&hl=en&gl=US`);
  }, [fetchData, query]);
  console.log(contents);
  if (isLoading) return <Loader />;
  if (data?.Error) return <Loader message={data.Error} />;
  return (
    <div className="grid grid-cols-1 gap-3 justify-items-center">
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
  );
}

export default SearchFeed;
