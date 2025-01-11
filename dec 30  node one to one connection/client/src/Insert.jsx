import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const [input, setInput] =useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
    }

    const handleSubmit=()=>{
     let api="http://localhost:8000/user/datasave";
     axios.post(api, input).then((res)=>{
        alert("Data save!!!");
     })
    }

    return(
        <>
          <h1> Insert Data</h1>

          Enter Username : <input type="text" name="username" value={input.username}  onChange={handleInput}/>
          <br/>
          Enter Email : <input type="text" name="email" value={input.email}  onChange={handleInput}/>
          <br/>
          Enter First name : <input type="text" name="firstname" value={input.firstname}  onChange={handleInput}/>
          <br/>
          Enter Lastname : <input type="text" name="lastname" value={input.lastname}  onChange={handleInput}/>
          <br/>
          <button onClick={handleSubmit}>Save!</button>
        </>
    )
}

export default Insert;