
function api(path, method = 'get', data) {
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

      resolve(res.data)
    })
  })
}

function get(path) {
  return api(path)
}

function post(path, data) {
  return api(path, 'post', data)
}

function remove(path) {
  return api(path, 'delete')
}

function put(path, data) {
  return api(path, 'put', data)
}

const register = data => (
  post('/api/user/register', data)
)

const login = data => (
  post('/api/user/login', data)
)

const isLogedIn = () => (
  get('/api/user/isLogedIn')
)

const logout = () => (
  get('/api/user/logout')
)

const addItem = data => (
  post('/api/item/add', data)
)

const getAllItems = () => (
  get('/api/item/getAll')
)

const deleteItem = id => (
  remove(`/api/item/deleteOne/${id}`)
)

const editItem = data => (
  put('/api/item/edit', data)
)

export default {
  register,
  login,
  isLogedIn,
  logout,
  addItem,
  getAllItems,
  deleteItem,
  editItem
}