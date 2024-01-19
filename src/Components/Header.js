import React, { useEffect,useState } from 'react';
import hamburger from '../Components/assets/hamburger.png';
import youtubelogo from '../Components/assets/youtubelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../Utils/Constants';
import { cacheResults } from '../Utils/searchSlice';

function Header() {

  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(()=>{

      const timer = setTimeout(()=>{
         
        if(searchCache[searchQuery]){
          setSuggestions(searchCache[searchQuery]);
        } else{
          getSearchSuggestions();
          console.log(searchQuery);
        }
      },200);
      
      return () => clearTimeout(timer);

  },[searchQuery]);

  const getSearchSuggestions = async () => {
    const data= await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json= await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({[searchQuery]:json[1]}));

  }
 
  const dispatch= useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img className='h-8 mt-2 cursor-pointer' alt='menu' src={hamburger} onClick={()=>toggleMenuHandler()}/>
            <img className='h-12 mx-4' alt='youtube-logo' src={youtubelogo}/>
        </div>
        <div className='col-span-10 pl-56'>
          <div>
            <input type='text' className='w-1/2 border border-gray-400 p-2 rounded-l-full' onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}/>
            <button className='bg-gray-100 px-4 py-2.5 rounded-r-full'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
          {
            showSuggestions && searchQuery &&(
              <div className='absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
                <ul>
                  {suggestions.map((s)=>(<li key={s} className='py-2 shadow-sm px-3 hover:bg-gray-100' ><FontAwesomeIcon icon={faMagnifyingGlass} />{s}</li>))}
                </ul>
              </div>
            )

          }
        </div>
    </div>
  )
}

export default Header