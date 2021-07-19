import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import firebase from '../../Config/firebase/firebase';


export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const  handleSubmit = (event) =>{
      event.preventDefault()
      console.log(email,password);
      // Firebase
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(()=>{
        alert("User Created")
      }).catch(()=>{
        alert("Error Occured or user not created")
      })
     
    }

    return (
        <div>
      <form onSubmit={handleSubmit}>
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
