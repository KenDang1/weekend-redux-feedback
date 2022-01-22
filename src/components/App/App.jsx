import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx';
import { HashRouter as Router, Route} from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
