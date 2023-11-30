/* eslint-disable react/prop-types */
import { useNavContext } from "../../context/NavContext";
import MobileNavContent from "./MobileNavContent";
import NavContent from "./NavContent";

function Nav() {
  const { setIsExpand, isExpand, mobileNav } = useNavContext();

  //when mobileNav is disable (windowWidth>1200)
  if (!mobileNav) {
    return (
      <nav
        className={`h-[93vh] overflow-y-scroll shrink-0 ${isExpand ? "w-56" : "w-24"}`}
      >
        <NavContent isExpand={isExpand} mobileNav={mobileNav} />
      </nav>
    );
  }
  //when mobileNav is enable (windowWidth<1200)
  else {
    return (
      <>
        <nav
          className={`fixed w-56  top-0 h-screen overflow-y-scroll z-40  bg-white transition-all duration-500  ${
            isExpand ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <MobileNavContent isExpand={isExpand} mobileNav={mobileNav} />
        </nav>
        <div
          className={`${
            isExpand
              ? "fixed w-full h-full top-0 bg-gray-500 z-20 opacity-40"
              : "hidden"
          } `}
          onClick={() => setIsExpand((prev) => !prev)}
        ></div>
      </>
    );
  }
}
export default Nav;
