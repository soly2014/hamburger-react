import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders:[],
  loading:false
};

const orders = (state = initialState,action) => {
    switch (action.type) {
      case actionTypes.PURCHASE_BURGER_START:
        return {
          ...state,
          loading:true
        };
      case actionTypes.PURCHASE_BURGER_SUCCESS:
        return {
          ...state,
          loading:false
        };
      case actionTypes.PURCHASE_BURGER_FAIL:
        return {
            ...state,
            loading:false
        };
      case actionTypes.FETCH_ORDERS_START:
        return {
          ...state,
          loading:true
        };
      case actionTypes.FETCH_ORDERS_SUCCESS:
        return {
          orders:action.orders,
          loading:false
        };
      case actionTypes.FETCH_ORDERS_FAIL:
        return {
            ...state,
            loading:false
        };

        default:
        return state;
    }
}


export default orders;