import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Main from './components/main';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
