import React, { useContext, useEffect } from "react";
import {
  AiFillHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { AppContext } from "../context/dataProvider";

export const Header = () => {
  

  const value = useContext(AppContext)
  const displayCart = value.displayCart
  const setDisplayCart = value.setDisplayCart
  const setPages = value.setPages
  const passRegister = value.passRegister
  const setPassRegister = value.setPassRegister
  const username = value.username;
  const setUsername = value.setUsername
  const closePage = value.closePage
  const setErrorBuy = value.setErrorBuy
  console.log(passRegister)
  
  useEffect(() => {
    if (localStorage.getItem("passRegister")) {
        setPassRegister(localStorage.getItem("passRegister") === 'true');
    }
    setUsername(localStorage.getItem("username"))
    setErrorBuy(false)
}, []);

  

  return (
    <header className="w-11/12 xl:w-4/5 m-auto flex justify-between items-center py-5">
      <Link className="no-underline" to="/">
      <h1 onClick={() => setPages(1)} className="text-2xl font-semibold text-black  cursor-pointer">
        E-<span className="text-rose-400">Commerce</span>
      </h1>
      </Link>
      <div>
        <ul className="flex space-x-8 text-base hidden lg:flex cursor-pointer">
          <a className="text-black no-underline"  href="#hero">Home</a>
          <a className="text-black no-underline" href="#products">Products</a>
          <a className="text-black no-underline" href="#about">About us</a>
          <a className="text-black no-underline" href="#footer">Contact</a>
        </ul>
      </div>
      <div className="flex space-x-8 cursor-pointer lg:mb-2.5">
        {passRegister === true ? 
        <div className="flex flex-row ">
        <a className="text-black no-underline text-base font-bold mx-4">{username}</a>

        </div>
        : 
      <Link to="/login">
      <a className="text-black no-underline text-base font-bold"  >Log In</a>
      </Link>
      } 
        <AiOutlineShoppingCart size={"1.5rem"} onClick={() => setDisplayCart(!displayCart)} />
      </div>
    </header>
  );
};
