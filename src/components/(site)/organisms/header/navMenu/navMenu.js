import Link from "next/link";
import styles from "./navMenu.module.css";

import { useEffect } from "react";

const NavMenu = ({ navMenu, setNavMenu }) => {
  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  useEffect(() => {
    if (navMenu) {
      handleNavMenu();
    }
  }, []);

  return (
    <div
      className={`${styles.container} ${navMenu ? styles.active : ""}`}
      onClick={() => setNavMenu(!navMenu)}
    >
      <div className={styles.nav}>
        <Link href={"/"}>Forside</Link>
        <Link href={"/produkter"}>Produkter</Link>
        <Link href={"/faq"}>FAQ</Link>
        <Link href={"/kundeklubben"}>Kundeklubben</Link>
      </div>
    </div>
  );
};
export default NavMenu;
