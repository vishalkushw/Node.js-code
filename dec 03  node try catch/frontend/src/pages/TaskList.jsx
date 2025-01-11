import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const { data } = await axios.get('/api/tasks', {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
