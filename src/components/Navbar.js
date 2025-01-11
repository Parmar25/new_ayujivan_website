import React from 'react'

const Navbar = ({filterItem ,itemList}) => {
  return (
    <>
    <nav className="navbar">
  
        <div className="logo-container">
          <img src="images/logo.png" alt="" className="logo" />
          <div className="logo-title">
            <span className="title-ayujivan">Ayujivan</span>
            <span className="title-ayurved">Ayurved</span>
          </div>

          <div className="category-container">
            <div className="nav-category">
            {
                itemList.map((curEle) => {
                return <li className="hair-care" onClick={() => filterItem(curEle)} >{curEle}</li>
                })
            }
     
            </div>
          </div>
        </div>
      </nav>
    
    
    </>
  )
}

export default Navbar