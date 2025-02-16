import { ListGroup, Button, Form } from "react-bootstrap";
import { RxDotsVertical } from "react-icons/rx";
import { RxDragHandleDots2 } from "react-icons/rx"
import { RiArrowDropDownFill } from "react-icons/ri";
import { MdOutlineAssignment } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-4">
      <Form.Control
        placeholder= "Search for Assignments"
        id="wd-search-assignment"              
        className="mb-3"
        />

      <div className="d-flex gap-2 mb-3">
        <Button variant="secondary" id="wd-add-assignment-group">
          + Group
        </Button>
        <Button variant="danger" id="wd-add-assignment">
          + Assignment
        </Button>
      </div>
      <ListGroup id="wd-assignment-list">
        <ListGroup.Item id="wd-assignments-title" className="d-flex align-items-center gap-2 p-3 bg-light border">
          <RxDragHandleDots2 />
          <RiArrowDropDownFill />
          ASSIGNMENTS 
          <Button variant="outline-secondary" size="sm" >40% of Total</Button>
          <Button variant="" size="sm">+</Button>
          <RxDotsVertical className="me-2" style={{ bottom: "1px" }} />
        </ListGroup.Item>
        <ListGroup.Item className="wd-assignment-list-item">
        <RxDragHandleDots2 className="me-2" style={{ bottom: "1px" }} />
        <MdOutlineAssignment />
          <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link text-dark text-decoration-none">
            A1
          </a>
          <div className="text-danger small">Multiple Modules</div>
          <div className="text-muted small"> | Not available until Jan 10 at 12:00am</div>
          <div className="fw-normal small">Due January 18 | 25 Points</div>
          <GreenCheckmark />
          <RxDotsVertical />
        </ListGroup.Item>
        <ListGroup.Item className="wd-assignment-list-item">
        <RxDragHandleDots2 className="me-2" style={{ bottom: "1px" }} />
        <MdOutlineAssignment />
          <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link text-dark text-decoration-none">
            A2
          </a>
          <div className="text-danger small">Multiple Modules</div>
          <div className="text-muted small"> | Not available until Jan 10 at 12:00am</div>
          <div className="fw-normal small">Due January 20 | 25 Points</div>
          <GreenCheckmark />
          <RxDotsVertical />
        </ListGroup.Item>
        <ListGroup.Item className="wd-assignment-list-item">
        <RxDragHandleDots2 className="me-2" style={{ bottom: "1px" }} />
        <MdOutlineAssignment />
          <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link text-dark text-decoration-none">
            A3
          </a>
          <div className="text-danger small">Multiple Modules</div>
          <div className="text-muted small"> | Not available until Jan 10 at 12:00am</div>
          <div className="fw-normal small">Due January 26 | 25 Points</div>
          <GreenCheckmark />
          <RxDotsVertical />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
