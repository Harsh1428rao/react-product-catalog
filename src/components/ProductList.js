import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="py-6">
      <div className="flex space-x-6 overflow-x-auto pb-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-10 max-w-xs"
          >
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-t-lg transition-transform transform group-hover:scale-80 duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
              <p className="text-gray-600 text-sm">${product.price.toFixed(2)}</p>
              <Link
                to={`/product/${product.id}`}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
