import React from 'react'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import vid from '../../components/Video/vid.mp4'
import Describe_Channel from './DescribeChannel';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Channel({setEditCreateChannelBtn,setVideoUploadPage}) {
    const {cid}=useParams();
    const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChannel === cid).reverse();
    // const vids=[
    //     {
    //       _id:1,
    //       video_src: vid,
    //       Channel:"62bafe6752cea35a6c30685f",
    //       title:"video 1",
    //       Uploader:"abc",
    //       description:"description of video 1"
    //     },
    //     {
    //       _id:2,
    //       video_src: vid,
    //       Channel:"add",
    //       title:"video 2",
    //       description:"description of video 2"
    
    //     },
    //     {
    //       _id:3,
    //       video_src: vid,
    //       Channel:"add",
    //       title:"video 3",
    //       description:"description of video 3"
    
    //     },
    //     {
    //       _id:4,
    //       video_src: vid,
    //       Channel:"add",
    //       title:"video 4",
    //       description:"description of video 4"
    
    //     },
    //   ];
    return (
        <div className='container_Pages_App'>
            <LeftSidebar/>
            <div className='container2_Pages_App'>
                <Describe_Channel
                cid={cid}
                setVideoUploadPage={setVideoUploadPage} 
                setEditCreateChannelBtn={setEditCreateChannelBtn}/>
                <ShowVideoGrid vids={vids}/>
            </div>
        </div>
      );
}

export default Channel