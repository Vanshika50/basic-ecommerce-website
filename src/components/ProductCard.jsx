import React, { useContext } from "react";
import DataContext from "../context/DataContextProvider";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(DataContext);
  return (
    <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333] hover:scale-105 transition-transform duration-300 relative h-80 sm:h-83.75 md:h-87.5 w-full max-w-70 mx-auto">
      {/* thumbnail is image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 sm:h-44 md:h-48 w-full object-contain"
      />
      <h3 className="line-clamp-2 font-medium text-lg sm:text-xl">
        {product.title}
      </h3>
      <p className="text-[#c2c2c2]">$ {product.price}</p>
      <button
        className="mt-2 w-[90%] bg-[#3f4237] text-white py-2 rounded-[7px] absolute bottom-3 font-semibold clear-start active:scale-95 active:bg-[#565f45]"
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
