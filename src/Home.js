import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectPage from "./ProjectPage";
import Project from "./Project";
import Header from "./Header";
import Links from "./Links";
import Qualifications from './Qualifications';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function Home() {
    return (
        <>
            <Header />
            <Router>
                <Routes>
                    <Route path='/' Component={Links} />
                    <Route path='/qualifications/' Component={Qualifications} />
                    <Route path='/projects/' >
                        <Route path="" Component={ProjectPage} />
                        <Route path=":name" Component={Project} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default Home;