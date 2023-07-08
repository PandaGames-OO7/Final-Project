const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTdkZGNmM2ExMTg5ZmYzZWEyZTg1ZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg4NzIzOTMzfQ._mY4c7yEX1Yie6mpwmREBsx84XZRZO9WjMXkTf38KH8"
  return token;
};
