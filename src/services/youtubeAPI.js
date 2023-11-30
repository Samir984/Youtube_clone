const url = "https://youtube138.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

// const fetchHomeData = async function () {
//   try {
//     const res = await fetch(`${url}/home/?hl=en&gl=np`, options);
//     console.log(res);
//     if (!res.ok) throw new Error("fail to fetch data");
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     throw Error(err);
//   }
// };

// export { fetchHomeData };

const fetchHomeData = async function () {
  const data = await new Promise((resolve, reject) =>
    setTimeout(() => resolve("samir is king"), 5000)
  );
  return data;
};

export { fetchHomeData };


