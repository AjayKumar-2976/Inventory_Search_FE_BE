const data = require("../data/inventory.json");

const searchProducts = (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;

  let filtered = [...data];

  // ❌ invalid price check
  if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
    return res.status(400).json({ message: "Invalid price range" });
  }

  // 🔍 search by name
  if (q) {
    filtered = filtered.filter(item =>
      item.productName.toLowerCase().includes(q.toLowerCase())
    );
  }

  // 📂 category filter
  if (category) {
    filtered = filtered.filter(item =>
      item.category.toLowerCase() === category.toLowerCase()
    );
  }

  // 💰 min price
  if (minPrice) {
    filtered = filtered.filter(item =>
      item.price >= Number(minPrice)
    );
  }

  // 💰 max price
  if (maxPrice) {
    filtered = filtered.filter(item =>
      item.price <= Number(maxPrice)
    );
  }

  return res.json(filtered);
};

module.exports = { searchProducts };