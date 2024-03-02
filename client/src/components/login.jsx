import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import Cookies from 'js-cookie';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const viewPassword = () => {
    const x = document.getElementById('x');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };

  const loginFunc = async (e) => {
    e.preventDefault();
      const response = await axios.post("http://localhost:3000/logins", { Email: email, Password: password });
      console.log(response.data);
      Cookies.set('Email',email)
      alert("You have logged in..")
      window.location.href="/"
  };

  const logoutFunc = () => {
    Cookies.remove("Email");
    alert("You have logged out..");
    window.location.href="/"
  };

  return (
    <div id="loginPage">
      <h1>Log In/Sign Up</h1>
      <form id="loginArea">
        <label>Email</label><br /><input type="text" required onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <label>Password</label><br /><input type="password" id="x" required onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <input type="checkbox" onClick={viewPassword} id='checkBox' /><label id='p'>Show Password</label>
        <br /><br />
        <div id='buttons'>
          <button onClick={loginFunc}>Login</button> <button onClick={logoutFunc}>Logout</button>
        </div>
        <br /><br />
      </form>
    </div>
  );
}

export default Login;
