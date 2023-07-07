import React from "react";
import Link from "next/link";
import classes from "./Header.module.css";
import { HOME, LIKED} from "../../utils/locale";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">{HOME}</Link>
          </li>
          <li>
            <Link href="/liked">{LIKED}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
