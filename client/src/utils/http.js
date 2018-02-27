
function post(path, data) {
  return fetch(path, { method: 'post', body: JSON.stringify(data) })
}

const register = data => (
  post('/api/user/register', data)
)

const login = data => (
  post('/api/user/login', data)
)

export default {
  register,
  login
}