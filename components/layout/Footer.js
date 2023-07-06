import React from "react";
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <HomeIcon />
            </Link>
          </li>
          <li>
            <Link href="/liked">
              <FavoriteIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
