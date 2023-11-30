import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [difficulty, setDifficulty] = useState(1);

  function handleInputValue(event) {
    setTask(event.target.value);
  }
  const handleAddTask = () => {
    if (task.trim() === '') return;
    const newTask = {
      id: uuidv4(), 
      taskName: task,
      difficulty: difficulty,
      checked: false 
    };
    addTask(newTask);
    setTask('');
    setDifficulty(1);
  };
  
  function handleDifficultyValue(event) {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setDifficulty(value);
    }
  };
  return (
    <form className="inputField" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={handleInputValue}
      />
        <div className="difficultyField" onSubmit={handleDifficultyValue}>
        <input
          type="number"
          placeholder="Definir Dificuldade"
          id="difficulty"
          value={difficulty}
          onChange={handleDifficultyValue}
          min={1}
          max={5}
        />
      </div>

      <button type="submit">+</button>
    </form>

    

  );
};

export default TaskInput;
