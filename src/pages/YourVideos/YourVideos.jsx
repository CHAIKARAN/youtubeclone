import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../components/Video/vid.mp4'
import './yourVideo.css'
import { useSelector } from 'react-redux'
function YourVideos() {

  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChannel === CurrentUser?.result?._id).reverse();
  const CurrentUser =useSelector((state)=>state?.currentUserReducer);

  // const vids=[
  //   {
  //     _id:1,
  //     video_src: vid,
  //     Channel:"62bafe6752cea35a6c30685f",
  //     title:"video 1",
  //     Uploader:"abc",
  //     description:"description of video 1"
  //   },
  //   {
  //     _id:2,
  //     video_src: vid,
  //     Channel:"add",
  //     title:"video 2",
  //     description:"description of video 2"

  //   },
  //   {
  //     _id:3,
  //     video_src: vid,
  //     Channel:"add",
  //     title:"video 3",
  //     description:"description of video 3"

  //   },
  //   {
  //     _id:4,
  //     video_src: vid,
  //     Channel:"add",
  //     title:"video 4",
  //     description:"description of video 4"

  //   },
  // ];
  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className='container2_Pages_App'>
          <div className="container_yourvideo">
          <h1>Your Videos</h1>
          {
            CurrentUser ?(<>           
            <ShowVideoGrid vids={vids}/>
            </>):<>
            <h3>please login too see your uploaded video list</h3></>
          }

          </div>
        </div>
    </div>
  )
}

export default YourVideos