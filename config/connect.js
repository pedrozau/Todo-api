const mongoose = require('mongoose') 
mongoose.set("useNewUrlParser",true)
mongoose.set("useFindAndModify",false)
mongoose.set("useCreateIndex",true)
mongoose.set("useUnifiedTopology",true)
class Connection {
   
   static connect() {
        return mongoose.connect("mongodb://127.0.0.1:27017/task")
     }

}


module.exports = Connection 