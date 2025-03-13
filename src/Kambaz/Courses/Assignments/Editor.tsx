import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";
import { Form, Button, Modal } from "react-bootstrap";

export default function AssignmentEditor() {
    const { aid, cid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";

    const existingAssignment = assignments.find((assignment: any) => assignment._id === aid);

    const [assignment, setAssignment] = useState(existingAssignment || {
        _id: uuidv4(),
        title: "",
        description: "",
        group: "",
        gradeType: "",
        points: "",
        submissionType: "",
        assignTo: "",
        dueDate: "",
        availableFrom: "",
        availableUntil: "",
        course: cid,
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e: any) => {
        setAssignment({ ...assignment, [e.target.id]: e.target.value });
    };

    const handleSave = () => {
        if (existingAssignment) {
            dispatch(updateAssignment(assignment));
        } else {
            dispatch(addAssignment(assignment));
        }
        navigate(`/Kambaz/Courses/${cid}/Assignments`);
    };

    const handleDelete = () => {
        if (existingAssignment) {
            dispatch(deleteAssignment(assignment._id));
            setShowModal(false);
            navigate(`/Kambaz/Courses/${cid}/Assignments`);
        }
    };

    return (
        <div id="wd-assignments-editor" className="container mt-4 text-start">
            <h2>{existingAssignment ? "Edit Assignment" : "New Assignment"}</h2>
            <Form>
                {["title", "description", "group", "gradeType", "points"].map((id) => (
                    <Form.Group key={id} className="mb-3">
                        <Form.Label htmlFor={id}>{id.replace(/([A-Z])/g, " $1")}</Form.Label>
                        <Form.Control
                            id={id}
                            type={id === "points" ? "number" : "text"}
                            value={assignment[id] || ""}
                            onChange={handleChange}
                            disabled={!isFaculty}
                        />
                    </Form.Group>
                ))}

                {isFaculty && (
                    <div id="wd-css-responsive-forms-2">
                        {["submissionType", "assignTo", "dueDate", "availableFrom", "availableUntil"].map((id) => (
                            <Form.Group key={id} className="mb-3">
                                <Form.Label htmlFor={id}>{id.replace(/([A-Z])/g, " $1")}</Form.Label>
                                <Form.Control
                                    id={id}
                                    type={id.includes("Date") ? "date" : "text"}
                                    value={assignment[id] || ""}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        ))}
                    </div>
                )}

                {isFaculty && (
                    <div className="mt-3">
                        <Button variant="secondary" size="sm" className="me-2" onClick={handleSave}>
                            Save Assignment
                        </Button>
                        <Button variant="warning" size="sm" className="me-2" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}>
                            Cancel
                        </Button>

                        {existingAssignment && (
                            <Button variant="danger" size="sm" onClick={() => setShowModal(true)}>
                                Delete
                            </Button>
                        )}
                    </div>
                )}
            </Form>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
