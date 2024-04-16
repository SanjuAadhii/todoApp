import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import "bootstrap/dist/css/bootstrap.css"
import Navbar from './Navbar'
import Box from './Box'


function App() {
 const [formState,setFormState]= useState({})
 const [task,setTask]=useState([])
// function captureValue(e){

// }


const captureValue=(e) => {
  setFormState(
    {...formState,
  [e.target.name] : e.target.value
    }
  )
 

}

const handleSubmit=(e)=>{
  e.preventDefault();
  if(formState.id){
      updateTask()
  }
  else{
    createTask()
  }
  setFormState({})
}

const createTask=()=>{
  // console.log(formState)
const tempTask = {...formState}
tempTask.id=Date.now()
setTask([tempTask,...task])
console.log(task)
}

const updateTask =()=>{
  const index = task.findIndex(task=> task.id===formState.id);
  task[index]=formState
  console.log(task)
}

const editTask=(tkId)=>{
  const tkData = task.find(task=>task.id===tkId);
  setFormState(tkData)
}

// Delete a product from the list
const deleteTask = (taskId) => {
  setTask(task.filter(({ id }) => taskId !== id));
};

  return (
    <>

    <h2>Todo App</h2>
    <Form captureValue={captureValue} handleSubmit={handleSubmit} formState={formState} />
    <Navbar/>
    <div className='row mt-2'>
        
        { task.map(task=>(
        <div className='col-3 mt-3'>
            <Box key={task.id} task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            formState={formState}
            />
           
            </div>
        )) }
   
 </div> 
    </>
  )
}

export default App
