import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'react-thunk'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.sass'
import rootReducer from './redux/reducers/RootReducer'

let store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
