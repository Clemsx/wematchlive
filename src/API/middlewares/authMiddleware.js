// TODO
const basicAuthMiddleware = (req, res, next) => {
  const auth = req.headers.authorization.split(' ')[1];

  const decoded_token = Buffer.from(auth, 'base64').toString();

  const login = decoded_token.split(':')[0];
  const pass = decoded_token.split(':')[1];

  if (login === 'admin' && pass === 'admin') return next();

  return res.status(403).json({
	  message: `You don't have the right to use this route`,
  })
};

module.exports = {
  basicAuthMiddleware,
};
