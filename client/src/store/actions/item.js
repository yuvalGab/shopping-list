import api from '../../utils/http'

export const addItem = data => ({
  type: 'ADD_ITEM',
  payload: api.addItem(data)
})
