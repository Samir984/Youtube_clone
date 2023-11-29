import { Outlet } from "react-router-dom";

function Feed() {
  return (
    <div className="grow bg-red-300">
      <Outlet />
    </div>
  );
}

export default Feed;
