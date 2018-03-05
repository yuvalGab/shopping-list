
function api(path, method, data) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-type": "application/json"
    }
    const body = JSON.stringify(data)
    return fetch(path, { method, headers, body, credentials: 'include' })
    .then(res => { 
      const { status } = res
      const isJson = status === 200
      return { data: res, isJson }
    })
    .then(res => {
      const { data, isJson } = res
      if (isJson) {
          return data.json()
      }

      return data
    })
    .then(res => {
      const { error, status, statusText } = res
      if (error) {
        reject(error)
      }

      if (status === 500) {
        reject(statusText)
      }

      resolve(res)
    })
  })
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