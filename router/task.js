const router = require('express').Router()
const  {getAllTask,getTask,createTask,updateTask,deleteTask }  = require('../controller/task') 

router.route("/").get(getAllTask).post(createTask)
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask)


module.exports = router 
