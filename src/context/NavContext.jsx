/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const NavContext = createContext();
function NavProvider({ children }) {
  const [isExpand, setIsExpand] = useState(true);
  const [mobileNav, setMobileNav] = useState(() =>
    window.innerWidth < 1200 ? true : false
  );
  const [videoPlayingPage, setVideoPlayingPage] = useState(false);

  useEffect(
    function () {
      function handelResize() {
        if (videoPlayingPage) {
          setMobileNav(true);
        } else if (window.innerWidth < 1200) {
          setMobileNav(true);
        } else {
          setMobileNav(false);
        }
      }

      window.addEventListener("resize", handelResize);

      return () => {
        window.removeEventListener("resize", handelResize);
      };
    },
    [videoPlayingPage]
  );

  return (
    <NavContext.Provider
      value={{
        isExpand,
        setIsExpand,
        mobileNav,
        setMobileNav,
        setVideoPlayingPage,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

function useNavContext() {
  return useContext(NavContext);
}

export { NavProvider, useNavContext };
