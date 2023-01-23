import React, { createContext, useEffect, useState } from 'react'
import Data from '../data/Data';
import { useForm } from '../hooks/submitForm';
export const AppContext = createContext()

export default function DataProvider({children}) {

   const [products, setProducts] = useState([])
   const [cart, setCart] = useState([])
   const [displayCart, setDisplayCart] = useState(false)
   const [pages, setPages] = useState(1)
   const [show, setShow] = useState(false)
   const [username, setUsername] = useState('');
   const [passRegister, setPassRegister] = useState(false)
   const [errorBuy, setErrorBuy] = useState(false)
   const [total, setTotal] = useState(0)




  useEffect(() => {
    const product = Data.products
    if(product) {
        setProducts(product)
    } else {
        setProducts([])
    }

    const cart = Data.cart
    if(cart) {
        setCart(cart)
    } else {
        setCart([])
    }
  }, []);



  const addCart = (id) => {
    const check = cart.every((item) => {
        console.log("Error")
        return item.id !== id
    })
    if(passRegister === true) {
      if(check) {
        const data = products.filter((producto) => {
            return producto.id === id

        })
        setCart([...cart, ...data])
        
        console.log("item añadido")
    } else {
        alert("El item fue añadido otra vez")
    }
    } else {
      setErrorBuy(true)
      setCart([])
    }
}

 const removeCart = (id) =>{
  cart.map((item) => {
   if(item.id === id) {
       const data = cart.filter((item) => {
         return item.id !== id
       })
       setCart([...data])
       item.cantidad = 1
   }
  })
}


const upQuantity= (id) => {
  products.forEach((item) => {
      if(item.id === id) {
         item.amount += 1
         item.amountCart += item.amount
         setCart([...cart])
      }
      
  })
}


const substractQuantity= (id) => {
  products.forEach((item) => {
      if(item.id === id) {
        if(item.amount > 1) {
          item.amount -= item.amount
          setCart([...cart])
        }
      }
  })
}


const upCartQuantity= (id) => {
  cart.forEach((item) => {
      if(item.id === id) {
         item.amountCart += 1
         setCart([...cart])
      }
  })
}

const substractCartQuantity= (id) => {
  cart.forEach((item) => {
      if(item.id === id) {
        if(item.amount > 1) {
          item.amountCart -= 1
          setCart([...cart])
        }
      }
  })
}


/* Total */
useEffect(() => {
  const result = cart.reduce((prevValue, item) => {
    return prevValue + (item.price * item.amountCart)
  }, 0)
  setTotal(result)
}, [cart]);



  // Search
  const {valueSearch, onInputChange, onResetForm} = useForm({
    valueSearch: ''
 })

   

  const closePage = () => {
  
  }


  const value = {
    products,
    setProducts,
    cart,
    setCart,
    pages,
    setPages,
    addCart,
    removeCart,
    displayCart,
    setDisplayCart,
    valueSearch, 
    onInputChange, 
    onResetForm,
    show,
    setShow,
    username,
    setUsername,
    passRegister,
    setPassRegister,
    closePage,
    errorBuy,
    setErrorBuy,
    upQuantity,
    substractQuantity,
    upCartQuantity,
    substractCartQuantity,
    total,
    setTotal
  }

  return (
    <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>
  )
}
