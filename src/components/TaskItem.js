import React, { useState } from 'react';
import TaskForm from './TaskForm';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedTask) => {
    onUpdate(task.id, updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <TaskForm onSubmit={handleUpdate} initialTask={task} />
      ) : (
        <>
          <div className="task-content">
            <h3 className={task.completed ? 'task-title completed' : 'task-title'}>
              {task.title}
            </h3>
            <p>{task.description}</p>
            <p className="task-status">
              Estado: {task.completed ? 'Completada' : 'Pendiente'}
            </p>
          </div>
          <div className="task-actions">
            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-edit"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="btn btn-delete"
            >
              Eliminar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;

