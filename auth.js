
// jsonwebtokenモジュールを使用する宣言を行います
const jwt = require("jsonwebtoken");

// config.jsを使用する宣言を行います
const config = require("./config");

// 認証するための関数
// server.js の　app.get("/certification", auth, 　でコールしています。
function auth(req, res, next) {
  try {
    //承認用のトークンの設定
    const token = req.headers.token;
    //トークンからデータをデコード
    const decoded = jwt.verify(token, config.jwt.secret);
    console.log(decoded);
    // 次のミドルウェアに移る。
    next();
  } catch (err) {
    return res.send(401).json({
      msg: "認証できません",
    });
  }
}
// どこからでも、auth関数をコールできるように、module.exportsします
module.exports = auth;