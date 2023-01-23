import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/dataProvider';
import { Link } from "react-router-dom";

export const FilterProduct = () => {

  const value = useContext(AppContext);
  const products = value.products;
  const valueSearch = value.valueSearch
  const [showMessage, setShowMessage] = useState(false);



  const filteredItems =  products.filter((value) => {
    if(valueSearch.length === 0) {
      return value
    } else if(value.name.toLowerCase().includes(valueSearch.toLowerCase())) {
        return value
    } 
 })

  useEffect(() => {
  if (filteredItems.length <= 0) {
    setTimeout(() => {
      setShowMessage(true);
    }, 300);
  } else {
    setShowMessage(false)
  }
}, [filteredItems.length])


  return (
    <>
      {showMessage ? 
      <div>
        <h1>No hay resultados</h1> 
      </div>
      : 
      <div className="products grid xl:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-12 -content-center" id="products">
        {
          filteredItems.slice(0,8).map((product) => (
            <div className="product h-[350px] space-y-2 cursor-pointer ">   
              <Link to={`/view/${product.id}`}>
              <img
                className="w-full h-4/5 object-cover"
                alt={product.name}
                src={product.src}
              ></img>
              </Link>
              <p className="font-semibold text-gray-600">{product.name}</p>
              <h1 className="text-xl font-semibold">${product.price}</h1>             
            </div>
          ))
        }
      </div>
      }
      </>
  )
}
