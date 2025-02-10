import { Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4 text-start">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control id="wd-name" defaultValue="A1 - ENV + HTML" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-description">Description</Form.Label>
          <Form.Control as="textarea" id="wd-description" defaultValue="The assignment is available online. Sumbit a link of your website to the landing page on Netlify. The landing page should include the following: Your full name and section, links to each of the lab assignments, links to the Kambaz application, and links to all relevant code repositories." />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name-group">Assignment Group</Form.Label>
          <Form.Control id="wd-name-group" defaultValue="Assignments" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-display">Display Grade As</Form.Label>
          <Form.Control id="wd-display" defaultValue="Percentage" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-points">Points</Form.Label>
          <Form.Control id="wd-points" type="number" defaultValue={100} />
        </Form.Group>

        <div id="wd-css-responsive-forms-2">
      <h5>Submission Type</h5>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Text Entry</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Enter text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Website URL</Form.Label>
          <Col sm={10}>
            <Form.Control type="url" placeholder="Enter URL" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Media Recordings</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Enter media recording details" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Student Annotation</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Enter annotation" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>File Uploads</Form.Label>
          <Col sm={10}>
            <Form.Control type="file" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
        </Form.Group>
      </Form>
    </div>

    <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-assign-to">Assign To</Form.Label>
          <Form.Control id="wd-assign-to" type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-due-date">Due</Form.Label>
          <Form.Control id="wd-due-date" type="date" defaultValue="2025-01-25" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
          <Form.Control id="wd-available-from" type="date" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-available-until">Available Until</Form.Label>
          <Form.Control id="wd-available-until" type="date" />
        </Form.Group>
        <Button variant="primary" className="w-100">Save Assignment</Button>
      </Form>
    </div>
  );
}
