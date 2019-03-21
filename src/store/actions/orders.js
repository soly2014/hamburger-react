import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

// add loading issues
export const purchasePurgerStart = () => {
  return {
    type:actionTypes.PURCHASE_BURGER_START
  }
};

// show error
export const purchasePurgerFail = () => {
  return {
    type:actionTypes.PURCHASE_BURGER_FAIL
  }
};

// success
export const purchasePurgerSuccess = () => {
  return {
    type:actionTypes.PURCHASE_BURGER_SUCCESS
  }
};

// post network request
export const purchasePurger = orderDetails => dispatch => {
  axios.post('/orders.jso ',orderDetails)
        .then(data => {
          dispatch(purchasePurgerSuccess())
        })
        .catch(error => {
          dispatch(purchasePurgerFail())
        });
};


