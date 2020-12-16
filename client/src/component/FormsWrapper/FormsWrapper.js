import React from 'react'
import classes from './FormsWrapper.module.sass'

const FormsWrapper = (props) => (
  <div className={classes.formsWrapper}>{props.children}</div>
)

export default FormsWrapper
