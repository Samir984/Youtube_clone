import { useNavContext } from "../context/NavContext";

function Nav() {
  const { setIsExpand, isExpand, mobileNav } = useNavContext();
  //when mobileNav is disable (windowWidth>1200)
  if (!mobileNav) {
    return (
      <nav
        className={`bg-red-400 h-[2000px] ${isExpand ? "w-56" : "w-16"}`}
      ></nav>
    );
  }
  //when mobileNav is enable (windowWidth<1200)
  else {
    return (
      <>
        <nav
          className={`fixed w-56 h-full top-0  z-30  bg-white transition-all duration-500  ${
            isExpand ? "translate-x-0" : "-translate-x-full"
          } `}
          // onClick={() => setIsExpand((prev) => !prev)}
        >
          <div className="bg-slate-50 w-56 z-50 text-gray-900 ">nav</div>
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

// ${isExpand ? "bg-black z-30" : "none"}
export default Nav;
