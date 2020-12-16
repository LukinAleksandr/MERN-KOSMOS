import React from 'react'
import classes from './Button.module.sass'

const Button = (props) => {
  return (
    <button className={classes.primoryBtn} onClick={props.event}>
      {props.value}
    </button>
  )
}

export default Button
