
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import htmlImg from "../assets/img/html.svg";
import cssImg from "../assets/img/css3.svg";
import jsImg from "../assets/img/java-script.svg";
import bImg from "../assets/img/bootstrap.svg";
import figmaImg from "../assets/img/figma-svg.svg";
import latexImg from "../assets/img/latex.svg";
import reactImg from "../assets/img/react.svg";



const Skills = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wow zoomIn skill-bx">
                            <h2>Skills</h2>
                            <p>A set of skills he has acquired</p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                <div className="item">
                                    <img src={reactImg} alt="Image" />
                                    <h5>React js</h5>
                                </div>
                                <div className="item">
                                    <img src={htmlImg} alt="Image" />
                                    <h5>Html</h5>
                                </div>
                                <div className="item">
                                    <img src={cssImg} alt="Image" />
                                    <h5>Css</h5>
                                </div>
                                <div className="item">
                                    <img src={jsImg} alt="Image" />
                                    <h5>Java Script</h5>
                                </div>
                                <div className="item">
                                    <img src={bImg} alt="Image" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={figmaImg} alt="Image" />
                                    <h5>Figma</h5>
                                </div>
                                <div className="item">
                                    <img src={latexImg} alt="Image" />
                                    <h5>Latex</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills
