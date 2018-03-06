import api from '../../utils/http'

export const register = data => ({
  type: 'REGISTER',
  payload: api.register(data)
})

export const login = data => ({
  type: 'LOGIN',
  payload: api.login(data)
})

export const isLogedIn = () => ({
  type: 'IS_LOGED_IN',
  payload: api.isLogedIn()
})

export const logout = () => ({
  type: 'LOGOUT',
  payload: api.logout()
})