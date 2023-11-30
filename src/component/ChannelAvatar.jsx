/* eslint-disable react/prop-types */
function ChannelAvatar({ img }) {
  return (
    <img src={img} alt="user" className=" bg-black w-10 h-10 rounded-full max-[410px]:hidden sm:block " />
  );
}

export default ChannelAvatar;
