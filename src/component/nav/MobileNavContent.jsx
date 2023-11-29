/* eslint-disable react/prop-types */
import NavContent from "./NavContent";
import YoutubeToggle from "../YoutubeToggle";

function MobileNavContent({ isExpand, mobileNav }) {
  return (
    <>
      <div className="px-2 py-2">
        <YoutubeToggle />
      </div>
      <NavContent isExpand={isExpand} mobileNav={mobileNav} />
    </>
  );
}

export default MobileNavContent;
