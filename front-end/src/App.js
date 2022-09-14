import React from 'react';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/Global.css"
import "./assets/css/Ybalah.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Scenes
import SignUp from './scenes/authentication/SignUp';
import SignIn from './scenes/authentication/SignIn';
import Home from './scenes/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
