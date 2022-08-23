import './assets/css/main.css';
import LoginPage from './screens/authentication/LoginPage';
import Loading from './components/loading';
import { useState } from 'react';
import Header from './screens/authentication/Header';
import Register from './screens/authentication/Register';

function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <div>
        {/* <Loading spinnerShow = {loading} message= {message} /> */}
        {/* <LoginPage setLoading = {setLoading} setMessage = {setMessage} loading = {loading}/> */}
        <Header />
        <Register />
    </div>
  );
}

export default App;
