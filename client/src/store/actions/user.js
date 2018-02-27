import api from '../../utils/http'

export const register = data => ({
  type: 'REGISTER',
  payload: api.register(data)
})

export const login = data => ({
  type: 'LOGIN',
  payload: api.login(data)
})