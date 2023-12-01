/* eslint-disable react/prop-types */
function Loader({ message }) {
  return (
    <div className="text-3xl font-mono font-semibold text-center mt-40">
      {message ? `${message}(api error)` : "isLoading ..."}
    </div>
  );
}

export default Loader;
