import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import './index.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

function App() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // do something with username and password

  };

  return (
   <>
   <BrowserRouter>
      <Routes>
          <Route/>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App


