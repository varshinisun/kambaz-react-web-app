import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsInbox } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import imageUrl from "c:/Users/19788/Downloads/Notched_N_Wordmark_RW/Notched_N_Wordmark_RW/3_CMYK/NU_CMYK_Notched-N_wordmark_RW.png"; 


export default function KambazNavigation() {
//   return (
//     <div id="wd-kambaz-navigation">
//       <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
//       <Link to="/Kambaz/Account" id="wd-account-link">Account</Link><br/>
//       <Link to="/Kambaz/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
//       <Link to="/Kambaz/Dashboard" id="wd-course-link">Courses</Link><br/>
//       <Link to="/Kambaz/Calendar" id="wd-calendar-link">Calendar</Link><br/>
//       <Link to="/Kambaz/Inbox" id="wd-inbox-link">Inbox</Link><br/>
//       <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
//     </div>
// );}
// return (
//   <div id="wd-kambaz-navigation" style={{ width: 110,  top: 0, bottom: 0, left: 0, backgroundColor: "black" }} 
//        className="list-group rounded-0 position-fixed
//        bottom-0 top-0 d-none d-md-block bg-black z-2">
//     <a id="wd-neu-link" target="_blank" 
//        href="https://www.northeastern.edu/"
//        className="list-group-item bg-black border-0 text-center">
//        <img src= {imageUrl} width="40px" /></a><br />
//     <Link to="/Kambaz/Account" id="wd-account-link"
//        className="list-group-item text-center border-0 
//                   bg-black text-white">
//        <FaRegCircleUser className="fs-1 text text-white" /><br />
//        Account </Link>
//     <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
//        className="list-group-item text-white border-0
//                   bg-black text-danger">
//        <AiOutlineDashboard className="fs-1 text-danger" /><br />
//        Dashboard </Link>
//     <Link to="/Kambaz/Dashboard" id="wd-course-link"
//        className="list-group-item text-white
//                   bg-black text-center border-0">
//        <LiaBookSolid className="fs-1 text-danger" /><br />
//        Courses </Link>
//     <Link to="/Kambaz/Calendar" id="wd-calendar-link"
//          className="list-group-item text-white
//                     bg-black text-center border-0">
//         <IoCalendarOutline className="fs-1 text-danger" /><br />
//         Calendar </Link>  
//     <Link to="/Kambaz/Inbox" id="wd-inbox-link"
//          className="list-group-item text-white
//                     bg-black text-center border-0">
//         <BsInbox className="fs-1 text-danger" /><br />
//         Inbox </Link> 
//     <Link to="/Labs" id="wd-labs-link"
//          className="list-group-item text-white
//                     bg-black text-center border-0">
//         <MdOutlineScience className="fs-1 text-danger" /><br />
//         Labs </Link>                
//   </div>);}

   return (
     <div id="wd-kambaz-navigation" 
          style={{ width: 110, top: 0, bottom: 0, left: 0, backgroundColor: "black" }} 
          className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
 
       <a id="wd-neu-link" target="_blank" 
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0 text-center">
          <img src={imageUrl} width="40px" alt="Northeastern Logo" />
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

