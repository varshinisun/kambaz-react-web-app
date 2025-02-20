import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap"; 
import * as db from "./Database";

// import IMGCS1234 from "c:/Users/19788/Downloads/KamazNEUCS1234.jpg";
// import IMGDS1235 from "c:/Users/19788/Downloads/KambazDesign1235.jpg";
// import IMGDS1236 from "c:/Users/19788/Downloads/KambazDS1236.jpg"
// import IMGES1237 from "c:/Users/19788/Downloads/KambazCS1237.jpeg";
// import IMGES1238 from "c:/Users/19788/Downloads/835-Columbus-Ave-NU©Keitaro-Yoshioka-058-1280x854-1.jpeg";
// import IMGCS1239 from "c:/Users/19788/Downloads/KambazGame.jpg";
// import IMGDS1240 from "c:/Users/19788/Downloads/IMG_Boston_Mural-1.jpeg";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "260px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark">
                  <Card.Img variant="top" src='assets/NU_CMYK_Notched-N_wordmark_RW.png' width="100%" height={160} />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

{/* <div id="wd-dashboard">
  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
  <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
  <div id="wd-dashboard-courses">
    <Row xs={1} md={5} className="g-4">
      <Col className="wd-dashboard-course" style={{ width: "260px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src='assets/KamazNEUCS1234.jpg' width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack Software Developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course2" style={{ width: "260px" }}>         <Card>
          <Link to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src='assets/KambazDesign1235.jpg' width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">DE1235 Design</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Brand and Identity Design</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> </Col>

      <Col className="wd-dashboard-course3" style={{ width: "260px" }}>         <Card>
          <Link to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src='assets/KambazDS1236.jpg' width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">DE1236 Studio Art</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Color and Composition Studio</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> </Col>

        <Col className="wd-dashboard-course4" style={{ width: "260px" }}>         <Card>
          <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src='assets/KambazCS1237.jpeg' width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">ES1237 Environment </Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Carbon Emissions in Atmosphere</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> </Col>

        <Col className="wd-dashboard-course5" style={{ width: "260px" }}>         <Card>
          <Link to="/Kambaz/Courses/1238/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src='assets/835-Columbus-Ave-NU©Keitaro-Yoshioka-058-1280x854-1.jpeg' width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">DE1238 Form and Structure</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Structural Integrity of Wires</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> </Col>

        <Col className="wd-dashboard-course6" style={{ width: "260px" }}>         <Card>
          <Link to="/Kambaz/Courses/1239/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src='assets/KambazGame.jpg' width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1239 Game Programming</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">C++ Game Project</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> </Col>

        <Col className="wd-dashboard-course7" style={{ width: "260px" }}>         <Card>
          <Link to="/Kambaz/Courses/1240/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src='assets/IMG_Boston_Mural-1.jpeg' width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1240 Intro Abstraction</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Principles of Abstraction</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> </Col>

    </Row>
</div></div> */}

