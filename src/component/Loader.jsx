/* eslint-disable react/prop-types */
function Loader({ message }) {
  return (
    <div className="text-3xl font-mono font-semibold text-center mt-40">
      {message ? `${message} (ApiKey expire)` : "isLoading ..."}
    </div>
  );
}

export default Loader;
