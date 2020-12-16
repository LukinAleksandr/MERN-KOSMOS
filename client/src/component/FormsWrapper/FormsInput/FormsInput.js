import React from 'react'
import classes from './FormsInput.module.sass'

const FormsInput = (props) => {
  return (
    <div className={classes.inputBlock}>
      <span className={classes.icon}>
        <label htmlFor={props.unic}>{props.icon}</label>
      </span>
      <input
        autoComplete="off"
        onChange={props.chengeEv}
        onClick={props.clickEv || null}
        type={props.type}
        name={props.name}
        id={props.unic}
        className="forms-input"
        placeholder={props.placeholder}
        value={props.values}
      />
      {props.list ? props.list : null}
    </div>
  )
}

export default FormsInput
