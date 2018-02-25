
const initialState = {
  loading: false,
  error: null,
  number: 0,
  msg: ''
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'INCREASE':
      return {
        ...state,
        number: state.number + 1
      } 
    case 'DECREASE':
      return {
        ...state,
        number: state.number - 1
      }
    case 'PROMISE_PENDING': 
    case 'THUNK_PENDING':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'PROMISE_REJECTED':
    case 'THUNK_REJECTED': 
      return {
        ...state,
        loading: false,
        error: payload
      }
    case 'PROMISE_FULFILLED':
    case 'THUNK_FULFILLED':
      return {
        ...state,
        loading: false,
        error: null,
        msg: payload
      }
    default:
      return state;
  }
}

export default reducer