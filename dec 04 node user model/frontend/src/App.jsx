import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import DashBoard from "./pages/DashBoard";
import AdminHome from "./adminpages/AdminHome";
import AdminAbout from "./adminpages/AdminAbout";

const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="home" element={<Home/>}/>
              <Route path="registration" element={<Registration/>}/>
             
            </Route>
          </Routes>
        
         <Routes>
            <Route path="dashboard" element={<DashBoard/>}>
             <Route path="adminhome" element={<AdminHome/>}/>
             <Route path="adminabout" element={<AdminAbout/>}/>

            </Route>
         </Routes>


        </BrowserRouter>
    </>
  )
}

export default App;