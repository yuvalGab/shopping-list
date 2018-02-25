
export const increase = () => ({
  type: 'INCREASE'
})

export const decrease = () => ({
  type: 'DECREASE'
})

export const promiseDemo = () => ({
  type: 'PROMISE',
  payload: promiseExample()
})

export const thunkDemo = () => {
  return (dispatch) => dispatch({
    type: 'THUNK',
    payload: promiseExample()
  })
}

function promiseExample() {
 return new Promise((res, rej) => {
  setTimeout(() => {
    res('great!')
  }, 1000)
 })
}