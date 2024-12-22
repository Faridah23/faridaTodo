import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

function TodoDetails() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      setTodo(response.data);
    } catch (error) {
      console.error('Error fetching todo:', error);
    }
  };

  return (
    <div>
      {todo ? (
        <div>
          <h2 style={{textAlign:'center'}}>{todo.title}</h2>
          <p style={{textAlign:'center'}}>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p  style={{textAlign:'center'}}>Loading...</p>
      )}
    </div>
  );
}

export default TodoDetails;