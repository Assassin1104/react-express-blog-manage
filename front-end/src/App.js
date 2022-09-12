import './assets/css/main.css';
import LoginPage from './screens/authentication/LoginPage';
import Loading from './components/loading';
import { useState } from 'react';
import Header from './screens/authentication/Header';
import Register from './screens/authentication/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <Header title="register"/>
      <Register />
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
