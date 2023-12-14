import { Button, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl , projectUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br />
                    <a href={projectUrl}><Button className="mt-2" >Demo</Button></a>
                </div>
                
            </div>
        </Col>
    )
}
