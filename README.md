# Inventory Search Project 

##  Overview

This project is a full-stack inventory search application where users can search products using filters like product name, category, and price range. It simulates a real-world inventory system used by buyers to find products efficiently.

---

## Tech Stack

* **Frontend:** React.js (Vite)
* **Backend:** Node.js + Express
* **Data:** Static JSON file
* **Hosting:** Vercel (Frontend), Render (Backend)

---

##  Features

* Search products by name (partial match)
* Filter by category
* Filter by price range (min & max)
* Combine multiple filters
* Case-insensitive search
* Dynamic URL query parameters
* Persistent filters on page refresh
* Responsive UI with clean design
* Loading state and “No results found” handling

---

##  How It Works

* The frontend collects user inputs and builds query parameters dynamically.
* These parameters are sent to the backend API (`/search`).
* The backend filters data based on:

  * product name
  * category
  * price range
* The filtered results are returned and displayed in the UI.

---

## How to Run Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Example API Usage

```bash
/search?q=laptop&category=Electronics&minPrice=50000&maxPrice=100000
```



---

##  Demo Video


---

## Live Links

* Frontend: https://inventory-search-fe-be-zsmo.vercel.app/
* Backend: https://your-backend.onrender.com
