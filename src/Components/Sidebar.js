import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Sidebar() {
 
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
        <ul>
            <li className='p-1 font-medium'><Link to="/">Home</Link></li>
            <li className='p-1 font-medium'>Shorts</li>
            <li className='p-1 font-medium'>Subscriptions</li>
        </ul>
        <ul className='pt-5'>
            <li className='p-1 font-medium'>You</li>
            <li className='p-1 font-medium'>History</li>
        </ul>
        <h1 className='font-extrabold pt-5'>Explore</h1>
        <ul>
            <li className='p-1 font-medium'>Trending</li>
            <li className='p-1 font-medium'>Shopping</li>
            <li className='p-1 font-medium'>Music</li>
            <li className='p-1 font-medium'>Sports</li>
            <li className='p-1 font-medium'>Gaming</li>
            <li className='p-1 font-medium'>Movies</li>
            <li className='p-1 font-medium'>Live</li>
            <li className='p-1 font-medium'>Films</li>
            <li className='p-1 font-medium'>Learning</li>
            <li className='p-1 font-medium'>Fashion & beauty</li>
            <li className='p-1 font-medium'>Podcasts</li>
        </ul>
        <ul className='pt-5'>
            <li className='p-1 font-medium'>Browse channels</li>
        </ul>
        <h1 className='font-extrabold pt-5 '>More from YouTube</h1>
        <ul>
            <li className='p-1 font-medium'>YouTube Premium</li>
            <li className='p-1 font-medium'>YouTube Studio</li>
            <li className='p-1 font-medium'>YouTube Music</li>
            <li className='p-1 font-medium'>YouTube Kids</li>
        </ul>
        <ul className='pt-5'>
            <li className='p-1 font-medium'>Settings</li>
            <li className='p-1 font-medium'>Report history</li>
            <li className='p-1 font-medium'>Help</li>
            <li className='p-1 font-medium'>Send feedback</li>
        </ul>
    </div>
  )
}

export default Sidebar;