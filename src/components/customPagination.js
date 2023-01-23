import React, { useContext, useEffect } from "react";
import { Pagination } from "@mui/material";
import { AppContext } from "../context/dataProvider";


const CustomPagination = ({setPages}) => {

  const value = useContext(AppContext)
  const setShow = value.setShow
 
  const changePage = (pages) => {
    setShow(false)
    let numero = Number(pages)
    setPages(numero)
  }

 

  return (
    <div
      className="pagination"
      style={{ display: "flex", justifyContent: "center", marginTop: "50px", marginBottom: '60px', }}
    >
      <Pagination
        count={2}
        onChange={(e) => changePage(e.target.textContent)}
        color="secondary"
        hideNextButton
        hidePrevButton
      ></Pagination>
    </div>
  );
};

export default CustomPagination;