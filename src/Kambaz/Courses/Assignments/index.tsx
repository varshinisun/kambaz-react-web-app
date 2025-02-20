import { ListGroup, Button, Form } from "react-bootstrap";
import { RxDotsVertical, RxDragHandleDots2 } from "react-icons/rx";
import { RiArrowDropDownFill } from "react-icons/ri";
import { MdOutlineAssignment } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((assignment: any) => assignment.course === cid);

  return (
    <div id="wd-assignments" className="container mt-4">
      <Form.Control
        placeholder="Search for Assignments"
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
        <ListGroup.Item className="d-flex align-items-center gap-2 p-3 bg-light border">
          <RxDragHandleDots2 /> 
          <RiArrowDropDownFill />
          ASSIGNMENTS
          <Button variant="outline-secondary" size="sm">40% of Total</Button>
          <Button variant="" size="sm">+</Button>
          <RxDotsVertical className="me-2" />
        </ListGroup.Item>

        {assignments.map((assignment: any) => (
          <ListGroup.Item key={assignment._id} className="wd-assignment-list-item">
            <RxDragHandleDots2 className="me-2" />
            <MdOutlineAssignment />
            <a
              href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
              className="wd-assignment-link text-dark text-decoration-none"
            >
              {assignment.title}
            </a>
            {/* <div className="text-danger small">{assignment.module}</div> */}
            <div className="text-danger small"> {assignment.availability}</div>
            <div className="fw-normal text-muted small">
              Due {assignment.dueDate} | {assignment.points} Points <GreenCheckmark /><RxDotsVertical />
            </div>

          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
