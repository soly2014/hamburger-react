import * as actionTypes from '../actions/actionTypes'

const defaultState = {
  ingredients:{
    bacon:1,
    salad:1,
    meat:0,
    cheese:0
  },
  TotalPrice: 5,
  error:false
};

const INGREDIENT_PRICES = {
  salad: 1,
  cheese: 2,
  meat: 5,
  bacon: 4
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
      case actionTypes.INIT_INGREDIENTS:
          return {
            ...state,
            ingredients:action.ingredients,
            TotalPrice:Object.keys(action.ingredients)
                              .reduce((total,ing) => {
                                return total + (action.ingredients[ing] * INGREDIENT_PRICES[ing])
                              },0),
            error:false

          };
      case actionTypes.FETCH_INGREDIENTS_FAILED:
          return {
            ...state,
            error:true
          };
      default:
          return state;
    }
}

export default burgerBuilderReducer;