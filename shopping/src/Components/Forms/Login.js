import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import firebase from '../../Config/firebase/firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const  handleSubmit = (event) =>{
      event.preventDefault()
        
      // Firebase
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then((userCredential)=>{
        var user = userCredential.user;
        console.log(user)
        alert("Login Successfully")
        history.push('/')
      }).catch(()=>{
        alert("Error Occured or user not created")
      })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(ev)=>setEmail(ev.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(ev)=>setPassword(ev.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
        </div>
    )
}

export default Login
