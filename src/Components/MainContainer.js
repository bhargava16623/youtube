import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';


function MainContainer() {
  return (
    <div>
        <ButtonList/>
        <div className=''>
          <VideoContainer/>
        </div>
    </div>
  )
}

export default MainContainer;