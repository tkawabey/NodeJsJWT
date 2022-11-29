require("dotenv").config();

module.exports = {
  jwt: {
    // 秘密鍵の情報（環境変数から取得）
    secret: process.env.JWT_SECRET,
    options: {
        // 暗号化アルゴリズム
        algorithm: "HS256",
        //　期間を指定。ここでは、1Dayを指定。
        expiresIn: "1d",
    },
  },
};
