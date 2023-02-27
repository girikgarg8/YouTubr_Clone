import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard'
import {Link} from "react-router-dom"
const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json)
    setVideos(json.items)
  }
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className='flex flex-wrap'> {
      videos.map((video) => (<Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
      < VideoCard key={video.id.videoId} info={video} />
      </Link>
      ))
    } </div>
  )
}

export default VideoContainer