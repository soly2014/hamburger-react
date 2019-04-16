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
export const purchasePurger = (orderDetails,history) => (dispatch,token) => {
  axios.post('/orders.json?auth='+token,orderDetails)
        .then(data => {
          dispatch(purchasePurgerSuccess());
          history.push('/');
        })
        .catch(error => {
          dispatch(purchasePurgerFail())
        });
};


//
//  FETCHING ORDERS
//
export const fetchOrdersStart = () => {
  return {
    type:actionTypes.FETCH_ORDERS_START
  }
};

export const fetchOrdersFail = (error) => {
  return {
    type:actionTypes.FETCH_ORDERS_FAIL,
    error
  }
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type:actionTypes.FETCH_ORDERS_SUCCESS,
    orders
  }
};

export const fetchOrders = token => dispatch => {
    dispatch(fetchOrdersStart());
    const queryParams = 0;
    axios.get('/orders.json?auth=' + token)
    .then(response => {
      dispatch(fetchOrdersSuccess(Object.values(response.data)));
    })
    .catch(error => {
      dispatch(fetchOrdersFail(error));
    });
};








