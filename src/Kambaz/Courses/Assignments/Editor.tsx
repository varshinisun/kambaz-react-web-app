import { Form, Button } from "react-bootstrap";

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
          <Form.Label htmlFor="wd-points">Points</Form.Label>
          <Form.Control id="wd-points" type="number" defaultValue={100} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-due-date">Due Date</Form.Label>
          <Form.Control id="wd-due-date" type="date" defaultValue="2025-01-25" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-website-url">Website URL</Form.Label>
          <Form.Control id="wd-website-url" type="url" placeholder="Enter URL" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-group">Group</Form.Label>
          <Form.Control id="wd-group" type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-media-recordings">Media Recordings</Form.Label>
          <Form.Control id="wd-media-recordings" type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
          <Form.Control id="wd-available-from" type="date" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-student-annotation">Student Annotation</Form.Label>
          <Form.Control id="wd-student-annotation" type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-available-until">Available Until</Form.Label>
          <Form.Control id="wd-available-until" type="date" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
          <Form.Control id="wd-submission-type" type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-file-upload">File Upload</Form.Label>
          <Form.Control id="wd-file-upload" type="file" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-file-name">File Name</Form.Label>
          <Form.Control id="wd-file-name" type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-text-entry">Text Entry</Form.Label>
          <Form.Control id="wd-text-entry" type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-assign-to">Assign To</Form.Label>
          <Form.Control id="wd-assign-to" type="text" />
        </Form.Group>
        <Button variant="primary" className="w-100">Save Assignment</Button>
      </Form>
    </div>
  );
}
