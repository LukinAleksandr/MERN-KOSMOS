import React, { useEffect, useState } from 'react'
import Header from '../component/Header/Header'
import Logo from '../component/Logo/Logo'
import AuthTitle from '../component/AuthTitle/AuthTitle'
import FormsBlock from '../component/FormsBlock/FormsBlock'
import classes from './AuthPage.module.sass'
import FormsWrapper from '../component/FormsWrapper/FormsWrapper'
import FormsTitle from '../component/FormsWrapper/FrormsTitle/FormsTitle'
import FormsInput from '../component/FormsWrapper/FormsInput/FormsInput'
import { FaSearch, FaCaretDown, FaUserCircle, FaLock } from 'react-icons/fa'
import Button from '../component/UI/Button/Button'
import FormsList from '../component/FormsWrapper/FormsList/FormsList'

const AuthPage = () => {
  let [searchForm, setSearchForm] = useState({
    keyword: '',
    subcategories: '',
    listVisible: false,
    listItem: JSON.parse(localStorage.getItem('subcategories')),
  })
  let [authForm, setAuthForm] = useState({
    email: '',
    password: '',
  })

  // useEffect(() => {
  //   console.log(searchForm)
  //   console.log(authForm)
  // }, [searchForm, authForm])

  const pageClickHandler = (ev) => {
    console.log(ev.target.className)
    if (
      ev.target.className !== 'listItem' &&
      ev.target.className !== 'forms-input'
    ) {
      setSearchForm({ ...searchForm, listVisible: false })
    }
  }
  const searchInputChengeHandler = (ev) => {
    let newList = JSON.parse(
      localStorage.getItem('subcategories')
    ).filter((item) => item.name.startsWith(ev.target.value))
    setSearchForm({
      ...searchForm,
      [ev.target.name]: ev.target.value,
      listItem: newList,
    })
  }
  const searchInputClickHandler = () => {
    setSearchForm((prevState) => {
      return { ...searchForm, listVisible: !prevState.listVisible }
    })
  }
  const authInputChengeHandler = (ev) => {
    setAuthForm({ ...authForm, [ev.target.name]: ev.target.value })
  }

  return (
    <div id={classes.content} onClick={(ev) => pageClickHandler(ev)}>
      <Header>
        <Logo />
      </Header>
      <AuthTitle />
      <FormsBlock>
        <FormsWrapper>
          <FormsTitle>Пошук по базі імпортозаміщення</FormsTitle>
          <FormsInput
            chengeEv={(ev) => {
              searchInputChengeHandler(ev)
            }}
            icon={<FaSearch />}
            type="text"
            name="keyword"
            unic="search-keyword"
            placeholder="Введіть ключові слова"
            value={searchForm.keyword}
          />
          <FormsInput
            chengeEv={(ev) => {
              searchInputChengeHandler(ev)
            }}
            clickEv={(ev) => {
              searchInputClickHandler()
            }}
            icon={<FaCaretDown />}
            type="text"
            name="subcategories"
            unic="search-subcategories"
            placeholder="Виберіть категорію"
            value={searchForm.subcategories}
            list={
              <FormsList
                visible={searchForm.listVisible}
                items={searchForm.listItem}
              />
            }
          />
          <Button
            value="Пошук"
            event={(ev) => {
              console.log(ev)
            }}
          />
        </FormsWrapper>
        <FormsWrapper>
          <FormsTitle>Авторизація</FormsTitle>
          <FormsInput
            chengeEv={(ev) => {
              authInputChengeHandler(ev)
            }}
            icon={<FaUserCircle />}
            type="email"
            name="email"
            unic="auth-email"
            placeholder="Логін"
            value={searchForm.email}
          />
          <FormsInput
            chengeEv={(ev) => {
              authInputChengeHandler(ev)
            }}
            icon={<FaLock />}
            type="text"
            name="password"
            unic="auth-password"
            placeholder="Пароль"
            value={searchForm.password}
          />
          <Button
            value="Увійти"
            event={(ev) => {
              console.log(ev)
            }}
          />
        </FormsWrapper>
      </FormsBlock>
    </div>
  )
}

export default AuthPage
