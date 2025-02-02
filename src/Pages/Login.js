import React from 'react';
import {useNavigate} from 'react-router-dom';
//import {ReactComponent as Logo} from '../images/electric-vehicle-charging.webp';
import MyImage from '../images/ev-2.jpg';
// import './login.css';
import { useState } from "react";
import background from "../images/login-bg.png";


import "./LoginForm.css";


// User Login info
const database = [
    {
      username: "demo",
      password: "password"
    },
    {
      username: "demo1",
      password: "password1"
    }
  ];

//   const handleSubmit = (event) => {

//     // const navigate = useNavigate();
//     //Prevent page reload
//     event.preventDefault();
  
//     var { uname, pass } = document.forms[0];
//     let successpath = 'dashboard';

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);
  
//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         alert('Invalid Password');
//       } else {
//         alert('login Successful');
//       }
//     } else {
//       // Username not found
//       alert('Username not found');
//     }
//   };

const Login = (props) => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));


    const handleSubmit = (e) => {
        e.preventDefault()
        const account = database.find((user) => user.username === username);
        if (account && account.password === password) {
            setauthenticated(true)
            localStorage.setItem("authenticated", true);
            navigate("/dashboard");
        }
      };
  return (

      <div style={{ backgroundImage: `url('${background}')`, height: '100vh'}}>
            {/* <h1 style={{textAlign:"center"}}> NX2 - DIP</h1> */}
    <div id="login-form" >
      <form onSubmit={handleSubmit}>
      <h3 style={{textAlign:"center"}}>Sign in to your account</h3>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" onChange={(e) => setusername(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e) => setpassword(e.target.value)}/>
        <input type="submit" value="Sign In" />
      </form>
    </div>
    </div>
  );
};

export default Login;

  
// class Login extends React.Component { 
//     state={
//         email:'', 
//         pwd:''
//     }
//     handleOnChange = (e) => {
//         const {name, value} = e.target
//         this.setState({[name]: value})
//     }

//     handleOnSubmit = (e) => {
//         e.preventDefault();
//     }

//     render() { 

//         return (
//             <div className="div-login" >
//                 <div className='div-login-logo' >
//                     <img src={MyImage} alt="Logo" style={{width:250, height:200}} />
//                 </div>
//                 <div>
//                 <form onSubmit={this.handleSubmit}>
//                     Username or Email: <input type = "email" name = "email" placeholder = "email..." required/>
//                     <br/>
//                     Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input type = "password" name = "pwd" placeholder = "password..." required/>
//                     <br/> <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <button onSubmit={this.handleSubmit}>Log In</button>
//                 </form>
//                 </div>
//             </div>
//         )
//     }



//}

// export default Login;