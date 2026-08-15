import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [loading, setloading] = useState(false);
  const [products, setproducts] = useState([]);
  const [cart, setcart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setloading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setproducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    // look inside the CART (not products) for this same id
    setcart((prevCart) => {
      const alreadyCart = prevCart.find((item) => item.id == product.id);
      if (alreadyCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    toast.success("Added to cart!");
  };
  const removeFromCart = (id) => {
    setcart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const updateQuantity = (id, amount) => {
    setcart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  return (
    <DataContext.Provider
      value={{
        products,
        setproducts,
        cart,
        setcart,
        searchText,
        setsearchText,
        addToCart,
        loading,
        removeFromCart,
        updateQuantity
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataContextProvider };
