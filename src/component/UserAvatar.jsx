/* eslint-disable react/prop-types */
function UserAvatar({ user }) {
  return (
    <img src={user} alt="user" className=" bg-black w-10 h-10 rounded-full max-[510px]:hidden sm:block " />
  );
}

export default UserAvatar;
