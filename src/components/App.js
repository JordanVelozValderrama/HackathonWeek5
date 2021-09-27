import React from 'react';
import './App.css';

const App = () => {
  
    document.body.classList.add("mode_light");

    const change_theme  = () => {
        var theme = ""+document.body.classList.value;
        if(theme==="mode_dark"){
            document.body.classList.remove("mode_dark");
            document.body.classList.add("mode_light");
        }else{
            document.body.classList.remove("mode_light");
            document.body.classList.add("mode_dark");
        }
    }

    return (
        <center>
            <div style={{width:'300px'}}>
                <h1>Hello.</h1>
                <h2>Welcome Back</h2>
                <label>Username</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <p><a href="#ForgotPassword">Forgot Password?</a></p>
                <p><button className="btn login" id="fr">Login</button></p>
                <p><a href="#CreateAccount">Create Account</a></p>
                <button className="btn" id="sw_theme" onClick={change_theme}>Change theme</button>
            </div>
            </center>
    )
}

export default App;