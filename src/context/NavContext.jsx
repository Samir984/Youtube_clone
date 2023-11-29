/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const NavContext = createContext();
function NavProvider({ children }) {
  const [isExpand, setIsExpand] = useState(true);
  const [mobileNav, setMobileNav] = useState(() =>
    window.innerWidth < 1200 ? true : false
  );

  function handelResize() {
    if (window.innerWidth < 1200) {
      setMobileNav(true);
    } else {
      setMobileNav(false);
    }
  }
  console.log(mobileNav);
  useEffect(function () {
    window.addEventListener("resize", handelResize);

    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  return (
    <NavContext.Provider
      value={{
        isExpand,
        setIsExpand,
        mobileNav,
        setMobileNav,
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
