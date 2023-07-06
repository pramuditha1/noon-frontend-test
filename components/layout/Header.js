import React from "react";
import Link from "next/link";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/liked">Liked</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
