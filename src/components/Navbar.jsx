import React, { useState, useContext } from "react";
import DataContext from "../context/DataContextProvider";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { HiMenu } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const { cart, searchText, setsearchText } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-3 h-20 px-3 sm:px-4 md:px-6 bg-[#222121] text-white border-b border-b-[#4e4d4d] sticky top-0 z-50">
      <div>
        <Link to="/" className="h-15 w-15">
          <img src={`${import.meta.env.BASE_URL}ecommerce-logo.png`} alt="" className="h-15 w-15 cover rounded-4xl" />
            </Link>
        
      </div>

      {/* Home link + search - hidden on mobile, visible from md screens up */}
      <div className="hidden md:flex items-center gap-3">
       
        <CiSearch className="mt-1 text-xl" />
        <input
          type="text"
          placeholder="search product"
          className="focus:outline-none border-b border-b-white w-40 lg:w-100 -ml-2"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-3 sm:gap-5 md:gap-8 relative">
        <Link to="/" className="hidden md:inline">Home</Link>
          <Link to="/products" className="hidden md:inline">Products</Link>
        <Link to="/cart" className="flex gap-1">
          <TiShoppingCart className="mr-4 sm:mr-6 md:mr-7 text-2xl sm:text-3xl" />
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-sm border px-3 py-1 rounded flex active:bg-[#3f4237] active:scale-95">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          <div className="text-[12px] absolute ml-4 sm:ml-6 md:ml-7 bg-red-400 px-1 rounded-xl">
            {cart.length}
          </div>
         
        </Link>

        {/* hamburger - visible only on mobile */}
        <HiMenu
          className="flex md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* mobile drawer */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-3/4 sm:w-2/3 max-w-xs h-full bg-[#222121] text-white shadow-lg p-6 flex flex-col gap-4 z-50">
          <div className="flex justify-between border-b border-b-gray-600 py-3"><h2 className="text-xl sm:text-2xl font-semibold">E-Commerce</h2>
          <button className="self-end text-2xl" onClick={() => setIsOpen(false)}>
            ✕
          </button>
          </div>
          
          <div className="flex items-center gap-2 border-b border-b-gray-500">
            <CiSearch className="text-xl" />
            <input
              type="text"
              placeholder="search product"
              className="focus:outline-none bg-transparent w-full"
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
            />
          </div>
<Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;