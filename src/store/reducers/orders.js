import * as actionTypes from '../actions/actionTypes';

const intialState = {
  loading:false
};

const orders = (state = intialState,action) => {
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
    default:
        return state;
    }
}


export default orders;