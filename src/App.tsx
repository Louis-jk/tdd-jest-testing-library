import React from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import Contact from './components/contact/Contact';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
      <Contact />
      <Counter />
      <Users />
    </div>
  );
}

export default App;
