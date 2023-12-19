import './App.css'
import React, { Component } from 'react';
import DP from './assets/dp.webp';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header pg_status={this.swi} />
          <Links />
        </div>
    );
  }
}

class Header extends Component {
  render() {
      return (
          <div className='header'>
              <button className='qua-h'>
                  Qualifications
              </button>
              {/* <button className='pro-h'>
                  Projects
              </button> */}
              <button className='me-h'>
              </button>
          </div>
      );
  }
}

class Links extends Component {
  render() {
      return (
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
      );
  }
}

function Boxlink ({ usefor, borc, boxcolor, href })
{
  return(
      <a className='link-tab' style={{borderColor: borc, backgroundColor: boxcolor}} href={href}>
        {usefor}
      </a>
  )
}

class Qualifications extends Component {
  render() {
    return (
        <div>
          <iframe className='bad' name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-d1a6d6fa-b81d-43ff-98fa-ee12b5d92197" scrolling="no" src="//www.credly.com/embedded_badge/d1a6d6fa-b81d-43ff-98fa-ee12b5d92197" title="View my verified achievement on Credly."></iframe><script type="text/javascript" async="" src="//cdn.credly.com/assets/utilities/embed.js"></script>
          <iframe className='bad' name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-0aceb2fc-9fda-4a39-8fa1-ed6e84991d5a" scrolling="no" src="//www.credly.com/embedded_badge/0aceb2fc-9fda-4a39-8fa1-ed6e84991d5a" title="View my verified achievement on Credly."></iframe><script type="text/javascript" async="" src="//cdn.credly.com/assets/utilities/embed.js"></script>
          <iframe className='bad' name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-0abf811f-0aa4-4de4-a1be-6f6e9c2458cb" scrolling="no" src="//www.credly.com/embedded_badge/0abf811f-0aa4-4de4-a1be-6f6e9c2458cb" title="View my verified achievement on Credly."></iframe><script type="text/javascript" async="" src="//cdn.credly.com/assets/utilities/embed.js"></script>
        </div>
    );
  }
}



export default App;