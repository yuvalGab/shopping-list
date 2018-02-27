const initialState = {
  loading: false,
  error: null
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN_PENDING': 
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'LOGIN_REJECTED':
      return {
        ...state,
        loading: false,
        error: true
      }
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