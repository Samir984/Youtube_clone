/* eslint-disable react/prop-types */
import { useNavContext } from "../context/NavContext";
import MobileNavContent from "./MobileNavContent";
import NavContent from "./NavContent";

function Nav() {
  const { setIsExpand, isExpand, mobileNav } = useNavContext();

  //when mobileNav is disable (windowWidth>1200)
  if (!mobileNav) {
    return (
      <nav
        className={`h-[93vh] overflow-y-scroll  ${isExpand ? "w-56" : "w-24"}`}
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
          <div className=" w-56 z-50 text-gray-900 ">
            <MobileNavContent isExpand={isExpand} mobileNav={mobileNav} />
          </div>
        </nav>
        <div
          className={`${
            isExpand
              ? "fixed w-full h-full top-0 bg-gray-500 z-10 opacity-40"
              : "hidden"
          } `}
          onClick={() => setIsExpand((prev) => !prev)}
        ></div>
      </>
    );
  }
}
export default Nav;
