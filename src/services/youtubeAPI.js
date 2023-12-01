const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4425e276b7msh37f97d10a64efe5p116987jsn2fb9a4e8d6b2",
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
