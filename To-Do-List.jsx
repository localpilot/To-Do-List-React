import React, { useState } from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t =>[...t,newTask]);
            setNewTask("");
        }
        
    }
    function deleteTask(index){
        const updatedTask = tasks.filter((_,i)=> i != index);
        setTasks(updatedTask);
    }
    function moveTaskUp(index){
        
        if(index > 0){  
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index - 1]] =
            [updatedTask[index - 1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index + 1]] =
            [updatedTask[index + 1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    return(<>
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input className='taskInput' value={newTask} type="text" placeholder='Enter a Task...' onChange={handleInputChange}></input>
                <button className='addButton' onClick={addTask}>Add Work</button>
            </div>
            <ol>
                {tasks.map((task,index) =>
                    <li key={index}><span className='text'>{task}</span>
                    <button className='deleteButton' onClick={() => deleteTask(index)}>Delete</button>
                    <button className='moveButton' onClick={() => moveTaskUp(index)}>UP</button>
                    <button className='moveButton' onClick={() => moveTaskDown(index)}>DOWN</button>
                    </li>
                )}
                    
            </ol>       
        </div>
    
    </>)
}

export default ToDoList