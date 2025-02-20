import ModulesControls from "./ModulesControls";
import "./index.css";
import { useParams } from "react-router";
import * as db from "../../Database";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
  <div>
  <ModulesControls /><br /><br /><br /><br />
  {modules
  .filter((module: any) => module.course === cid)
  .map((module: any) => (
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
    <div className="wd-title p-3 ps-2 bg-secondary">
      <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
    </div>
    {module.lessons && (
      <ul className="wd-lessons list-group rounded-0">
        {module.lessons.map((lesson: any) => (
          <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
          </li>
        ))}</ul>)}</li>))}
</div>
);}
   