import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
      <p className="text-sm text-gray-500">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductItem;
