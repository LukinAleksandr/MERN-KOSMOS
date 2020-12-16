import React from 'react'
import classes from './Header.module.sass'

const Header = (props) => {
  return <header id={classes.Header}>{props.children}</header>
}

export default Header
