import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response.data);
      } catch (err) {
        console.error('Error al cargar las tareas:', err);
        setError('Error al cargar las tareas. Verifica que el backend esté funcionando.');
      }
    };

    fetchTasks();
  }, [user, navigate]);

  const handleCreate = async (task) => {
    try {
      const response = await createTask(task);
      setTasks([...tasks, response.data]);
    } catch (err) {
      console.error('Error al crear la tarea:', err);
      setError('Error al crear la tarea');
    }
  };

  const handleUpdate = async (id, updatedTask) => {
    try {
      const response = await updateTask(id, updatedTask);
      setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
    } catch (err) {
      console.error('Error al actualizar la tarea:', err);
      setError('Error al actualizar la tarea');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error('Error al eliminar la tarea:', err);
      setError('Error al eliminar la tarea');
    }
  };

  return (
    <div className="container">
      <h2>Mis Tareas</h2>
      {error && <p className="error">{error}</p>}
      <TaskForm onSubmit={handleCreate} />
      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tienes tareas aún.</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Tasks;