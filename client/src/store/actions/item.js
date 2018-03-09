import api from '../../utils/http'

export const addItem = data => ({
  type: 'ADD_ITEM',
  payload: api.addItem(data)
})

export const getAllItems = () => ({
  type: 'GET_ALL_ITEMS',
  payload: api.getAllItems()
})
