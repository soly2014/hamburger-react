import * as actionTypes from '../actions.js'

const defaultState = {
  ingredients:{
    bacon:1,
    salad:0,
    meat:1,
    cheese:0
  },
  TotalPrice: 4
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const burgerBuilderReducer = (state = defaultState, action) => {
    switch (action.type) {
      case actionTypes.ADD_INGREDIENT:
          return {
            ...state,
            ingredients:{
              ...state.ingredients,
              [action.ingName]:state.ingredients[action.ingName] +1
            },
            TotalPrice:state.TotalPrice + INGREDIENT_PRICES[action.ingName]
          }
      case actionTypes.REMOVE_INGREDIENT:
          return {
            ...state,
            ingredients:{
              ...state.ingredients,
              [action.ingName]:state.ingredients[action.ingName] -1
            },
            TotalPrice:state.TotalPrice - INGREDIENT_PRICES[action.ingName]
          }
      default:
          return {
            ...state
          }
    }
}

export default burgerBuilderReducer;