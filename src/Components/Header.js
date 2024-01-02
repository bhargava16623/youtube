import React from 'react';
import hamburger from '../Components/assets/hamburger.png';
import youtubelogo from '../Components/assets/youtubelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img className='h-8 mt-2' alt='menu' src={hamburger}/>
            <img className='h-12 mx-4' alt='youtube-logo' src={youtubelogo}/>
        </div>
        <div className='col-span-10 pl-56'>
            <input type='text' className='w-1/2 border border-gray-400 p-2 rounded-l-full'/>
            <button className='bg-gray-100 px-4 py-2.5 rounded-r-full'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
    </div>
  )
}

export default Header