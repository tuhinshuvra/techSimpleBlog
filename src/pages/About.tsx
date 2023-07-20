import React from 'react';
import useTitle from '../hooks/useTitle';

const About = () => {
    useTitle("AboutUs");
    return (
        <div className=' p-3'>
            <h2 className=' text-center my-2'> About Us</h2>
            <p className=' my-3'> This is a blog website, and from this site, you can publish any opinion in your free mind. We are offering this opportunity to you. You can write your blog at any time and any amount of content. Besides, this we offer many other services.  After selecting a suitable solution, organizations are still facing challenges in operation, maintenance, monitoring, and getting proper output as per business needs. The management team faces challenges to set up the right governing environment to realize the positive potential of Information Technology.</p>

            <p className=' my-3'>TechSimple Blog is offering the best IT consultancy service to choose the right solution that will ensure proper utilization of IT resources in the business environment. We provide all kinds of IT support for businesses that will ensure operational excellence, maximize productivity and help the business leader to take the right decision for the business.</p>
        </div>
    );
};

export default About;