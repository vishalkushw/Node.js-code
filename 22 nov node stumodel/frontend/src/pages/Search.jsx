

import axios from "axios";
import { useState } from "react";

const Search=()=>{
    const [rno, setRno]=useState("")
    const [mydata, setMydata] = useState([]);

    const handleSubmit=()=>{
        let api="http://localhost:8080/students/datadisplay";
        axios.post(api, {rollno:rno}).then((res)=>{
                setMydata(res.data);
                console.log(res.data)
        })
    }

    const ans =mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            
            </>

        )
    })

    return(
        <>
        <h1>Search page</h1>
        Enter Rollno: <input type="text" value={rno} onChange={(e)=>{setRno(e.target.value)}}/>
        <button onClick={handleSubmit}>Search</button>
        <hr />
        <table>
            <tr>
                <th>Roll no</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {noRecord ? (
           <tr>
            <td colSpan={4}>No record found</td>
          </tr>
        ) : (
          ans
        )}
       </table>
       <hr />
        </>
    )
}

export default Search;