import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata, setMydata]=useState([]);

    const loadData=()=>{
        let api="http://localhost:8000/books/datadisplay";
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
                <td> {key.authername} </td>
                <td> 


                 {key.books.map(key1=>{
                    return(
                        <>
                           <p> title:  {key1.booktitle}  Price : {key1.price} </p>
                        </>
                    )
                 })}

                </td>
              
               </tr>
            
            </>
        )
    })
    return(
        <>
          <h1> Display</h1>
          <table border="1">
            <tr>
                <th> Authername</th>
                <th>Detail </th>
            </tr>
            {ans}
          </table>
        
        </>
    )
}

export default Display;