import React from 'react';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/Global.css"
import "./assets/css/Ybalah.css"

import { Routes, Route } from 'react-router-dom';

import { ProtectedLayout } from "./components/layout/ProtectedLayout";
import { HomeLayout } from "./components/layout/HomeLayout";
//Scenes
import SignUp from './scenes/authentication/SignUp';
import SignIn from './scenes/authentication/SignIn';
import Home from './scenes/portal/Home';

function App() {
  return (
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route element={<ProtectedLayout />}>
          <Route path="/portal" element={<Home />} />
        </Route>
      </Routes>
  );
}

export default App;
