import ModulesControls from "./ModulesControls";
import { ListGroup } from "react-bootstrap";
import { RxDragHandleDots2 } from "react-icons/rx"
import { RxDotsVertical } from "react-icons/rx";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaPlus } from "react-icons/fa6";
import "./index.css";

export default function Modules() {
  return (
  <div>
  <ModulesControls /><br /><br /><br /><br />
  <ListGroup className="rounded-0" id="wd-modules">
    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">      
      <div className="wd-title p-3 ps-1 bg-secondary"> <RxDragHandleDots2 />Week 1 <GreenCheckmark /> <FaPlus /><RxDotsVertical /></div> 
      <ListGroup className="wd-lessons rounded-0">
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <RxDragHandleDots2 /> LEARNING OBJECTIVES <GreenCheckmark /><RxDotsVertical /></ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <RxDragHandleDots2 />Introduction to the course <GreenCheckmark /><RxDotsVertical /></ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <RxDragHandleDots2 />Learn what is Web Development <GreenCheckmark /><RxDotsVertical /></ListGroup.Item>
      </ListGroup>
    </ListGroup.Item>
    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">  <RxDragHandleDots2 />Week 2 <GreenCheckmark /> <FaPlus /><RxDotsVertical /></div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <RxDragHandleDots2 />LESSON 1 <RxDotsVertical /></ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <RxDragHandleDots2 />LESSON 2 <RxDotsVertical /></ListGroup.Item>
      </ListGroup>
    </ListGroup.Item>
  </ListGroup>
</div>

   );}
   