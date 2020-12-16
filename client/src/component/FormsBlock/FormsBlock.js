import React from 'react'
import classes from './FormsBlock.module.sass'

const FormsBlock = (props) => {
  return <div id={classes.formsBlock}>{props.children}</div>
}

export default FormsBlock
