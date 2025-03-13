import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import { TbCancel } from "react-icons/tb";
import { useState } from "react";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls({ moduleName, setModuleName, addModule }:
{ moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return (
   <div id="wd-modules-controls" className="modules-controls-wrapper mb-3 p-3">
     <div className="d-flex">
       
       <div className="d-flex">
         <Button variant="secondary" size="lg" className="me-2" id="wd-view-progress-btn">
           View Progress
         </Button>
         <Button variant="secondary" size="lg" className="me-2" id="wd-collapse-all-btn">
           Collapse All
         </Button>
       </div>

       <div className="d-flex">
         <Dropdown className="me-2">
           <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
             <GreenCheckmark /> Publish All 
           </Dropdown.Toggle>
           <Dropdown.Menu>
             <Dropdown.Item id="wd-publish-all-modules-and-items">
               <GreenCheckmark /> Publish all modules and items 
             </Dropdown.Item>
             <Dropdown.Item id="wd-publish-modules-only">
               <GreenCheckmark /> Publish modules only 
             </Dropdown.Item>
             <Dropdown.Item id="wd-publish-items-only">
               <TbCancel /> Unpublish all modules and items 
             </Dropdown.Item>
             <Dropdown.Item id="wd-publish-none">
               <TbCancel /> Unpublish modules only 
             </Dropdown.Item>
           </Dropdown.Menu>
         </Dropdown>

         <Button variant="danger" onClick={handleShow} size="lg" id="wd-add-module-btn">
           <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
           Module
         </Button>
       </div>

     </div>

     <ModuleEditor 
       show={show} 
       handleClose={handleClose} 
       dialogTitle="Add Module"
       moduleName={moduleName} 
       setModuleName={setModuleName} 
       addModule={addModule} 
     />
   </div>
 );
}
