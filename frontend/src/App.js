import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';
import ShowANDAddWorks from './components/ShowANDAddWorks';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu />
        <Routes>
          <Route exact path='/works' element={<ShowANDAddWorks/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
