import React, { Component } from 'react';
import './login.css';
import { Link } from 'react-router-dom'






class Login extends Component {
    render() {
      return (
<div>
  <div id="id01" className="login">
    <span onClick="document.getElementById('id01').style.display='none'" 
  className="close" title="Close Login">&times;</span>
  </div>

  
  <header>
          <h1 className="App-title">Mom's Intuition</h1>
        




       <p className="App-intro">
           Rare Childhood Disibalities </p>
</header>
    {/* <form className="login-content animate" action="/action_page.php"> */}

      {/* <div className="imgcontainer"> */}
      
         <img src="./images/background.jpg" alt=""/> 
       

      {/* </div> */}
      {/* </form> */}
      <div className="loginContainer">
      <div className="w3-container w3-margin">
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required>
        </input>
      </div>
      <div>
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
        </input>
      </div>

        <Link to="/web"><button>Submit</button></Link>

        
        <label>
          {/* <input type="checkbox" checked="checked" name="remember"> Remember me </input> */}
        </label>
        
      

      <div className="container" >
        <button type="button" onClick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
        <span className="psw">Forgot <a href="/web ">password?</a></span>
     </div>

      {/*<button className="button button2" href="./App.js">submit</button>*/}
  </div>
  </div>

    


         
      );
      }
    }
    
    
   
    

export default Login;