// import React from 'react'

import { BrowserRouter, Route,  Routes } from "react-router-dom"
import LoginPage from "./LoginPage"
import Home from "./Home"
import UserProfile from "./UserProfile"
import ListOfJobs from "./ListOfJobs"
import Applyjob from "./Applyjob"
import About from "./Aboutus"
import Edituser from "./Edituser"
import Adminpage from "./Adminside/Adminpage"
import TermandConditions from "./footerpages/Terms"
import AdminPaymnent from "./Adminside/AdminPaymnent"
import AdminCreateJob from "./Adminside/AdminCreateJob"
import AdminAppstatus from "./Adminside/AdminAppstatus"
// import Footer from "./Footer"
// import Navbar from "./NavBar"
function Routing() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/profile" element={<UserProfile/>}/>
        <Route path="/listjobs" element={<ListOfJobs/>}/>
        <Route path="/applyjob" element={<Applyjob/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/terms" element={<TermandConditions/>}/>
        <Route path="/edituser" element={<Edituser/>}/>

        {/* admin side */}
        <Route path="/admin/page" element={<Adminpage/>}/>
        <Route path="/admin/payment" element={<AdminPaymnent/>}/>
        <Route path="/admin/createjob" element={<AdminCreateJob/>}/>
        <Route path="/admin/appstatus" element={<AdminAppstatus/>}/>
  
        {/* <Route component={NotFound} /> This catches any unknown routes */}
      
    </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
