// import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import down_arrow from './assets/down-arrow.svg';
import instagram from './assets/instagram.svg';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
import twitter from './assets/twitter.svg';

function Links() {

    useEffect(() => {
        document.querySelector('body').onscroll = function () {
            console.log(window.scrollY);
            if (window.scrollY == 80) {
                console.log('redirected');
                document.querySelector('.links').classList.replace('link-animation', 'slide-out');
                setTimeout(() => {
                    window.location.replace('http://samriddhverma.biz/qualifications/')
                }, 250);
            }
        };
        window.scrollTo(0, 40);
        return () => {
            document.querySelector('body').onscroll = null;
        };
    }, []);

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.dots').childNodes.forEach((dot, key) => {
            setInterval(() => {
                dot.classList.toggle('bounce');
                console.log('bounced');
            }, 1000 * key);
        });
    })

    return (
        <div
            className="links link-animation"
        >
            <img src="/assets/dp.webp" className='display-picture' alt='' />
            <span className='name'>
                Samriddh Pratap Verma
            </span>
            <span className='bio'>
                IDK what to write about.
            </span>
            <div className='link-box'>
                <Boxlink icon={instagram} bordercolor="#f536b7" boxcolor="#8f3c75" href="https://instagram.com/samriddh.verma.7/" />
                <Boxlink icon={linkedin} bordercolor="#0072b1" boxcolor="#91c7e6" href="https://www.linkedin.com/in/samriddh-verma/" />
                <Boxlink icon={github} bordercolor="#171515" boxcolor="#635f5f" href="https://www.github.com/SamriddhVermaSRM/" />
                <Boxlink icon={twitter} bordercolor="#00acee" boxcolor="#b5d8e6" href="https://twitter.com/samriddh_verma/" />
            </div>
            <div className='dots'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <img src={down_arrow} className='down-arrow' alt='' />
        </div>
    );
}

function Boxlink(props) {
    const [hover, setHover] = React.useState(false);

    const style = {
        borderColor: props.bordercolor,
        background: hover ? 'transparent' : props.boxcolor,
    };

    return (
        <a
            className='link-tab'
            style={style}
            href={props.href}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={props.icon} className='icon' alt='' />
        </a>
    );
}

export default Links;
