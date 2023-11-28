import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [difficulty, setDifficulty] = useState(1);

  function handleInputValue(event) {
    setTask(event.target.value);
  }

  function handleAddTask(event) {
    event.preventDefault();
    if (task.trim() === '') return;
    addTask(task, difficulty); 
    setTask('');
    setDifficulty(1);
  }
  
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
