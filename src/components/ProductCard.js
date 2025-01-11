import React from "react";

const ProductCard = ({ item }) => {
  return (
    <>
      <div className="product-container">
        {item.map((curEle) => {
          const {id , name, image, } = curEle
          return (
            <>
              <div className="product" key={id}>
                <img src={image} alt="" className="product-image" />
                <div className="product-detail-container">
                  <div className="product-title">{name}</div>
                {/*  <div className="product-qty">{quentity}</div>
                  <div className="product-price">Rs. {price}</div>
                  <div className="category">{category}</div>
                  <button className="buy-btn">Buy Now</button> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductCard;
