
module.exports = function checkAuth(req, res, next) {
  const { url, session: { userId }} = req
  const isApiReq = url.split('/')[1] === 'api'
  if (!isApiReq) {
   next()
  }

  if (
    url !== '/api/user/register' &&
    url !== '/api/user/login' &&
    url !== '/api/user/isLogedIn' &&
    !userId
  ) {
    return res.sendStatus(403);
  }

  next()
}