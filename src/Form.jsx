import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
function Form({captureValue,handleSubmit,formState}) {
  return (
    <div >
        <form className="row g-3 flex-d justify-content-center" onSubmit={handleSubmit}>
  <div className="col-auto">
    <label  className="visually-hidden">Task</label>
    <input type="text"  className="form-control" placeholder="Task" id="staticEmail2"   name="name" value={formState.name || ""}  onChange={captureValue}
    />
  </div>
  <div className="col-auto">
    <label  className="visually-hidden" >Description</label>
    <input type="text" className="form-control" id="inputPassword2" placeholder="Description" name='description' value={formState.description || ""}  onChange={captureValue}/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Add Task</button>
  </div>
</form>
    </div>
  )
}

export default Form
