import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { message } from "antd";
const DisplayTask=()=>{
    const [mydata, setMydata]=useState([]);

    const loadData= async()=>{
        let api="http://localhost:8000/admin/displayusertask";
try {
    const response=await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
    
} catch (error) {
    console.log(error)
}
    }

    useEffect(()=>{
      loadData();
    } ,[])


    const deluserTask=async(id)=>{
        let api=`http://localhost:8000/admin/deletusertask/?id=${id}`;
        try {
            const response = await axios.get(api);
            message.success("Task succesfully deleted");
        } catch (error) {
            console.log(error);
        }
    }
    const ans= mydata.map((key)=>{
        return(
            <>
              <tr> 

                <td>{key.userid.username}</td>
                <td>{key.userid.designation}</td>
                <td>{key.userid.email}</td>
                <td>{key.tasktitle}</td>
                <td>{key.taskdetail}</td>
                <td> <Button variant="primary" onClick={()=>{deluserTask(key._id)}}>Delete</Button>
                </td>
              </tr>
            </>
        )

    })
    return(
        <>
         <h1>Display All user Task</h1>

        <table>
            <tr>
                <td></td>
                 <Table striped bordered hover>
      <thead>
        <tr>
          <th>User Name</th>
          <th>Designation</th>
          <th>Email</th>
          <th>Task Title </th>
          <th>Task Detail </th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
      </Table>
            </tr>
        </table>
        </>
    )
}
export default DisplayTask;