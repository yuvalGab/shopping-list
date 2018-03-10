const initialState = {
  loading: false,
  error: null,
  list: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_ITEM_PENDING':
    case 'GET_ALL_ITEMS_PENDING':
    case 'DELETE_ITEM_PENDING':
    case 'EDIT_ITEM_PENDING':
    case 'DELETE_SELECTED_PENDING':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'ADD_ITEM_REJECTED':
    case 'GET_ALL_ITEMS_REJECTED':
    case 'DELETE_ITEM_REJECTED':
    case 'EDIT_ITEM_REJECTED':
    case 'DELETE_SELECTED_REJECTED':
     return {
        ...state,
        loading: false,
        error: payload
      }
    case 'ADD_ITEM_FULFILLED':
    case 'DELETE_ITEM_FULFILLED':
    case 'EDIT_ITEM_FULFILLED':
    case 'DELETE_SELECTED_FULFILLED':
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