// import { motion } from 'framer-motion';

function Header() {
    return (
        <>
            <header className='desktop'>
                <a href='/qualifications/' className=''>
                    Qualifications
                </a>
                <a href='/projects/' className=''>
                    Projects
                </a>
                <a href='/' className='dp'>
                    <img src="/assets/dp.webp" alt="Profile" />
                </a>
            </header>
            <header className='mobile'>
                <input type='checkbox' id='menu' />
                <nav>
                    <a href='/' className='dp'>
                        Home
                    </a>
                    <a href='qualifications'>
                        Qualifications
                    </a>
                    <a href='projects' >
                        Projects
                    </a>
                </nav>
            </header>
        </>
    );
}

export default Header;