import api from '../../utils/http'

export const login = data => ({
  type: 'LOGIN',
  payload: api.login()
})