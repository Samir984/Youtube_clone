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
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");

  console.log("d", query);
  
  const fetchData = useCallback(async function fetchData(query) {
    setIsLoading(true);
    try {
      const videos = await fetchApiData(query);
      console.log(query);
      setData(videos);
    } catch (err) {
      setData({ Error: err });
    } finally {
      setIsLoading(false);
    }
  }, []);

  console.log(data);
  return (
    <VideoContext.Provider value={{ isLoading, data, setQuery, fetchData }}>
      {children}
    </VideoContext.Provider>
  );
}

function useVideo() {
  return useContext(VideoContext);
}
export { VideoProvider, useVideo };
