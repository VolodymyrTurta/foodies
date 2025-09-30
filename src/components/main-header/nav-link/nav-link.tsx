"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./nav-link.module.css";
import { PropsWithChildren } from "react";

interface NavLinkProps extends PropsWithChildren {
  path: string;
}

export default function NavLink({ path, children }: NavLinkProps) {
  const currentPath = usePathname();

  return (
    <Link
      href={path}
      className={`${styles.link} ${
        currentPath.startsWith(path) ? styles.active : ""
      }`}
    >
      {children}
    </Link>
  );
}
