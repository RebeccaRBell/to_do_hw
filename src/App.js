import React, {useState} from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([{name: 'Wash Car', priority: 'high'}, {name: 'Prep Breakfast', priority: 'low'}]);

  const [priority, setPriority] = useState("")

  const itemList = tasks.map((task, index) => {
    return <div className='list-wrapper'> {task.priority === 'high' ? <li key={index} className='list-list' class='red-border'><span>{task.name}</span><span>Priority:</span> <span className='red'> {task.priority} </span></li>: <li key={index} className='list-list' class='green-border'><span>{task.name}</span><span>Priority:</span> <span className='green'> {task.priority} </span></li>}</div>
  });
  const [newTask, setNewTask] = useState("");

  const newTaskInput = (event) => {
    setNewTask(event.target.value);
    
  }
  const selectPriority = (event) => {
    setPriority(event.target.value);
    
  }
  const updateList = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, priority: priority});

    setTasks(copyTasks);
    setNewTask("");
    
  }

  return (
    <>
  <h1>To-Do List</h1>
  <form className='task-form' onSubmit={updateList}>
    <label htmlFor='task'>New Task:</label>
    <input type='text' id='task' value={newTask} onChange={newTaskInput}/>
    <span>Priority:</span>
    <label htmlFor='high'>High</label>
    <input type='radio' name='priority' id='high' onChange={selectPriority} value='high'/>
    <label htmlFor='low'>Low</label>
    <input type='radio' name='priority' id='low' onChange={selectPriority} value='low'/>
    <input type='submit' value='Add Task'/>
  </form>

  <ul className='item-list'>
    {itemList}
  </ul>
    </>
  );
}

export default App;
