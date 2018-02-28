
function api(path, method, data) {
  const headers = {
    "Content-type": "application/json"
  }
  const body = JSON.stringify(data)
  return fetch(path, { method, headers, body})
}

function post(path, data) {
  return api(path, 'post', data)
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