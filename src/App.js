import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import productsData from "./data/products.json";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? product.category === selectedCategory : true)
    );
  });

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 ">
            Product Catalog
          </h1>
          
         
          <div className="flex justify-between items-center mb-8">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          <Routes>
            <Route
              path="/"
              element={<ProductList products={filteredProducts} />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetails products={products} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
