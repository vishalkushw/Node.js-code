import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata, setMydata]=useState([]);

    const loadData=()=>{
        let api="http://localhost:8000/user/datadisplay";
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    }, [])


    const ans=mydata.map(key=>{
        return(
            <>
               <tr>
                <td> {key.firstname} </td>
                <td> {key.lastname} </td>
                <td> {key.userid.username} </td>
                <td> {key.userid.email} </td>
               </tr>
            
            </>
        )
    })
    return(
        <>
          <h1> Display</h1>
          <table border="1">
            <tr>
                <th> Fristname</th>
                <th> Lastname</th>
                <th> Username</th>
                <th> Email</th>
            </tr>
            {ans}
          </table>
        
        </>
    )
}

export default Display;