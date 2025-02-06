import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import headerUIStyle from "../css/headerUI.module.css";

export default function HeaderUI() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState();
  const [isMenu, setIsMenu] = useState();

  useEffect(()=>{
    if(window.innerWidth<=600){
      setIsMenu(false);
    }
  },[])

  const handleMenuBar = () => {
    setIsVisible(!isVisible);
    setIsMenu(!isMenu);
  }

  const handleOnClick = (e) => {
    if (e.target.tagName === 'LI') {
      const route = e.target.getAttribute('data-route');
      if (route) {
        navigate(route);
      }
    }
  };

  return (
    <header>
      <div className={headerUIStyle.logo}>
        <p>MyBlog (:) KISHAN</p>
      </div>

      <div className={`${headerUIStyle.contain} ${isMenu ? headerUIStyle.isVisbleMenu : headerUIStyle.notIsVisbleMenu}`}>
        <ul onClick={handleOnClick}>
          <li data-route="/">Home</li>
          <li data-route="/category">Category</li>
          <li data-route="/about">About</li>
          <li data-route="/contact">Contact</li>
        </ul>
      </div>
    <div className={headerUIStyle.mobilePortableMenu} onClick={handleMenuBar}>
        {isVisible ?
          (<RxCross2 className={headerUIStyle.icons} />) :
          (<IoMenu className={headerUIStyle.icons} />)
        }
      </div>
    </header>
  );
}
