import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading:false,
  authenticated:false,
  token:null,
  userId:null,
  errors:[]
}

const authReducer = (state = initialState,action) => {
    switch (action.type) {
      case actionTypes.AUTH_START:
          return {
            ...state,
            loading:true
          }
      case actionTypes.AUTH_SUCCESS:
          return {
            ...state,
            loading:false,
            token:action.token,
            userId:action.userId
          }
      case actionTypes.AUTH_FAIL:
          return {
            ...state,
            loading:false,
            errors:action.errors
          }
      case actionTypes.AUTH_LOG_OUT:
          return {
            ...state,
            token:null
          }
      case actionTypes.DELETE_AUTH_FLASH_MESSAGES:
          return {
            ...state,
            errors:[]
          }
      default:
          return {
            ...state
          }
    }
}

export default authReducer;