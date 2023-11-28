import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import AppFeed from "./pages/AppFeed";
import VideoFeed from "./pages/VideoFeed";
import SearchFeed from "./pages/SearchFeed";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <AppFeed />,
       
      },
      {
        path: "/search",
        element: <SearchFeed />,
      },
      {
        path: "/video",
        element: <VideoFeed />,
      },
      {
        path: "/*",
        element: <PageNotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
