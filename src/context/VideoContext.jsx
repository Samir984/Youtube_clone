/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { fetchHomeData } from "../services/youtubeAPI";

const VideoContext = createContext();
function VideoProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");


  console.log("d", loading);
  useEffect(() => {
    fetchData();
    async function fetchData() {
      setLoading(true);
      const data = await fetchHomeData();
      setLoading(false);
      return data
    }
  }, []);

  return (
    <VideoContext.Provider value={{ loading, query, setQuery }}>
      {children}
    </VideoContext.Provider>
  );
}

function useVideo() {
  return useContext(VideoContext);
}
export { VideoProvider, useVideo };
