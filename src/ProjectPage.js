import projects from './Projects.json';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect } from 'react';


function ProjectPage() {

    useEffect(() => {
        window.scrollTo(0, 40);
        document.querySelector('body').onscroll = function () {
            console.log(window.scrollY);
            if (window.scrollY == 0) {
                console.log('redirected');
                document.querySelector('.project-page').classList.add('slide-out');
                setTimeout(() => {
                    window.location.replace('http://localhost:3000/qualifications/');
                }, 250);

            }
        };
        return () => {
            document.querySelector('body').onscroll = null;
        };
    }, []);

    return (
        <>
            <div className='project-page'>
                {Object.keys(projects).map((key, index) => (
                    <Project
                        key={index}
                        pro={key}
                        images={projects[key].images}
                        title={projects[key].title}
                        desc={projects[key].desc}
                    />
                ))}
            </div>
        </>
    );
}

function Project({ title, desc, pro, images }) {
    return (
        <a href={pro} className='projects'>
            <Carousel
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                autoPlay={true}
                width={177}
                infiniteLoop={true}
                interval={2000}
            >
                {images.map((img, key) => (
                    <img key={key} src={img} className='project-img' alt='' />
                ))}
            </Carousel>
            <span className='title'>{title}</span>
            <span className='description'>{desc}</span>
        </a>
    );
}

export default ProjectPage;