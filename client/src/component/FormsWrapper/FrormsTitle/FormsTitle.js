import React from 'react'
import classes from './FormsTitle.module.sass'

const FormsTitle = (props) => (
  <h3 className={classes.FormsTitle}>{props.children}</h3>
)

export default FormsTitle
