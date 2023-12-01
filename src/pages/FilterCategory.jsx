import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../context/VideoContext";
import Loader from "../component/Loader";
import VideoItem from "../component/VideoItem";

function FilterCategory() {
  const { isLoading, fetchData, data } = useVideo();
  const param = useParams();
  useEffect(() => {
    console.log(param.category);
    fetchData(param.category);
  }, [param.category, fetchData]);

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

export default FilterCategory;
