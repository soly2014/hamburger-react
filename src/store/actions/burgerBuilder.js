import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingredientName) => {
    return {
      type:actionTypes.ADD_INGREDIENT,
      ingName:ingredientName
    }
}

export const removeIngredient = (ingredientName) => {
  return {
    type:actionTypes.REMOVE_INGREDIENT,
    ingName:ingredientName
  }
}

export const initIngredients = () => dispatch => {
      axios.get('/ingredients.json')
              .then(response => {
                  dispatch({
                    type:actionTypes.INIT_INGREDIENTS,
                    ingredients:response.data
                  })
              }).catch(error => {
                  dispatch({
                    type:actionTypes.FETCH_INGREDIENTS_FAILED
                  })
              })
}

