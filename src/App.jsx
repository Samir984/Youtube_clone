import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import AppFeed from "./pages/AppFeed";
import VideoFeed from "./pages/VideoFeed";
import SearchFeed from "./pages/SearchFeed";
import PageNotFound from "./pages/PageNotFound";
import { NavProvider } from "./context/NavContext";
import { VideoProvider } from "./context/VideoContext";
import FilterCategory from "./pages/FilterCategory";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <AppFeed />,
      },
      {
        path: "/results",
        element: <SearchFeed />,
      },
      {
        path: "/watch",
        element: <VideoFeed />,
      },
      {
        path: "/:category",
        element: <FilterCategory />,
      },
      {
        path: "/*",
        element: <PageNotFound />,
      },
    ],
  },
]);
function App() {
  return (
    <NavProvider>
      <VideoProvider>
        <RouterProvider router={router} />
      </VideoProvider>
    </NavProvider>
  );
}

export default App;
