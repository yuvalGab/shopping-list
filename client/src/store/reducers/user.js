const initialState = {
  loading: false,
  error: null,
  isLogedIn: false
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'REGISTER_PENDING':
    case 'LOGIN_PENDING':
    case 'IS_LOGED_IN_PENDING':
    case 'LOGOUT_PENDING':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'REGISTER_REJECTED':
    case 'LOGIN_REJECTED':
    case 'IS_LOGED_IN_REJECTED':
    case 'LOGOUT_REJECTED':
      return {
        ...state,
        loading: false,
        error: payload
      }
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        loading: false,
        error: null
      }
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        loading: false,
        error: null,
        isLogedIn: true
      }
    case 'IS_LOGED_IN_FULFILLED':
    case 'LOGOUT_FULFILLED':
      return {
        ...state,
        loading: false,
        error: null,
        isLogedIn: payload
      }
    default:
      return state
  }
}

export default reducer