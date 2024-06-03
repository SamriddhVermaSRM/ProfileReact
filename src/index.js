// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();

import './index.css';
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectPage from "./ProjectPage.js";
import Project from "./Project.js";
import Header from "./Header.js";
import Links from "./Links.js";
import Qualifications from './Qualifications.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react'
import { createRoot } from 'react-dom/client';


const routing = (
    <React.StrictMode>
        <Header />
        <Router>
            <Routes>
                <Route path='/' Component={Links} />
                <Route path='/qualifications/' Component={Qualifications} />
                <Route path='/projects/' Component={ProjectPage} />
                <Route path="/projects/:name" Component={Project} />
            </Routes>
        </Router>
    </React.StrictMode>);

createRoot(document.getElementById('root')).render(routing);
