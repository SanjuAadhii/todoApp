import {useState,React} from 'react'

import "bootstrap/dist/css/bootstrap.css"
function Box({task,editTask,deleteTask}) {
 

  return (
    
        <div className="card " id={task.id} >
            <div className="card-body text-start p-2">
            <h5 className="card-title">Task : {task.name}</h5>
            <h5 className="card-text">Description :{task.description}</h5>
            <h5 className="card-text">Status :{
              <select id = "dropdown" className="form-select">
                      <option value="0">Started</option>
                      <option value="1">Pending</option>
                      <option value="2">Completed</option>
                    
                  </select>}</h5>
            <button type="button" className="btn btn-outline-primary m-2" onClick={()=>editTask(task.id)}>Edit</button>
            <button type="button" className="btn btn-outline-danger" onClick={()=>deleteTask(task.id)}>Delete</button>
  </div>
        </div>
   
    
  )
}

export default Box