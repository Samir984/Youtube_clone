/* eslint-disable react/prop-types */
import NavContent from "./NavContent";
import YoutubeToggle from "./YoutubeToggle";

function MobileNavContent({ isExpand, mobileNav }) {
  return (
    <>
      <YoutubeToggle />
      <NavContent isExpand={isExpand} mobileNav={mobileNav} />
    </>
  );
}

export default MobileNavContent;
