import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsInbox } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

export default function KambazNavigation() {
  return (
     <div id="wd-kambaz-navigation" 
          style={{ width: 110, top: 0, bottom: 0, left: 0, backgroundColor: "black" }} 
          className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
 
       <a id="wd-neu-link" target="_blank" 
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0 text-center">
          <img src='public/assets/NU_CMYK_Notched-N_wordmark_RW.png' width="40px" alt="Northeastern Logo" />
       </a><br />
       
       <NavLink to="/Kambaz/Account" id="wd-account-link"
         className={({ isActive }) => 
           `list-group-item text-center border-0 ${isActive ? "active-link" : "bg-black text-white"}`}>
         <FaRegCircleUser className="fs-1 text-danger" /><br />
         Account 
       </NavLink>
 
       <NavLink to="/Kambaz/Dashboard" id="wd-dashboard-link"
         className={({ isActive }) => 
           `list-group-item text-center border-0 ${isActive ? "active-link" : "bg-black text-white"}`}>
         <AiOutlineDashboard className="fs-1 text-danger" /><br />
         Dashboard 
       </NavLink>
 
       <NavLink to="/Kambaz/Courses" id="wd-course-link"
         className={({ isActive }) => 
           `list-group-item text-center border-0 ${isActive ? "active-link" : "bg-black text-white"}`}>
         <LiaBookSolid className="fs-1 text-danger" /><br />
         Courses 
       </NavLink>
 
       <NavLink to="/Kambaz/Calendar" id="wd-calendar-link"
         className={({ isActive }) => 
           `list-group-item text-center border-0 ${isActive ? "active-link" : "bg-black text-white"}`}>
         <IoCalendarOutline className="fs-1 text-danger" /><br />
         Calendar 
       </NavLink>  
 
       <NavLink to="/Kambaz/Inbox" id="wd-inbox-link"
         className={({ isActive }) => 
           `list-group-item text-center border-0 ${isActive ? "active-link" : "bg-black text-white"}`}>
         <BsInbox className="fs-1 text-danger" /><br />
         Inbox 
       </NavLink> 
 
       <NavLink to="/Labs" id="wd-labs-link"
         className={({ isActive }) => 
           `list-group-item text-center border-0 ${isActive ? "active-link" : "bg-black text white text-white"}`}>
         <MdOutlineScience className="fs-1 text-danger" /><br />
         Labs 
       </NavLink>                
     </div>
   );
 }

