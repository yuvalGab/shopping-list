const initialState = {
  loading: false,
  error: null
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'REGISTER_PENDING':
    case 'LOGIN_PENDING': 
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'REGISTER_REJECTED':
    case 'LOGIN_REJECTED':
      return {
        ...state,
        loading: false,
        error: payload
      }
    case 'REGISTER_FULFILLED':
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        loading: false,
        error: null
      }
    default:
      return state
  }
}

export default reducer