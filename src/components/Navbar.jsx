import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as RouterLink } from "react-router-dom";//routerlink for
import { useSelector } from "react-redux";


const Navbar = () => {
  const cartItem = useSelector((state) => state.cart.cart); // fallback for safety
  console.log('Cart Items:', cartItem);

  const [show, setShow] = useState(false);
  return (
    <>
      <nav style={{borderBottom:'1px solid black'}}>
        <div>
        </div>
        <div className="logo">FOODY</div>


        <div className={show ? "navLinks showmenu" : "navLinks"}>

          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
              
            ))}
          <RouterLink className="link" to="/products" >PRODUCTS</RouterLink>
          </div>

          {/* <Link className="adminBtn" style={{position:'relative',right:'33px'}} to={"/admin"} >Admin</Link> */}
          {/* <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span> */}
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          <RouterLink className="adminBtn" to="/admin" >
             <i className="fas fa-user-shield"></i>
          </RouterLink>

          <RouterLink className="cartBtn" to={'/order'}>
            <i className="fas fa-cart-plus">
              <small>{cartItem.length}</small>
            </i>
          </RouterLink>


        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
