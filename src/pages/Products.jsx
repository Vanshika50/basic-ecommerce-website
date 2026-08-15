import React, { useContext, useState } from "react";
import DataContext from "../context/DataContextProvider";
import ProductCard from "../components/ProductCard";
import { RiLoader4Line } from "react-icons/ri";

const Products = () => {
  // which category is currently picked (starts as "all")
  const [category, setCategory] = useState("all");

  // get all products and the typed search text from context
  const { products, searchText ,loading } = useContext(DataContext);
  if(loading)return <div className="text-white flex items-center flex-col text-4xl"><div className="loader"/> Loading Products...</div>


  // go through every product one by one
  const finalList = products.filter((product) => {
    // check 1: does the title contain the search text?
    const titleMatches = product.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    // check 2: is "all" selected, OR does this product's category match?
    const categoryMatches = category === "all" || product.category === category;

    // keep this product only if BOTH checks pass
    return titleMatches && categoryMatches;
  });

  // list of all unique categories, with "all" added at the startnpm install react-toastify
  const categoryList = ["all", ...new Set(products.map((product) => product.category))];

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)} id="" className="mb-4 border rounded px-3 py-2 bg-[#484e37] font-medium uppercase text-white w-full sm:w-auto">
        Select category
        {categoryList.map((category)=>(
          <option key={category} value={category} className="uppercase font-medium text-white">{category}</option>
        ))}
      </select>
       <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 sm:p-4 md:p-6 text-white">
      {finalList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
   
  );
};

export default Products;