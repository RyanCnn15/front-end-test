// 引入mongoose
const mongoose = require("mongoose")

// 连接数据库
mongoose.connect("mongodb://localhost/wst", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 连接成功
mongoose.connection.on("connected", () => {
    console.log("数据库连接成功");
})

// 连接断开
mongoose.connection.on("disconnected", () => {
    console.log("数据库连接断开");
})

// 连接错误
mongoose.connection.on("error", () => {
    console.log("数据库连接错误");
})

module.exports.mongoose = mongoose