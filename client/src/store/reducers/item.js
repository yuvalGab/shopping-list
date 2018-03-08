const initialState = {
  loading: false,
  error: null
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_ITEM_PENDING':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'ADD_ITEM_REJECTED':
      return {
        ...state,
        loading: false,
        error: payload
      }
    case 'ADD_ITEM_FULFILLED':
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