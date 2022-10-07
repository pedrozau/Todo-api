const Task = require('../model/task')


const getAllTask = async (request, response) => {
       try{
         
          const task = await Task.find({})
          response.send(task)

       }catch(error) {
          response.send(error)
       }
}

const getTask = async (request, response) =>  {
     
     try{
        const id = request.params.id 
        const task = await Task.findOne({_id:id})
        response.send(task)
     }catch(error) {

     }
     
}

const createTask = async (request, response) =>{
         try{
             const task = new Task(request.body)
             await task.save()
             response.send(task)
         }catch(error){
            response.send(error)
         }
}


const updateTask = async (request, response) => {
    try{
       const id = request.params.id 
       const task = await Task.findByIdAndUpdate({_id:id},request.body)
       response.send(task)

    }catch(error){
      response.send(error)
    }
}

const deleteTask = async (request, response) => {
    try{
         const id = request.params.id 
         const task = await Task.findByIdAndDelete(id)
         response.send(task)
    }catch(error){
      response.send(errror)
    }
}



module.exports = {
    getAllTask,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}