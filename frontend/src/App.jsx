
import { useState } from "react";
import { fetchProducts } from "./services/api";
import "./App.css";
import { FaBoxOpen } from "react-icons/fa";

function App() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

 const handleSearch = async () => {
  setLoading(true);

 
  const params = {};

  if (q) params.q = q;
  if (category) params.category = category;
  if (minPrice) params.minPrice = minPrice;
  if (maxPrice) params.maxPrice = maxPrice;

  const queryString = new URLSearchParams(params).toString();

  window.history.pushState({}, "", `?${queryString}`);

  const data = await fetchProducts(params);

  setResults(data);
  setLoading(false);
};


  return (
    <div className="container">
      <h1 className="title">
  <FaBoxOpen className="icon" /> Inventory Search
</h1>

      <div className="filters">
        <input
          placeholder="Search product"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Fashion">Fashion</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      <div className="results">
        {loading ? (
          <p className="loading">🔄 Loading...</p>
        ) : results.length === 0 ? (
          <p className="no-results"> No products found ...</p>
        ) : (
          results.map((item) => (
            <div className="card" key={item.id}>
              <h3>{item.productName}</h3>
              <p>Category: {item.category}</p>
              <p className="price">₹{item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;