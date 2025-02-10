import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>

    <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Varshini</span>{" "}
          <span className="wd-last-name">Sundaresan</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S102</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-01</td>
      <td className="wd-total-activity">10:21:32</td></tr>
     </tbody>

     <tbody>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-4 fs-1 text-secondary" />
          <span className="wd-first-name">Ahmad</span>{" "}
          <span className="wd-last-name">Shehadeh</span></td>
      <td className="wd-login-id">005198765S</td>
      <td className="wd-section">S102</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2022-12-01</td>
      <td className="wd-total-activity">14:21:32</td></tr>
      </tbody>

      <tbody>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-3 fs-1 text-secondary" />
          <span className="wd-first-name">Nadia</span>{" "}
          <span className="wd-last-name">Youssef</span></td>
      <td className="wd-login-id">001234322S</td>
      <td className="wd-section">S102</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2023-10-01</td>
      <td className="wd-total-activity">16:23:32</td></tr>
    </tbody>

    <tbody>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-3 fs-1 text-secondary" />
          <span className="wd-first-name">Ana</span>{" "}
          <span className="wd-last-name">Assaad</span></td>
      <td className="wd-login-id">004634327S</td>
      <td className="wd-section">S102</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2023-14-01</td>
      <td className="wd-total-activity">22:24:35</td></tr>
    </tbody>

    <tbody>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-3 fs-1 text-secondary" />
          <span className="wd-first-name">Jeffrey</span>{" "}
          <span className="wd-last-name">Ochoa-Alvarez</span></td>
      <td className="wd-login-id">008276493S</td>
      <td className="wd-section">T102</td>
      <td className="wd-role">TA</td>
      <td className="wd-last-activity">2025-05-02</td>
      <td className="wd-total-activity">21:33:44</td></tr>
    </tbody>
   </Table>
  </div> );}