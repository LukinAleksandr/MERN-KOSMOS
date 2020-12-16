import React from 'react'
import classes from './Leyout.module.sass'

const Leyout = (props) => {
  return <div className={classes.Layout}>{props.children}</div>
}

export default Leyout
