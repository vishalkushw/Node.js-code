import { useState, useEffect } from "react";
import axios from "axios";
    

const Home=()=>{
  const [mydata, setMydata]=useState([]);
  const loadData=()=>{
      let api="http://localhost:8080/students/datadisplay";
      axios.get(api).then((res)=>{
          setMydata(res.data)
          console.log(res.data);
      })
  }
  useEffect(()=>{
      loadData();
  }, [])


  return(
      <>
        <h1> Home page</h1>
      </>
  )
}

export default Home;