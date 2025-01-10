import {Link, Outlet}  from "react-router-dom";

const Layout=()=>{
    return(
        <>
          <Link to="home">Home</Link> |
          <Link to="insert">Insert</Link> |
          <Link to="display">Display</Link>
          <hr size="4" color="green" />

          <Outlet/>

 <br/>
          well come to our comapany 
        
        </>
    )
}

export default Layout;