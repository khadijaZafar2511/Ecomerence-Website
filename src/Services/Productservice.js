
// const BASE_URL = "https://ecomerence-backened.onrender.com/ecomerence";
 const BASE_URL = "http://localhost:3000/ecomerence";

export const fetchurl = async (search="", options) => {
  try {
    const res = await fetch(`${BASE_URL}?products=${search}`, options);
    if (!res) throw new Error("error in fetching data");
    if (res.ok) {
      return await res.json();
    }
    
  } catch (err) {
    console.error("fetch error", err);
  }
};
