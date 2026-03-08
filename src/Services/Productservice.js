
// const BASE_URL = "https://ecomerence-backened.onrender.com/ecomerence";
 const BASE_URL = "https://ecomerence-backened.onrender.com/ecomerence";

export const fetchurl = async (id = "", title = "", options) => {
  try {
    const res = await fetch(`${BASE_URL}?id=${id}&&title=${title}`, options);
    if (!res) throw new Error("error in fetching data");
    if (res.ok) {
      return await res.json();
    }
    
  } catch (err) {
    console.error("fetch error", err);
  }
};
