let express = require("express");
const api = require("./api");
let router = express.Router();
let path = require('path')
/**
 * code : 0 -> sql查询失败;msg -> 错误提示
 *        1 -> 查询成功;data -> 返回数据
 *        2 -> 其他错误;msg -> 错误提示
 */
router.get("/getscorelist", (req, res, next) => {
  api.getScoreList(req, res, next);
});

router.post("/addscore", (req, res, next) => {
  api.addScore(req, res, next);
});

router.get("/", (req, res, next)=> {
  res.sendFile(path.join(__dirname, "index.html"));
})

module.exports = router;
