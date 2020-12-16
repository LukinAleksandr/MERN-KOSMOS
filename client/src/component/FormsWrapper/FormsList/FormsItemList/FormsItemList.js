import React from 'react'
import './FormsItemList.sass'

const FormsItemList = (props) => {
  console.log(props)
  return <li className="listItem">{props.value}</li>
}

export default FormsItemList
