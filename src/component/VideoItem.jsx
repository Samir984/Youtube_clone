/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Video from "./Video";

function VideoItem({ content }) {
  return (
    <NavLink to={`/watch?id=${content.video?.videoId}`}>
      <Video videoDetail={content.video} />
    </NavLink>
  );
}

export default VideoItem;
