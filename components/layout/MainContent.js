import React from 'react'
import classes from './MainContent.module.css';

const MainContent = (props) => {
  return (
    <nav className={classes.main}>{props.children}</nav>
  )
}

export default MainContent