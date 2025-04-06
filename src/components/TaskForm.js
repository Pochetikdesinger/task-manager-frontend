import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initialTask = { title: '', description: '', completed: false } }) => {
  const [task, setTask] = useState(initialTask);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({
      ...task,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      <div className="form-group">
        <label>Descripción</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="textarea"
        />
      </div>
      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="completed"
            checked={task.completed}
            onChange={handleChange}
            className="checkbox"
          />
          Completada
        </label>
      </div>
      <button type="submit" className="btn btn-success">
        Guardar
      </button>
    </form>
  );
};

export default TaskForm;