import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import {Link, Outlet, useNavigate } from "react-router-dom";



const DashBoard=()=>{
    const [userName, setUserName]=useState("");
    const [userEmail, setUSerEmail]=useState("");
    const navigate= useNavigate();
    useEffect(()=>{
        const Uname= window.localStorage.getItem("userName");
        const Uemail=window.localStorage.getItem("userEmail");

         if (!Uname)
         {
            navigate("/home");
         }


        setUserName(Uname);
        setUSerEmail(Uemail);
    }, [])
  

    const logout=()=>{
        window.localStorage.clear();
        navigate("/home");

    }


    return(
        <>
        <div id="adminDashboard">
        Welcome : {userName} Email : {userEmail}
        <Button variant="primary" onClick={logout} size="sm" style={{marginLeft:'20px'}}>
         Logout
        </Button>
        
        </div>
       
          <hr/>
          <h1> Welcome To Admin DashBoard! </h1>

          <div id="adminDash">
            <div id="adminMenu"> 
                
                <Link to="adminhome"> Home Page</Link>
                <br />
                <br/>
                <Link to="adminabout"> About Page</Link>
                
                
                 </div>
            <div id="adminData">
                
                 <Outlet/>
                
                 </div>

          </div>

        </>
    )
}

export default DashBoard;