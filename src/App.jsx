import './App.css'
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import proj from './Projects.json';


// import dp
import DP from './assets/dp.webp';

function App ()
{
  const [page, setPage] = useState(<Links />);
  return (
      <div className="App">
        <Header page={setPage} />
        {page}
        <Footer />
      </div>
  );
}

// function Content ({ Vpage })
// {
//   const style={overflowY: 'auto', overflowX: 'hidden'}
//   return (
//     <div className='content' style={style}>
//       {Vpage}
//     </div>
//   );
// }

function Header ({ page })
{
 return (
    <div className='header'>
        <button name='Qualifications' className='qua-h' onClick={() => {page(<Qualifications />)}}>
            Qualifications
        </button>
        <button name='Projects' className='pro-h' onClick={() => {page(<Projects />)}}>
            Projects
        </button>
        <button name='Home Page' className='me-h' onClick={() => {page(<Links />)}}>
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
  const style2={width: '100%', height: 'calc(100vh - 90px)',display: 'flex', alignContent: 'center',justifyContent: 'center'}
  return (
    <div className='slide-in-right' style={style2}>
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
  const [curPro, setCurPro] = useState(null);
  return (
    <div className='slide-in-right'>
      
        {curPro == null ?
          <div className='project-page'>
            {Object.keys(proj).map((key, index) => (
              <Project 
                key={index}
                pro={index}
                images={proj[key].images} 
                title={proj[key].title}
                desc={proj[key].desc} 
                setCurPro={setCurPro}
              />
            ))}
          </div> : <>
           <ProjectShowcase pro={curPro} setCurPro={setCurPro} />
           </>}
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

function Project ({ title, desc, images, setCurPro, pro })
{
  return (
    <div className='project' onClick={() => {setCurPro("project" + (pro + 1) )}}>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false} autoPlay={true} width={177} infiniteLoop={true} interval={2000}>
      {images.map((img, index) => (
          <div key={index}>
            <img src={process.env.PUBLIC_URL + img} className='project-img' alt='' />
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

function ProjectShowcase ({ pro, setCurPro })
{
  return(
    <div className='project-sc-pg' >
    <button className='back-btn' onClick={() => {setCurPro(null)}}>
          Back
    </button>
    
      <div className='project-sc'>
        <Carousel showStatus={false} showIndicators={false} showThumbs={false} width={"clamp(250px, 100%, 600px)"} autoPlay={true} infiniteLoop={true} interval={5000}>
        {proj[pro].images.map((img, index) => (
            <div key={index}>
              <img src={process.env.PUBLIC_URL + img} className='project-img-sc' alt='' />
            </div>
          ))}
        </Carousel>
        <div className='project-sc-title'>
          {proj[pro].title}
        </div>
        <div className='project-sc-desc'>
          {proj[pro].l_desc}
        </div>
        <div className='project-sc-tech'>
          {proj[pro].tech}
        </div>
        <div className='project-sc-links'>
          <a href={proj[pro].repo_link} className='project-sc-r_link'>
            {proj[pro].repo_link}
          </a>
          <a href={proj[pro].live_link} className='project-sc-l_link'>
            {proj[pro].live_link_s}
          </a>
        </div>
      </div>  
    </div>
  );
}

export default App;
