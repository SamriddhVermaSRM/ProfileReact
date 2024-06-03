import React, { useEffect } from 'react';

function Qualifications() {

    useEffect(() => {
        window.scrollTo(0, 40);
        document.querySelector('body').onscroll = function () {
            console.log(window.scrollY);
            if (window.scrollY == 80) {
                console.log('redirected');
                document.querySelector('.badge').classList.add('slide-out');
                setTimeout(() => {
                    window.location.replace('http://localhost:3000/projects/');
                }, 250);

            } else if (window.scrollY == 0) {
                console.log('redirected');
                document.querySelector('.badge').classList.add('slide-in');
                setTimeout(() => {
                    window.location.replace('http://localhost:3000/');
                }, 250);
            }
        };
        return () => {
            document.querySelector('body').onscroll = null;
        };
    }, []);


    return (
        <>
            <div className="badge">
                <iframe name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-d1a6d6fa-b81d-43ff-98fa-ee12b5d92197" scrolling="no" src="//www.credly.com/embedded_badge/d1a6d6fa-b81d-43ff-98fa-ee12b5d92197" title="View my verified achievement on Credly."></iframe><script type="text/javascript" async="" src="//cdn.credly.com/assets/utilities/embed.js"></script>
                <iframe name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-0aceb2fc-9fda-4a39-8fa1-ed6e84991d5a" scrolling="no" src="//www.credly.com/embedded_badge/0aceb2fc-9fda-4a39-8fa1-ed6e84991d5a" title="View my verified achievement on Credly."></iframe><script type="text/javascript" async="" src="//cdn.credly.com/assets/utilities/embed.js"></script>
                <iframe name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-0abf811f-0aa4-4de4-a1be-6f6e9c2458cb" scrolling="no" src="//www.credly.com/embedded_badge/0abf811f-0aa4-4de4-a1be-6f6e9c2458cb" title="View my verified achievement on Credly."></iframe><script type="text/javascript" async="" src="//cdn.credly.com/assets/utilities/embed.js"></script>
                <iframe name="acclaim-badge" allowtransparency="true" frameborder="0" id="embedded-badge-730b9962-756d-48e3-a3dc-bfc3cfa22625" scrolling="no" src="//www.credly.com/embedded_badge/730b9962-756d-48e3-a3dc-bfc3cfa22625" title="View my verified achievement on Credly."></iframe><script type="text/javascript" async="" src="//cdn.credly.com/assets/utilities/embed.js"></script>
            </div>
        </>
    );
}

export default Qualifications;