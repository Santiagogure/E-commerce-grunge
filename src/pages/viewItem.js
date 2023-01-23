import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { AppContext } from "../context/dataProvider";
import { BootstrapButton } from "react-bootstrap-button";

export const ViewItem = () => {
  const params = useParams();
  const value = useContext(AppContext);
  const products = value.products;
  const addCart = value.addCart
  const setPages = value.setPages
  const errorBuy = value.errorBuy
  const setErrorBuy = value.setErrorBuy
  const upQuantity = value.upQuantity
  const substractQuantity = value.substractQuantity



   
  const item = products.find((product) => {
    return product.id === Number(params.id);
  });

  const { name, id, price, amount, src } = item;

  return (
    <div className="mb-10 lg:mb-0">
      <header className="w-11/12 xl:w-4/5 m-auto flex justify-center lg:justify-between items-center py-5">
      <Link className="no-underline" to="/">
      <h1 onClick={() => setPages(1)} className="text-2xl font-semibold text-black  cursor-pointer">
        E-<span className="text-rose-400">Commerce</span>    
      </h1>
      </Link>
      </header>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center mt-3 lg:space-x-10 mr-7 lg:ml-0">
        <div className="flex items-center justify-center">
          <img className="w-4/6" alt="" src={src}></img>
        </div>
        <div className="flex flex-col items-center justify-center lg:items-start space-y-4">
          <p className="text-2xl lg:text-3xl max-w-[150px] lg:max-w-[250px] font-bold">{name}</p>
          <h3 className="text-4xl">{price}</h3>
          <div className="flex flex-row space-x-2">
            <box-icon type="solid" name="credit-card"></box-icon>
            <p className="text-sm lg:text-base font-semibold ">
              <span className="text-rose-400">Pay in 6 installments for </span>
              {Math.round(price / 6 + 100)}
            </p>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="">Talle</p>
            <select className="flex w-[150px] lg:w-[320px] h-[35px] border-solid border-2 border-black rounded-lg mr-0" name="select">
              <option value="value1" selected>
                XS
              </option>
              <option value="value2">S</option>
              <option value="value3">M</option>
              <option value="value3">L</option>
              <option value="value3">XXL</option>
              <option value="value3">XXXL</option>
            </select>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 mb-10">
            <div className="flex flex-row items-center justify-center space-x-5 ">
            <p className="mt-3 cursor-pointer" onClick={() => substractQuantity(id)}>-</p>
            <p className="mt-3">{amount}</p>
            <p className="mt-3 cursor-pointer" onClick={() => upQuantity(id)}>+</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <BootstrapButton
                variant="danger"
                className=""
                onClick={() => addCart(id)}
              >
                Add To Cart
              </BootstrapButton>
            </div>
          </div>
          {errorBuy ? 
              <p className="text-black w-[280px]">¡No puedes comprar ni agregar items al carrito si no estas registrado!</p>
              :
              ''
              }
        </div>
      </div>
    </div>
  );
};
