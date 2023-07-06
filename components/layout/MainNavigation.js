import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import classes from './MainNavigation.module.css';
import Header from './Header';
import Footer from './Footer';

const MainNavigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //function to handle resize and determine wheter it is mobile or web view
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

     // register a resize event to check is mobile view
    window.addEventListener('resize', handleResize);

    //call registered event on initial page loading
    handleResize();

    //cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classes.containerStyle}>
      {!isMobile && (
        <Header/>
      )}
      {isMobile && (
        <Footer/>
      )}
    </div>
  );
};

export default MainNavigation;
