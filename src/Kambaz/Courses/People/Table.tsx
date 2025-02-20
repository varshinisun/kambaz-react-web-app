import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { FaUserCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  return (
    <div id="wd-people-table" className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-start">Full Name</th>
            <th className="text-start">Login ID</th>
            <th className="text-start">Section</th>
            <th className="text-start">Role</th>
            <th className="text-start">Last Activity</th>
            <th className="text-start">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((usr) =>
              enrollments.some(
                (enrollment) => enrollment.user === usr._id && enrollment.course === cid
              )
            )
            .map((user: any) => (
              <tr key={user._id}>
                <td className="text-start">
                  <FaUserCircle className="me-2 fs-4 text-secondary" />
                  {user.firstName} {user.lastName}
                </td>
                <td className="text-start">{user.loginId}</td>
                <td className="text-start">{user.section}</td>
                <td className="text-start">{user.role}</td>
                <td className="text-start">{user.lastActivity}</td>
                <td className="text-start">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
