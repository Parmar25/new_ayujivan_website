import React, { useState } from "react";
import "./style.css"
import Items from "./items"
import ProductCard from "./ProductCard"
import Navbar from "./Navbar";

const uniqueList = [...new Set(Items.map((curEle) => {
  return curEle.category
})), "all"
]
console.log(uniqueList)

const Product = () => {
  const [item , setItem] = useState(Items)
  const [itemList , setItemList] = useState(uniqueList)

  const filterItem = (category) => {
    if(category === "all"){
      setItem(Items)
      return
    }
      const updatedList = Items.filter((curEle) => {
        return curEle.category === category
      })
      setItem(updatedList)
  }
  
    return (
      <>
        <Navbar filterItem={filterItem} itemList={itemList} />
        <ProductCard item={item}/>
      </>
    );
  }




export default Product;
