
import React from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
// import vid from '../../../components/Video/vid.mp4'
import './Library.css'
import WHLVideoList from '../../components/WHL/WHLVideoList'
import {FaHistory} from 'react-icons/fa'
import {MdOutlineWatchLater} from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import { useSelector } from 'react-redux'



function Library() {
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
  const WatchLaterList=useSelector(state=>state.WatchLaterReducer)
  const historyList=useSelector(state=>state.HistoryReducer)
  const likedVideoList=useSelector(state=>state.likedVideoReducer)
  const CurrentUser =useSelector((state)=>state?.currentUserReducer);



  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className='container2_Pages_App'>
            <div className="container_libraryPage">
              
                <h1 className='title_container_LibraryPage'>
                  <b>
                    <FaHistory/>
                  </b>
                  <b>History</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                  <WHLVideoList
                  page={"History"}
                  CurrentUser={CurrentUser?.result._id}
                  videoList={historyList}
                  />
                </div>
              </div>
              <div className="container_libraryPage">
              
              <h1 className='title_container_LibraryPage'>
                <b>
                  <MdOutlineWatchLater/>
                </b>
                <b>Watch Later</b>
              </h1>
              <div className="container_videoList_LibraryPage">
                <WHLVideoList
                page={"Watch Later"}
                CurrentUser={CurrentUser?.result._id}
                videoList={WatchLaterList}
                />
              </div>
            </div>
            <div className="container_libraryPage">
              
              <h1 className='title_container_LibraryPage'>
                <b>
                  <AiOutlineLike/>
                </b>
                <b>Liked Videos</b>
              </h1>
              <div className="container_videoList_LibraryPage">
                <WHLVideoList
                page={"Liked Videos"}
                CurrentUser={CurrentUser?.result._id}
                videoList={likedVideoList}
                />
              </div>
            </div>

            
        </div>
    </div>
  )
}

export default Library