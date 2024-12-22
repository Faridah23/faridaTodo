

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

function Home() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    fetchTodos();
  }, [page]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchTodos();
    }, 300); // Debounce search

    return () => clearTimeout(timeout);
  }, [search]);

  const fetchTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL);
      const filteredTodos = response.data.filter(todo =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      );
      setTodos(
        filteredTodos.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
      );
    } catch (error) {
      console.error('Error fetching todos:', error);
      setError('Failed to load todos. Please try again later.');
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', textAlign: 'center', fontWeight: 'bold', marginBottom: '16px' }}>Todos</h2>
      <input
        type="text"
        placeholder="Search todos..."
        style={{
          border: '2px solid #d1d5db',
          padding: '8px',
          borderRadius: '4px',
          width: '90%',
          maxWidth: '400px',
          marginBottom: '16px',
          margin: '0 auto',
          boxSizing: 'border-box',
          display:'flex  '
        }}
        value={search}
        onChange={handleSearch}
      />
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {loading ? (
        <p style={{ fontSize: '1rem', textAlign: 'center' }}>Loading...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                marginBottom: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Link to={`/todo/${todo.id}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                {todo.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          style={{
            backgroundColor: page === 1 ? '#e5e7eb' : '#d1d5db',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: page === 1 ? 'not-allowed' : 'pointer',
          }}
          aria-label="Previous page"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={todos.length < ITEMS_PER_PAGE}
          style={{
            backgroundColor: todos.length < ITEMS_PER_PAGE ? '#e5e7eb' : '#d1d5db',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: todos.length < ITEMS_PER_PAGE ? 'not-allowed' : 'pointer',
          }}
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
