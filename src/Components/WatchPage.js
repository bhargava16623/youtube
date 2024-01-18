import React, { useEffect } from 'react'
import { closeMenu } from '../Utils/appSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

function WatchPage() {

     const dispatch = useDispatch();

     useEffect(()=>{
            dispatch(closeMenu());
     },[]);

     const [searchParams]= useSearchParams();

  return (
    <div className="px-24 pt-4 ">
         <iframe className='rounded-lg' width="1250" height="680" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"  allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage;