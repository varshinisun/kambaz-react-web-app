import { Button } from "react-bootstrap";
import { TbCancel } from "react-icons/tb";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { CgImport } from "react-icons/cg";
import { BiSolidFileImport } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { MdBarChart } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { RiBarChart2Line } from "react-icons/ri";
import { FaBell } from "react-icons/fa";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="p-3">
      <h2 className="mb-3">Course Status</h2>

      <div className="d-grid gap-2">
        <Button variant="secondary" size="sm" id="wd-unpublish-btn">
          <TbCancel className="position-cancel me-2" style={{ bottom: "1px" }} />
          Unpublish
        </Button>

        <Button variant="success" size="sm" id="wd-publish-btn">
        <GreenCheckmark />
          Publish
        </Button>

        <Button variant="secondary" size="sm" id="wd-import-content-btn">
          <CgImport className="position-import me-2" style={{ bottom: "1px" }} />
          Import Existing Content
        </Button>

        <Button variant="secondary" size="sm" id="wd-import-commons-btn">
        <BiSolidFileImport className="position-import-side me-2" style={{ bottom: "1px" }} />
          Import from Commons
        </Button>

        <Button variant="secondary" size="sm" id="wd-choose-home-btn">
        <IoIosHome className="position-home me-2" style={{ bottom: "1px" }} />
          Choose Home Page
        </Button>

        <Button variant="secondary" size="sm" id="wd-view-stream-btn">
        <MdBarChart className="position-bar me-2" style={{ bottom: "1px" }} />
          View Course Stream
        </Button>

        <Button variant="secondary" size="sm" id="wd-new-announcement-btn">
        <TfiAnnouncement className="position-announce me-2" style={{ bottom: "1px" }} />
          New Announcement
        </Button>

        <Button variant="secondary" size="sm" id="wd-new-analytics-btn">
        <RiBarChart2Line className="position-analytics me-2" style={{ bottom: "1px" }} />
          New Analytics
        </Button>

        <Button variant="secondary" size="sm" id="wd-view-notifications-btn">
        <FaBell className="position-bell me-2" style={{ bottom: "1px" }} />
          View Course Notifications
        </Button>
      </div>
    </div>
  );
}
