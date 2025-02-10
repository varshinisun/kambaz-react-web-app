import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-5">
      <h1 className="text-center mb-4">Profile</h1>
      <Form>
        <Form.Group controlId="wd-username" className="mb-3">
          <Form.Control
            type="text"
            defaultValue="alice"
            placeholder="Username"
            className="wd-username"
          />
        </Form.Group>
        <Form.Group controlId="wd-password" className="mb-3">
          <Form.Control
            type="password"
            defaultValue="123"
            placeholder="Password"
            className="wd-password"
          />
        </Form.Group>
        <Form.Group controlId="wd-firstname" className="mb-3">
          <Form.Control
            type="text"
            defaultValue="Alice"
            placeholder="First Name"
            id="wd-firstname"
          />
        </Form.Group>
        <Form.Group controlId="wd-lastname" className="mb-3">
          <Form.Control
            type="text"
            defaultValue="Wonderland"
            placeholder="Last Name"
            id="wd-lastname"
          />
        </Form.Group>
        <Form.Group controlId="wd-dob" className="mb-3">
          <Form.Control
            type="date"
            defaultValue="2000-01-01"
            id="wd-dob"
          />
        </Form.Group>
        <Form.Group controlId="wd-email" className="mb-3">
          <Form.Control
            type="email"
            defaultValue="alice@wonderland"
            placeholder="Email"
            id="wd-email"
          />
        </Form.Group>
        <Form.Group controlId="wd-role" className="mb-3">
          <Form.Control as="select" defaultValue="FACULTY" id="wd-role">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Control>
        </Form.Group>
        <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-3">
          Sign out
        </Link>
      </Form>
    </div>
  );
}
