
import React, { useContext, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AppContext } from "../context/dataProvider";
import imagePhone from "../images/phone.jpg";
import CustomPagination from "./customPagination";
import { FilterProduct } from "./filterProduct";
import { BootstrapButton } from "react-bootstrap-button";
import banner from '../images/banner.jpg'


export const Products = () => {
  const value = useContext(AppContext);
  const products = value.products;
  const pages = value.pages
  const valueSearch = value.valueSearch
  const setPages = value.setPages
  const show = value.show
  const setShow = value.setShow

  const filteredItems =  products.filter((value) => {
    if(valueSearch.length === 0) {
      return value
    } else if(value.name.toLowerCase().includes(valueSearch.toLowerCase())) {
        return value
    } 
 })

 function changeLessPage() {
  setPages(1)
 } 

 function changeMorePage() {
  setPages(2)
 }


  return (
    <div className="container w-4/5 m-auto space-y-10">
      <div className="flex justify-center lg:justify-between items-center p-2">
        <h4 className="mt-2 lg:mt-0 text-2xl">Products</h4>
        <div className="flex items-center space-x-5 hidden lg:flex">
          <button>
            <BsArrowLeft onClick={() => changeLessPage()} size={"1.5rem"} />
          </button>
          <button className="bg-rose-300 rounded-full p-2 text-white drop-shadow-xl">
            <BsArrowRight onClick={() => changeMorePage()} size={"1.5rem"} />
          </button>
        </div>
      </div>
      {show ? 
      <FilterProduct/>
      : 
      <section className="container">
      <div className=" container products grid xl:grid-cols-4 md:grid-cols-4 grid-cols-1 lg:grid-cols-2 gap-12  -content-center" id="products">
        {pages === 1
          ? products.slice(0, 8).map((product) => (
            <div className="flex flex-col">
              <div className=" product lg:h-[350px]  space-y-2 ">
                <Link to={`/view/${product.id}`}>
                <img
                  className=" w-full h-4/5 object-cover cursor-pointer"
                  alt={product.name}
                  src={product.src}
                ></img>
                </Link>
                <h5 className="font-semibold text-gray-600">{product.name}</h5>
                <h1 className="text-xl font-semibold">${product.price}</h1>
              </div>
              <Link to={`/view/${product.id}`}>
              <BootstrapButton
                variant="danger"
                className=" bg-black border-white flex mt-2 mr-auto mb-0 ml-auto py-2 px-5 text-base font-medium cursor-pointer
                           hover:bg-white hover:text-black transition-colors">
                See More
              </BootstrapButton>
              </Link>
              </div>
            ))
          : pages === 2
          ? products.slice(8, 16).map((product) => (
            <div className="flex flex-col">
              <div className="product lg:h-[350px] h-[500px] space-y-2 cursor-pointer ">
                <Link to={`/view/${product.id}`}>
                <img
                  className="w-full h-4/5 object-cover"
                  alt={product.name}
                  src={product.src}
                ></img>
                </Link>
                <h5 className="font-semibold text-gray-600">{product.name}</h5>
                <h1 className="text-xl font-semibold">${product.price}</h1>
              </div>
              <BootstrapButton
                variant="danger"
                className=" bg-black border-white flex mt-2 mr-auto mb-0 ml-auto py-2 px-5 text-base font-medium cursor-pointer">
                See More
              </BootstrapButton>
              </div>
            ))
          : ""}
      </div>
      </section>
      }
      <div className="flex items-center justify-center mt-10" id="about">
      <CustomPagination pages={pages} setPages={setPages}/>
      </div>
      <div className="w-full h-[300px] relative border border-black">
        <img
          className="w-full absolute top-0 rounded-xl h-full object-cover "
          src={banner}
          alt=""
        />
        <div className="w-11/12 xl:w-1/2 m-auto h-full flex flex-col justify-center space-y-3 text-white p-5 absolute">
          <h5 className=" text-base lg:text-4xl text-semibold text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h5>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="w-28 bg-white text-black p-2 rounded-md">See More</button>
        </div>
      </div>
    </div>
  );
};
