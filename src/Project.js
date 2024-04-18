import projects from './Projects.json';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Project() {
    const { name } = useParams();

    return (
        <>
            {
                projects[name] ?
                    <div className='project'>
                        <h1>
                            {projects[name].title}
                        </h1>
                        <h2>
                            Description :
                        </h2>
                        <span>
                            {projects[name].l_desc}
                        </span>
                        <h2>
                            Project Images :
                        </h2>
                        <Carousel
                            showStatus={false}
                            showIndicators={false}
                            showThumbs={false}
                            width={"clamp(250px, 100%, 600px)"}
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                        >
                            {projects[name].images.map((image, index) => (
                                <img key={index} src={image} alt='' />
                            ))}
                        </Carousel>
                        <h2>
                            Links :
                        </h2>
                        <span>
                            Repo Link:
                            <a href={projects[name].repo_link}>
                                {projects[name].repo_link}
                            </a>
                        </span>
                        <span>
                            Website Link:
                            <a href={projects[name].live_link}>
                                {projects[name].live_link_s}
                            </a>
                        </span>
                    </div>
                    :
                    <h2>Project not found</h2>
            }
        </>
    );
}

export default Project;