// expressモジュールを使用する宣言を行います
const express = require("express");
// jsonwebtokenモジュールを使用する宣言を行います
const jwt = require("jsonwebtoken");
// ./config.jsを使用するように宣言を行います
const config = require("./config");
// ./auth.jsを使用するように宣言を行います
const auth = require("./auth");
// expressのインスタンスを作成
const app = express();
// POSTデータをjson形式で使用することを宣言します
app.use(express.json());
// リッスンを開始するポート番号
const PORT = 8000;

// サーバーを指定したポートでリッスン開始します。
app.listen(PORT, () => {
    console.log("listening on 8000");
} );

// 登録するエンドポイントを作成します
app.post("/register", (req, res) => {
    // ペイロードの作成
    const payload = {
      username: req.body.username,
      email: req.body.email,
    };

    // JWTを使用して、トークンを作成
    const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);

    const body = {
        username: req.body.username,
        email: req.body.email,
        token: token,
    };
    
    res.status(200).json(body);
});

 
// 認証します
app.get("/certification", auth, (req, res) => {
    res.status(200).json({
      msg: "承認に成功しました",
    });
  });


