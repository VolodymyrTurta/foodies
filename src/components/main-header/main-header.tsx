import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";
import styles from "./main-header.module.css";
import NavLink from "./nav-link/nav-link";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image
          src={logoImage.src}
          alt="Foodies logo image"
          width={100}
          height={100}
          priority
        ></Image>
        <span>NextLevel Food</span>
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink path="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink path="/community">Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
