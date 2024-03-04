  import React, { useState } from 'react';
  import axios from 'axios';
  import './login.css';
  import Cookies from 'js-cookie';

  function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [buttonStatus,setButtonStatus] = useState(false)

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
      setButtonStatus(true) 
        const response = await axios.post("http://localhost:3000/logins", { Email: username, Password: password });
        console.log(response.data);
        Cookies.set('Username',username)
        localStorage.setItem("token",response.data.token)
        Cookies.set("token",response.data.token)
        alert("You have logged in..")
        window.location.href="/"
    };

    const logoutFunc = () => {
      setButtonStatus(true)
      Cookies.remove("Username")
      Cookies.remove("token")
      alert("You have logged out..")
      window.location.href="/"
    };

    return (
      <div id="loginPage">
        <h1>Log In/Sign Up</h1>
        <form id="loginArea">
          <label>User Name</label><br /><input type="text" required onChange={(e) => setUsername(e.target.value)} /><br /><br />
          <label>Password</label><br /><input type="password" id="x" required onChange={(e) => setPassword(e.target.value)} /><br /><br />
          <input type="checkbox" onClick={viewPassword} id='checkBox' /><label id='p'>Show Password</label>
          <br /><br />
          <div id='buttons'>
            <button onClick={loginFunc} disabled={buttonStatus}>Login</button> <button onClick={logoutFunc} disabled={buttonStatus}>Logout</button>
          </div>
          <br /><br />
        </form>
      </div>
    );
  }

  export default Login;
