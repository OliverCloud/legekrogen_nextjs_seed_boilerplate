import Image from "next/image";
import Link from "next/link";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import styles from "./nav.module.css";
import { useBasket } from "@/context/basket";
import { useEffect, useState } from "react";

import { FaXmark } from "react-icons/fa6";

const Nav = ({ navMenu, handleBasketMenu, handleBarsMenu }) => {
  const [basketIcon, setBasketIcon] = useState(false);

  const { basket } = useBasket();

  useEffect(() => {
    if (basket.length > 0) {
      setBasketIcon(true);
    } else {
      setBasketIcon(false);
    }
  }, [basket]);

  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <Image
          src="/logo/legekrogen_logo.png"
          alt="smuknu logo"
          width={200}
          height={200}
        />
      </Link>
      <div>
        <div
          className={`${styles.basketBtn} ${basketIcon ? styles.active : ""}`}
          onClick={handleBasketMenu}
        >
          <FaShoppingCart />
          <p>{basket.length > 99 ? "99+" : basket.length}</p>
        </div>
        <div className={styles.barsBtn} onClick={handleBarsMenu}>
          {!navMenu ? <FaBars /> : <FaXmark />}
        </div>
      </div>
    </div>
  );
};
export default Nav;
