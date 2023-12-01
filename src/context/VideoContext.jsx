/* eslint-disable react/prop-types */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchApiData } from "./../services/youtubeAPI";

const VideoContext = createContext();
function VideoProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");

  const fetchData = useCallback(async function fetchData(query) {
    setIsLoading(true);
    try {
      const videos = await fetchApiData(`search/?q=${query}&hl=en&gl=np`);
      setData(videos);
    } catch (err) {
      setData({ Error: err });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(`home/?hl=en&gl=np`);
  }, [fetchData]);

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
