import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id.toString() === id);

  if (!product) {
    return <p className="text-center text-gray-500">Product not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold text-gray-800 mb-4">
        Price: ${product.price.toFixed(2)}
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetails;
