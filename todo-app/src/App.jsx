import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TodoD from './TodoD';
import NotF from './NotF';

// import ErrorB from './ErrorB';
// impo

function App() {
  return (
    <Router>
      {/* <ErrorBoundary> */}
        <div >
          <header >
            <h1   style={{
   
    display: 'flex',
    justifyContent: 'center',
    

   
  }}>Todo App</h1>
          </header>
          <main >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo/:id" element={<TodoD />} />
              <Route path="*" element={<NotF />} />
            </Routes>
          </main>
        </div>
      {/* </ErrorBoundary> */}
    </Router>
  );
}

export default App;