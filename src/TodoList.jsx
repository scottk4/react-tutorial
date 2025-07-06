import React, {useState} from 'react'

function TodoList(){

    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");

    function addTask(){
        const newTask = taskName;
        if (newTask !== ""){
            setTasks(t => [...t, newTask]);
            setTaskName("");
        }
    }
    function handleTaskChange(event){
        setTaskName(event.target.value);
    }
    function removeTask(index){
        setTasks(t => t.filter((_, i) => i !== index))
    }
    function moveUp(index){
        if (index === 0) return;

        setTasks(t => {
            const newTasks = [...t];
            [newTasks[index-1],
             newTasks[index]] = [newTasks[index],
                                 newTasks[index-1]];

            return newTasks;
        }); 
    }
    function moveDown(index){
        const lastIndex = tasks.length - 1
        if (index === lastIndex) return;

        setTasks(t => {
            const newTasks = [...t];
            [newTasks[index],
             newTasks[index + 1]] = [newTasks[index + 1],
                                     newTasks[index]];

            return newTasks;
        })
    }
    
    return(
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="todo-add-input">
                <input className="todo-input" type="text"
                    value={taskName}
                    placeholder="Enter a task"
                    onChange={handleTaskChange}
                />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task, index) =>
                    <li className="item-container" key={index}>
                        <p> {task}</p>
                        <div className="buttons">
                            <button className="delete-button" onClick={() => removeTask(index)}>Delete</button>
                            <button className="move-button" onClick={() => moveUp(index)}>☝🏻</button>
                            <button className="move-button" onClick={() => moveDown(index)}>👇🏻</button>
                        </div>
                    </li> 
                )}
            </ul>
        </div>
    );
}
export default TodoList