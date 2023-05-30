router.post('/login', async function(req, res, next) {
  const {username, password} = req.body;
  if (await User.authenticate(username, password)) {
    User.updateLoginTimestamp(username);
    const token = jwt.sign({username}, SECRET_KEY);
    return res.json({token});
  } else {
    throw new ExpressError("Invalid username/password", 400);
  }
});
