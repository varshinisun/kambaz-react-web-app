import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";

export default function ModulesControls() {
 return (
   <div id="wd-modules-controls" className="text-nowrap">
     <Button variant="danger" size="sm" className="me-1 float-end" id="wd-add-module-btn">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Module
     </Button>

     <Dropdown className="float-end me-2">
        <Dropdown.Toggle variant="secondary" size="sm" id="wd-publish-all-btn">
        <GreenCheckmark /> Publish All 
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            Publish all modules and items <GreenCheckmark />
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            Publish modules only <GreenCheckmark />
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-items-only">
            Publish items only <GreenCheckmark />
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-none">
            Publish none <GreenCheckmark />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant="secondary" size="sm" className="me-1 float-end" id="wd-add-module-btn">
       View Progress
     </Button>

     <Button variant="secondary" size="sm" className="me-1 float-end" id="wd-add-module-btn">
       Collapse All
     </Button>

   </div>
);}
