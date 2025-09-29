import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";
import styles from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image
          src={logoImage.src}
          alt="Foodies logo image"
          width={100}
          height={100}
        ></Image>
        <span>NextLevel Food</span>
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
