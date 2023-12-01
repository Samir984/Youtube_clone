const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "af5d3a150emshef6aa77462e48ccp19d1e0jsnb540ffe95929",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

const fetchApiData = async function (query) {
  try {
    const res = await fetch(`${BASE_URL}/${query}`, options);
    if (!res.ok) throw new Error("fail to fetch data");
    const data = await res.json();
    return data;
  } catch (err) {
    throw Error(err);
  }
};

export { fetchApiData };
