import { Outlet } from "react-router-dom";

function Feed() {
  return (
    <div className="grow">
      <Outlet />
    </div>
  );
}

export default Feed;
