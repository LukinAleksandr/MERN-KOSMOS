import React from 'react'
import classes from './AuthTitle.module.sass'

const AuthTitle = () => {
  return (
    <div id={classes.titleBlock}>
      <h3 id={classes.authTitle} className="light">
        Спільна платформа обміну інформацією щодо робіт по <br></br> заміщенню
        проблемного імпорту та освоєння <br></br> використання нових матеріалів
        і комплектуючих
      </h3>
    </div>
  )
}

export default AuthTitle
