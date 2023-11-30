import React from 'react'
// import './Search.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
// import vid from '../../components/Video/vid.mp4'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
function Search() {
    const {searchQuery}=useParams();
  const vids=useSelector(state=>state.videoReducer)
  ?.data?.filter(q=>q?.videoTitle.toUpperCase().include(searchQuery.toUpperCase())).map(m=>m?.videoTitle)
    .reverse();
 
  
  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className='container2_Pages_App'>
            <h2 style={{color:"white"}}>Search Results for {searchQuery}... </h2>
            <ShowVideoGrid vids={vids}/>
        </div>
    </div>
  );
}

export default Search