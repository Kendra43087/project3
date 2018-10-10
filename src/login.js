import React, { Component } from 'react';
import './login.css';


<button onclick="document.getElementById('id01').style.display='block'">Login</button>


class Login extends Component {
    render() {
      return (

<div id="id01" className="login">
  <span onclick="document.getElementById('id01').style.display='none'" 
className="close" title="Close Login">&times;</span>
</div>

  <form className="login-content animate" action="/action_page.php">
    <div className="imgcontainer">
      <img src="img_avatar2.png" alt="Avatar" class="avatar">
    </img>
    </div>
    </form>

    <div className="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>
      </input>
    </div>
    <div>
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
      </input>
    </div>

      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </input>
      </label>
      


    <div className="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
      <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
  

    


         <button className="button button2" app src="./App.js">submit</button>
      );
      }
    }
    

export default Login;