const initialState = {
  loading: false,
  error: null,
  list: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_ITEM_PENDING':
    case 'GET_ALL_ITEMS_PENDING':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'ADD_ITEM_REJECTED':
    case 'GET_ALL_ITEMS_REJECTED':
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
    case 'GET_ALL_ITEMS_FULFILLED':
      return {
        ...state,
        loading: false,
        error: null,
        list: payload
      }
    default:
      return state
  }
}

export default reducer