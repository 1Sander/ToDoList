import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName, difficulty) => {
    const newTask = { taskName, difficulty, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  const deleteTask = (taskToDelete) => {
    const updatedTasks = toDoList.filter(task => task !== taskToDelete);
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
            <TaskItem task={task} key={key} deleteTask={deleteTask} />
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