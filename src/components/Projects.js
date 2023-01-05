import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/wouse.png";
import projImg2 from "../assets/img/kamni.png";
import projImg3 from "../assets/img/smoothie.png";
// import colorSharp1 from "../assets/img/gray.png";

export const Projects = () => {

    const projects = [
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
    },
    ];
    
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>My Projects</h2>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Loren Inspum</Tab.Pane>
                            <Tab.Pane eventKey="third">Loren Inspum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp1}></img> */}
        </section>
    )
}