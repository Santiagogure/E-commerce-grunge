import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from "../context/dataProvider";
import grungePerson from '../images/grunge-person.png'

export const Hero = () => {

  const navigate = useNavigate()
  const value = useContext(AppContext)
  const onInputChange = value.onInputChange
  const valueSearch = value.valueSearch
  const onResetForm = value.onResetForm
  const show = value.show
  const setShow = value.setShow

  const onSearch = (e) => {
    if(!valueSearch) {
        return (
          navigate('')
        )
    } else if(valueSearch.length === 0) {

      setShow(false)

    }

       e.preventDefault()
       setShow(true)   
}

  return (
    <div className="w-11/12 xl:w-4/5 h-[350px] m-auto bg-stone-200 rounded-xl">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-11/12 xl:w-1/2 p-5 space-y-5" id="hero">
          <h1 className="text-3xl lg:text-5xl font-semibold">
          Find the perfect and aesthetic shirt or jacket
          </h1>
          <form onChange={onSearch} className="bg-white flex items-center space-x-2 px-5 py-2 rounded-full">
            <AiOutlineSearch size={"1.2rem"} />
            <input
              className="outline-0 w-full"
              id="input-search"
              onChange={onInputChange}
              name="valueSearch"
              value={valueSearch}
              type="text"
              placeholder="Search..."
            />
          </form>
        </div>
        <div className="hidden lg:flex p-5">
          <img
            className="w-[400px] h-[300px] border-8 border-gray-200"
            src={grungePerson}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};
