/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useState } from "react";
import { fetchApiData } from "./../services/youtubeAPI";

const VideoContext = createContext();
function VideoProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState("");

  console.log("d", data);

  const fetchData = useCallback(async function fetchData(query) {
    setIsLoading(true);
    try {
      const videos = await fetchApiData(query);
      setData(videos);
    } catch (err) {
      setData({ Error: err });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <VideoContext.Provider value={{ isLoading, data, fetchData }}>
      {children}
    </VideoContext.Provider>
  );
}

function useVideo() {
  return useContext(VideoContext);
}
export { VideoProvider, useVideo };
