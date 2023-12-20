import './App.css'
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


// import dp
import DP from './assets/dp.webp';

// project images
import pI1 from './assets/Cogro/1.png';
import pI2 from './assets/Cogro/2.png';
import pI3 from './assets/Cogro/3.png';
import pI4 from './assets/Cogro/4.png';
import pI5 from './assets/Cogro/5.png';
import pI6 from './assets/Cogro/6.png';


import pII1 from './assets/DishAl/1.png';
import pII2 from './assets/DishAl/2.png';
import pII3 from './assets/DishAl/3.png';
import pII4 from './assets/DishAl/4.png';
import pII5 from './assets/DishAl/5.png';
import pII6 from './assets/DishAl/6.png';
import pII7 from './assets/DishAl/7.png';


import pIII1 from './assets/Dharti/1.png';
import pIII2 from './assets/Dharti/2.png';
import pIII3 from './assets/Dharti/3.png';


import pIV1 from './assets/Pro/1.png'
import pIV2 from './assets/Pro/2.png'

// project image array
const project1 = [pI1,pI2,pI3,pI4,pI5,pI6];
const project2 = [pII1,pII2,pII3,pII4,pII5,pII6,pII7];
const project3 = [pIII1,pIII2,pIII3]
const project4 = [pIV1,pIV2];

function App ()
{
  const [page, setPage] = useState(<Links />);
  return (
      <div className="App">
        <Header page={setPage} />
        <Content Vpage={page} />
        <Footer />
      </div>
  );
}

function Content ({ Vpage })
{
  const style={overflowY: 'auto', overflowX: 'hidden'}
  return (
    <div className='content' style={style}>
      {Vpage}
    </div>
  );
}

function Header ({ page })
{
 return (
    <div className='header'>
        <button className='qua-h' onClick={() => {page(<Qualifications />)}}>
            Qualifications
        </button>
        <button className='pro-h' onClick={() => {page(<Projects />)}}>
            Projects
        </button>
        <button className='me-h' onClick={() => {page(<Links />)}}>
        </button>
    </div>
  );
}


function Links () 
{
  return (
    <div className='slide-in-left'>
      <div className='link-page'>
      <img src={DP} className='display-picture' alt='' />
      <span className='name'>
          Samriddh Pratap Verma
      </span>
      <span className='bio'>
          IDK what to write about.
      </span>
      <Boxlink usefor="Instagram" borc="#f536b7" boxcolor="#8f3c75" href="https://instagram.com/samriddh.verma.7/" />
      <Boxlink usefor="LinkedIn" borc="#0072b1" boxcolor="#91c7e6" href="https://www.linkedin.com/in/samriddh-verma/" />
      <Boxlink usefor="GitHub" borc="#171515" boxcolor="#635f5f" href="https://www.github.com/SamriddhVerma/" />
      <Boxlink usefor="Twitter" borc="#00acee" boxcolor="#b5d8e6" href="https://twitter.com/samriddh_verma/" />
      </div>
    </div>  
  );
}

function Boxlink ({ usefor, borc, boxcolor, href }) {
  const [hover, setHover] = React.useState(false);

  const style = {
    borderColor: borc,
    backgroundColor: hover ? 'transparent' : boxcolor,
  };

  return(
    <a 
      className='link-tab' 
      style={style} 
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {usefor}
    </a>
  );
}

function Qualifications () 
{
  const style={width: '150px', height: '270px'}
  return (
    <div className='slide-in-right'>
      <div class="badge" id="badgez">
          <a href="https://www.credly.com/badges/d1a6d6fa-b81d-43ff-98fa-ee12b5d92197/public_url">
              <iframe name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-d1a6d6fa-b81d-43ff-98fa-ee12b5d92197" scrolling="no" src="//www.credly.com/embedded_badge/d1a6d6fa-b81d-43ff-98fa-ee12b5d92197" style={style} title="View my verified achievement on Credly."></iframe><script type="text/javascript" async="" src="//cdn.credly.com/assets/utilities/embed.js"></script>
          </a>
          <a href="https://www.credly.com/badges/0aceb2fc-9fda-4a39-8fa1-ed6e84991d5a/public_url">
              <iframe name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-0aceb2fc-9fda-4a39-8fa1-ed6e84991d5a" scrolling="no" src="//www.credly.com/embedded_badge/0aceb2fc-9fda-4a39-8fa1-ed6e84991d5a" style={style} title="View my verified achievement on Credly."></iframe><script type="text/javascript" async="" src="//cdn.credly.com/assets/utilities/embed.js"></script>
          </a>
          <a href="https://www.credly.com/badges/0abf811f-0aa4-4de4-a1be-6f6e9c2458cb/public_url">
              <iframe name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-0abf811f-0aa4-4de4-a1be-6f6e9c2458cb" scrolling="no" src="//www.credly.com/embedded_badge/0abf811f-0aa4-4de4-a1be-6f6e9c2458cb" style={style} title="View my verified achievement on Credly."></iframe><script type="text/javascript" async="" src="//cdn.credly.com/assets/utilities/embed.js"></script>
          </a>
      </div>
    </div>
  );
}

function Projects ()
{
  return (
    <div className='slide-in-right'>
      <div className='project-page'>
        <Project 
          images={project1} 
          title='CoGro' 
          desc='Made using React in HackCBS6.0' 
        />
        <Project 
          images={project2} 
          title='DishAlchemy' 
          desc='Made using React' 
        />
        <Project
          images={project3}
          title='Dharti'
          desc='Made for Smart India Hackathon'
        />
        <Project
          images={project4}
          title='Personal Profile'
          desc='Made using pure HTML, CSS, JS'
        />
        {/* add more Projects similarly */}
      </div>
    </div>
  );
}

function Footer ()
{
  return (
    <div className='footer'>
      {/* <span className='footer-text'>
        Made by Samriddh Verma
      </span> */}
    </div>
  );
}

function Project ({ title, desc, images })
{
  return (
    <div className='project'>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false} autoPlay={true} width={177} infiniteLoop={true} interval={2000}>
      {images.map((img, index) => (
          <div key={index}>
            <img src={img} className='project-img' alt='' />
          </div>
        ))}
      </Carousel>
      <span className='project-title'>
        {title}
      </span>
      <span className='project-desc'>
        {desc}
      </span>
    </div>
  );
}

export default App;
