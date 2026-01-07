import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [add, Newadd] = useState("")
    const [adds, Newadds] = useState([]);
    function addTask() {
        if (add.trim() === "") return;
        Newadds([...adds, add]);
        Newadd("");
    }
     const removeTask = (index) => {
    Newadds(adds.filter((_, i) => i !== index));
  };
  const updateTask=(index)=>{
    removeTask(index);
    Newadd(adds[index]);
  }
    return (
        <>
            <div className="main">
                <h1> Notes App </h1>
            </div>
            <div className="enter">
                <input type="text" value={add} onChange={(e) => Newadd(e.target.value)}   onKeyDown={(e) => {
    if (e.key === "Enter") {
      addTask();
    }}} placeholder='Add Task...' />
                <button onClick={addTask}> ADD</button>
            </div>
            <div className="div" >
                {adds.map((t, index) => (
                    <div className='new' key={index}>
                       <span className="text"> {t} </span> 
                       <button className='updt' onClick={()=>updateTask(index)}>U</button>
                        <button className='dlt' onClick={() => removeTask(index)}> X </button>
                    </div>
                ))}
            </div>

    </>
  )
}

export default App
