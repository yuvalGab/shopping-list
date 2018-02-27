
function post(path, body) {
  return fetch(path, { method: 'post', body })
}

const login = data => (
  post('/api/user/login', data)
)

export default {
  login
}