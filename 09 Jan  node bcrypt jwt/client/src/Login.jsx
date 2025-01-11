import { useState } from "react";
import axios from "axios";

const Login=()=>{
  const [email, setEmail]= useState("");
  const [password, setPassword]=useState("");

  const handleSubmit=()=>{
    let api="http://localhost:8000/user/login";
    axios.post(api, {email:email, password:password}).then((res)=>{
      alert("Login successs");
    })
  }


    return(
        <>
          <h1>User Login</h1>       
          Enter email : <input type="text" name="email" 
            value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <br/>
          Enter password : <input type="password"  name="password" 
            value={password} onChange={(e)=>{setPassword(e.target.value)}} />
         <br/>
         <button onClick={handleSubmit}> Register</button>

        </>
    )
}

export default Login;