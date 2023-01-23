import React from 'react'
import DataProvider from '../context/dataProvider'
import { CartItem } from './cartItem'
import { Footer } from './Footer'
import { Header } from './Header'
import { Hero } from './Hero'
import { Products } from './Products'

export const AppRouter = () => {

  localStorage.getItem('username')
  
  return (
    <div>
        <Header/>
        <CartItem/>
        <Hero/>
        <Products/>
        <Footer/>
    </div>
  )
}
