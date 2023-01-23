import React, { useContext } from "react";
import { AppContext } from "../context/dataProvider";
import { BootstrapButton } from "react-bootstrap-button";
import Counter from 'react-mui-counter'

export const CartItem = () => {
  const value = useContext(AppContext);
  const displayCart = value.displayCart;
  const setDisplayCart = value.setDisplayCart;
  const cart = value.cart;
  const setCart = value.setCart
  const upCartQuantity = value.upCartQuantity
  const substractCartQuantity = value.substractCartQuantity
  const total = value.total
  const setTotal = value.setTotal


  return (
    <div>
      {displayCart ? (
        <>
        {cart.length > 0 ?  (
        <div className={"fixed top-0 right-0 w-full lg:w-[400px] h-screen overflow-y-auto overflow-x-hidden p-20 bg-white shadow-lg border border-indigo-600 transition duration-150 z-10"}>
          <>
          <h2 className="text-center text-2xl mt-8">Your cart</h2>
          {/* Cart content*/}
          <div>
            {/* Test box*/}
            <div className="container">
              {cart.map((item) => (
                <div className=" flex flex-row justify-start items-center mt-10 lg:ml-20 ">
                  <div className="flex flex-row items-center justify-end space-x-5  ">
                    <img className=" w-[80px] lg:w-[120px]" src={item.src} alt=""></img>
                    <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="text-2xl uppercase w-[50px] mr-9">{item.name}</div>
                    <div className="flex flex-row items-center justify-center ml-7 space-x-3">
                    <div className="flex flex-row items-center justify-center">
                     {/* <Counter size="small" value={item.amount}/> */}
                     <div class="qty flex flex-row items-center justify-center">
                        <span class="minus bg-dark cursor-pointer" onClick={() => substractCartQuantity(item.id) }>-</span>
                        <input type="number" class="count" name="qty" value={item.amountCart}></input>
                        <span class="plus bg-dark cursor-pointer" onClick={() => upCartQuantity(item.id)}>+</span>
                    </div>
                    </div>
                    <div className="font-normal relative left-5 text-black">${item.price}</div>
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Total */}
          <div className="mt-5 mb-3 flex justify-center  border-t-2 border-black space-x-2">
            <div className="mt-3 text-base">Total: </div>
            <div className="mt-3 ">${total}</div>
          </div>
          {/* Buy */}
          <BootstrapButton
                variant="danger"
                onClick={() => setCart([])}
                className="flex mt-6 mr-auto mb-0 ml-auto py-2 px-5 text-base font-medium cursor-pointer">
                Buy now
              </BootstrapButton>
          <div>
          <i onClick={() => setDisplayCart(!displayCart)} className="fa-solid fa-x absolute top-4 right-10 text-2xl cursor-pointer"></i>
          </div>
          </>
        </div>
        )
        : 
        <div className={"fixed top-0 right-0 w-full lg:w-[400px] h-screen overflow-y-auto overflow-x-hidden p-20 bg-white shadow-lg border border-indigo-600 transition duration-150 z-10"}>
         <h2 className="text-center text-2xl mt-8">Your cart is empty</h2>
         <i onClick={() => setDisplayCart(!displayCart)} className="fa-solid fa-x absolute top-4 right-[40px]  text-2xl cursor-pointer"></i>
        </div>
          }
        </>
      ) : (
        ""
      )}
    </div>
  );
};
