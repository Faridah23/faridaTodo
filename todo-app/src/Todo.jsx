// import React, { useState, useEffect } from 'react';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [todosPerPage] = useState(10); // Number of Todos per page
//   const [searchTerm, setSearchTerm] = useState('');

//   // Fetching Todos from an API (replace URL with your actual API)
//   useEffect(() => {
//     async function fetchTodos() {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//       const data = await response.json();
//       setTodos(data);
//     }
//     fetchTodos();
//   }, []);

//   // Filter Todos based on the search term
//   const filteredTodos = todos.filter(todo =>
//     todo.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination Logic
//   const indexOfLastTodo = currentPage * todosPerPage;
//   const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//   const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

//   // Pagination change handler
//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
//       <h1 className="text-2xl font-bold mb-6">Todos</h1>

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search Todos..."
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//         className="mb-6 p-2 border border-gray-300 rounded-lg w-full max-w-md"
//       />

//       {/* List of Todos */}
//       <ul className="space-y-4">
//         {currentTodos.map(todo => (
//           <li key={todo.id} className="flex items-center space-x-4">
//             {todo.completed ? (
//               <del className="text-gray-500 line-through">{todo.title}</del>
//             ) : (
//               <span>{todo.title}</span>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Pagination */}
//       <div className="mt-6 space-x-2">
//         {Array.from({ length: Math.ceil(filteredTodos.length / todosPerPage) }, (_, i) => (
//           <button
//             key={i + 1}
//             onClick={() => paginate(i + 1)}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
