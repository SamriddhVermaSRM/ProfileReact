// import { motion } from 'framer-motion';
import React from 'react';

function Links() {
    return (
        <div
            className="links"
        >
            <img src="/assets/dp.webp" className='display-picture' alt='' />
            <span className='name'>
                Samriddh Pratap Verma
            </span>
            <span className='bio'>
                IDK what to write about.
            </span>
            <Boxlink text="Instagram" bordercolor="#f536b7" boxcolor="#8f3c75" href="https://instagram.com/samriddh.verma.7/" />
            <Boxlink text="LinkedIn" bordercolor="#0072b1" boxcolor="#91c7e6" href="https://www.linkedin.com/in/samriddh-verma/" />
            <Boxlink text="GitHub" bordercolor="#171515" boxcolor="#635f5f" href="https://www.github.com/SamriddhVermaSRM/" />
            <Boxlink text="Twitter" bordercolor="#00acee" boxcolor="#b5d8e6" href="https://twitter.com/samriddh_verma/" />
        </div>
    );
}


function Boxlink({ text, bordercolor, boxcolor, href }) {
    const [hover, setHover] = React.useState(false);

    const style = {
        borderColor: bordercolor,
        backgroundColor: hover ? 'transparent' : boxcolor,
    };

    return (
        <a
            className='link-tab'
            style={style}
            href={href}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {text}
        </a>
    );
}

export default Links;