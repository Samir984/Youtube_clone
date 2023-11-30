/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { fetchHomeData } from "../services/youtubeAPI";

const VideoContext = createContext();
function VideoProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");

  // console.log("d", data);
  useEffect(() => {
    fetchData();
    async function fetchData() {
      setLoading(true);
      try {
        const videos = await fetchHomeData();
        setData(videos);
      } catch (err) {
        setData({ Error: err });
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return (
    <VideoContext.Provider value={{ loading, query, setQuery, data }}>
      {children}
    </VideoContext.Provider>
  );
}

function useVideo() {
  return useContext(VideoContext);
}
export { VideoProvider, useVideo };
