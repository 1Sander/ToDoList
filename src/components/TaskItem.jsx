import React, { useState } from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';

const TaskItem = ({ task, deleteTask, editTask }) => {
  const { id, taskName, difficulty } = task; // Suponhamos que cada tarefa tenha um id único

  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(taskName);
  const [editedDifficulty, setEditedDifficulty] = useState(difficulty);

  const handleDeleteTask = () => {
    deleteTask(task);
  };

  const handleEditTask = () => {
    if (isEditing) {
      editTask({ id, taskName: editedTaskName, difficulty: editedDifficulty });
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'editedTaskName') {
      setEditedTaskName(value);
    } else if (name === 'editedDifficulty') {
      setEditedDifficulty(value);
    }
  };

  return (
    <li className="items">
      <div className="items-text">
        <input type="checkbox" />
        {isEditing ? (
          <>
            <input
              type="text"
              className="inputField"
              name="editedTaskName"
              value={editedTaskName}
              onChange={handleChange}
            />
            <input
              type="number"
              className="inputField"
              name="editedDifficulty"
              value={editedDifficulty}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <p>{taskName}</p>
            <div className='items-text-difficulty'>
              Dificuldade: {difficulty}
            </div>
          </>
        )}
      </div>
      <MdDeleteSweep className="delete-icon" onClick={handleDeleteTask} />
      <MdEdit className="edit-icon" onClick={handleEditTask} />
    </li>
  );
};

export default TaskItem;