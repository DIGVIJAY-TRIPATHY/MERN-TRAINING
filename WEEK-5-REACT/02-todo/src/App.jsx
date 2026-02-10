import {useState} from 'react'
import './App.css'

function App() {

  const [task , setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  //Add
  const addTask =()=>{
    if(task==="") return;
    setTasks([...tasks, task])
    setTask("")
  }

  //Delete
  const deleteTask =(index)=>{
    const newTasks = tasks.filter((_, i) => i !== index); //to be checked for filter
    setTasks(newTasks);
  }


  return (
    <div className="app">
      <h1>TODO APP</h1>
      <input type="text" placeholder='Enter task' value={task} onChange={(e)=>setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((item, index)=>(
          <li key={index}>
            {item}
            <button onClick={()=>deleteTask(index)} className='xxx'>×</button>
          </li>
        ))}
      </ul>
    </div>


  )
}

export default App;