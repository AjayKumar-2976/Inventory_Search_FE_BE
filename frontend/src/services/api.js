const BASE_URL = "http://localhost:5000";

export const fetchProducts = async (params) => {
  try {
    const query = new URLSearchParams(params).toString();

    const res = await fetch(`${BASE_URL}/search?${query}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};