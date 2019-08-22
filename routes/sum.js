var express = require("express");
var router = express.Router();

router.get("/await", async (req, res) => {
  const result = await sum(req);
  res.send(`Sum with await ${result}`);
});

const sum = req => {
  const v1 = parseInt(req.query.v1);
  const v2 = parseInt(req.query.v2);
  return v1 + v2;
};

router.get("/then", (req, res) => {
  sumWithThen(req).then(retorno => {
    res.send(`Sum with then ${retorno}`);
  });
});

const sumWithThen = req => {
  return new Promise(function(resolve, reject) {
    resolve(sum(req));
  });
};

module.exports = router;
