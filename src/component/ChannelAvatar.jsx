/* eslint-disable react/prop-types */
function ChannelAvatar({ img, type = "userAvatar" }) {
  return (
    <img
      src={img}
      alt="user"
      className={` bg-black w-10 h-10 rounded-full ${
        type === "userAvatar" ? "max-[360px]:hidden" : ""
      } sm:block `}
    />
  );
}

export default ChannelAvatar;
