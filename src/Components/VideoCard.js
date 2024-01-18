import React from 'react'

function VideoCard({info}) {
    
    const {snippet,statistics} = info;
    const {title,thumbnails,channelTitle} = snippet;

  return (
    <div className='p-2 m-2 w-80 shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail"/>
        <ul>
            <li className='font-medium'>{(title.length)>30?(title.substring(0,70)+"..."):(title)}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views •</li>
        </ul>
    </div>
  )
}

export default VideoCard;