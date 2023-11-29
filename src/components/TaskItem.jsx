import React from 'react';
//import { MdDeleteSweep } from 'react-icons/md';

const TaskItem = ({ task, deleteTask }) => {
  const { taskName, difficulty } = task;

  const handleDeleteTask = () => {
    deleteTask(task);
  };

  return (
    <li className="items">
      <div className="items-text">
        <input type="checkbox" />
        <p>{taskName}</p>
        <div className='items-text-difficulty'>
        Dificuldade: {difficulty}
      </div>
      </div>
      <button className="delete-icon" onClick={handleDeleteTask} />
    </li>
  );
};

export default TaskItem;
