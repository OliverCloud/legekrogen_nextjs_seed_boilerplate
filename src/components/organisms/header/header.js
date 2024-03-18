"use client"
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaShoppingBasket } from "react-icons/fa";
import PromoBanner from "./promoBanner/promoBanner";
import Nav from "./nav/nav";
import { useEffect, useRef, useState } from "react";
import { useBasket } from "@/context/basket";
import styles from "./header.module.css";
import BasketMenu from "./basketMenu/basketMenu";
import NavMenu from "./navMenu/navMenu";

const Header = () => {

  const [navMenu, setNavMenu] = useState(false);
  const [basketMenu, setBasketMenu] = useState(false);
  
  const handleBarsMenu = () => {
    setBasketMenu(false);
    setNavMenu(!navMenu);
  }

  const handleBasketMenu = () => {
    setNavMenu(false);
    setBasketMenu(!basketMenu);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <PromoBanner />
        <Nav handleBarsMenu={handleBarsMenu} handleBasketMenu={handleBasketMenu}  />
        {navMenu && <NavMenu />}
        {basketMenu && <BasketMenu />}

      </div>
    </div>
  );
};
export default Header;
