import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName, difficulty) => {
    const newTask = { taskName, difficulty, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  const editTask = (editedTask) => {
    const updatedTasks = toDoList.map((task) => {
      if (task.id === editedTask.id) {
        return { ...task, taskName: editedTask.taskName, difficulty: editedTask.difficulty };
      }
      return task;
    });
    setToDoList(updatedTasks);
  };
  
  const deleteTask = (taskIdToDelete) => {
    const updatedTasks = toDoList.filter(task => task.id !== taskIdToDelete);
    setToDoList(updatedTasks);
  };

  return (
    <div>
      <div className="banner">
        <h1>React + Ts Todo</h1>
      </div>

    
    <div className="container">
      <h1>Tarefas</h1>
      
      <TaskInput addTask={addTask} />

      <div className="toDoList">
        <span>tarefas:</span>
        <ul className='list-items'>
          {toDoList.map((task, key) => (
            <TaskItem task={task} key={key} deleteTask={deleteTask} editTask={editTask} />
          ))}
        </ul>
        {toDoList.length === 0 ? (
          <p className="notify">Não tem task</p>
        ) : null} 
     
      </div>
    </div>
    <footer className="footer">
        <h1>React + Ts Todo @ 2023</h1>
      </footer>
    </div>
  );
}

export default App;