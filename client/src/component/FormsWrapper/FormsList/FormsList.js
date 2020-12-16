import React from 'react'
import FormsItemList from './FormsItemList/FormsItemList'
import classes from './FormsList.module.sass'

const FormsList = (props) => {
  const items = props.items
  const list = props.visible ? (
    <ul className={classes.formsList}>
      {items.map((item) => (
        <FormsItemList value={item.name} key={item.id} />
      ))}
    </ul>
  ) : null

  return list
}

export default FormsList
