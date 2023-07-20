import React from 'react';
import HomePageBlogs from './Blog/HomePageBlogs';
import useTitle from '../hooks/useTitle';

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <h2 className='text-center fw-bold fst-italic mt-4 mb-3'>Welcome to TechSimple Blog</h2>
            <HomePageBlogs></HomePageBlogs>
        </div>
    );
};

export default Home;