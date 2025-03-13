// import { NavLink } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsInbox } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export default function KambazNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kambaz/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kambaz/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kambaz/Inbox",     icon: BsInbox },
    { label: "Labs",      path: "/Labs",             icon: MdOutlineScience },
  ];

  return (
    //  <div id="wd-kambaz-navigation" 
    //       style={{ width: 110, top: 0, bottom: 0, left: 0, backgroundColor: "black" }} 
    //       className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
 
    //    <a id="wd-neu-link" target="_blank" 
    //       href="https://www.northeastern.edu/"
    //       className="list-group-item bg-black border-0 text-center">
    //       <img src='assets/NU_CMYK_Notched-N_wordmark_RW.png' width="40px" alt="Northeastern Logo" />
    //    </a><br />
       
    //    <NavLink to="/Kambaz/Account" id="wd-account-link"
    //      className={({ isActive }) => 
    //        `list-group-item text-center border-0 ${isActive ? "active-link" : "bg-black text-white"}`}>
    //      <FaRegCircleUser className="fs-1 text-danger" /><br />
    //      Account 
    //    </NavLink>
 
    //    <NavLink to="/Kambaz/Dashboard" id="wd-dashboard-link"
    //      className={({ isActive }) => 
    //        `list-group-item text-center border-0 ${isActive ? "active-link" : "bg-black text-white"}`}>
    //      <AiOutlineDashboard className="fs-1 text-danger" /><br />
    //      Dashboard 
    //    </NavLink>
 
    //    <NavLink to="/Kambaz/Courses" id="wd-course-link"
    //      className={({ isActive }) => 
    //        `list-group-item text-center border-0 ${isActive ? "active-link" : "bg-black text-white"}`}>
    //      <LiaBookSolid className="fs-1 text-danger" /><br />
    //      Courses 
    //    </NavLink>
 
    //    <NavLink to="/Kambaz/Calendar" id="wd-calendar-link"
    //      className={({ isActive }) => 
    //        `list-group-item text-center border-0 ${isActive ? "active-link" : "bg-black text-white"}`}>
    //      <IoCalendarOutline className="fs-1 text-danger" /><br />
    //      Calendar 
    //    </NavLink>  
 
    //    <NavLink to="/Kambaz/Inbox" id="wd-inbox-link"
    //      className={({ isActive }) => 
    //        `list-group-item text-center border-0 ${isActive ? "active-link" : "bg-black text-white"}`}>
    //      <BsInbox className="fs-1 text-danger" /><br />
    //      Inbox 
    //    </NavLink> 
 
    //    <NavLink to="/Labs" id="wd-labs-link"
    //      className={({ isActive }) => 
    //        `list-group-item text-center border-0 ${isActive ? "active-link" : "bg-black text white text-white"}`}>
    //      <MdOutlineScience className="fs-1 text-danger" /><br />
    //      Labs 
    //    </NavLink>                
    //  </div>
    
    <ListGroup id="wd-kambaz-navigation"  style={{ width: 110, top: 0, bottom: 0, left: 0, backgroundColor: "black" }} 
         

         className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <ListGroup.Item id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/"
        action className="bg-black border-0 text-center">
        <img src='assets/NU_CMYK_Notched-N_wordmark_RW.png' width="50px" /></ListGroup.Item>
      <ListGroup.Item as={Link} to="/Kambaz/Account" className={`text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </ListGroup.Item>
      {links.map((link) => (
        <ListGroup.Item key={link.path} as={Link} to={link.path} className={`bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </ListGroup.Item>
      ))}
    </ListGroup>

   );
 }

