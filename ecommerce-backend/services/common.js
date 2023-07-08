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
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YThmN2RjMDU0MTk4MTgzN2JlZTg1ZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg4Nzk2MTEyfQ._Ott0FD73dK7r2g0gCigWqfFqxYKj6aSuX9LHt2lIJ0"
  return token;
};
