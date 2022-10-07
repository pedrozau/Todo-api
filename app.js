const express = require('express')
const Connection = require('./config/connect')
const task = require('./router/task')

class App extends Connection{
    
   static create_app(){

         return express()
    }

   static init_app() {
    const app = this.create_app()
    app.use(express.json())
    app.use("/api/v1/task",task)
    app.listen(5000,()=>{
        console.log("Running Server .....")
    })
    
    }



    
}

App.connect()
App.init_app() 

