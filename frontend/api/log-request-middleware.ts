// Use this to return Unauthorized header
module.exports = (req, res, next) => {
  // console.log(JSON.stringify(req.headers));
  // console.log(`body: ${JSON.stringify(req.body)}`);
  // console.log(`params: ${JSON.stringify(req.params)}`);
  next();
};
