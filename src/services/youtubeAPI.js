const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "54098a88b3msh5f37751fe8f0bd1p144be1jsn1b9be1058b5c",
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
