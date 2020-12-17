import { SET_INPUT_VALUE } from '../actions/actionsType'

const initialState = {
  keyword: '',
  subcategories: '',
  listVisible: false,
  listItem: JSON.parse(localStorage.getItem('subcategories')),
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        keyword: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

export default searchReducer
