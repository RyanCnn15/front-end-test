var express = require('express');
var router = express.Router();
const base = require("../sql/base")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get("/base", (req, res, next) => {
  base.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        data,
        code: 200,
        msg: "请求成功"
      })
    }
  })
})


module.exports = router;