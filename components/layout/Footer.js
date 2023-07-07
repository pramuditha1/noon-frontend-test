import React from "react";
import Link from "next/link";
import classes from "./Footer.module.css";
import IconHome from "../UI/IconHome";
import IconFavourite from "../UI/IconFavourite";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <IconHome fontSize="large"/>
            </Link>
          </li>
          <li>
            <Link href="/liked">
              <IconFavourite fontSize="large"/>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
