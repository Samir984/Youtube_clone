import { useSearchParams } from "react-router-dom";
import { useVideo } from "../context/VideoContext";
import { useEffect } from "react";
import Loader from "../component/Loader";

import VideoItem from "../component/VideoItem";

function SearchFeed() {
  const [searchParams] = useSearchParams();
  const { fetchData, isLoading, data } = useVideo();
  const query = searchParams.get("query");

  useEffect(() => {
    fetchData(query);
  }, [fetchData, query]);

  if (isLoading) return <Loader />;
  if (data?.Error) return <Loader message={data.Error} />;
  const { contents } = data;

  return (
    <div className="grid grid-cols-1 gap-3 justify-items-center">
      {contents?.map((content) => {
        return <VideoItem content={content} key={content.video?.videoId} />;
      })}
    </div>
  );
}

export default SearchFeed;
