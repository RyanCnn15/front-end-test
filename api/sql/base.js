let db = require("./db");

let Schema = new db.mongoose.Schema({
    name: {
        type: String,
    },
    gender: {
        type: String,
    },
    age: {
        type: Number,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
});


module.exports = db.mongoose.model("bases", Schema);