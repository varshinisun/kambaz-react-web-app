import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-5">
      <h1 className="text-center mb-4">Sign Up</h1>
      <Form>
        <Form.Group controlId="wd-username" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Username"
            className="wd-username"
          />
        </Form.Group>
        <Form.Group controlId="wd-password" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            className="wd-password"
          />
        </Form.Group>
        <Form.Group controlId="wd-password-verify" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Verify Password"
            className="wd-password-verify"
          />
        </Form.Group>
        <Link
          to="/Kambaz/Account/Profile"
          className="btn btn-primary w-100 mb-3"
        >
          Sign Up
        </Link>
      </Form>
      <div className="text-center">
        <p>
          Already have an account?{" "}
          <Link to="/Kambaz/Account/Signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
