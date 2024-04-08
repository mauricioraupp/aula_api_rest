const database = require('../database/connection');

class TaskController {
  createTask(req, res) {
    const {title, description, status} = req.body;
    database.insert({title, description, status})
    .table("task").then(function(data) {
      res.json({message:'Task created succesfully'});
    }).catch(function(error){
      res.json({error: error});
      console.log(error);
    })
  }
}

module.exports = new TaskController()