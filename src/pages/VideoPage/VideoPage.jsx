import React, { useEffect } from 'react';
// import vid from '../../components/Video/vid.mp4';
import moment from 'moment';
import './VideoPage.css';
import LikeWatchlaterSaveBtns from './LikeWatchlaterSaveBtns';
import Comments from '../../components/Comments/Comments';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { viewVideo } from '../../actions/video';
import { addToHistory } from '../../api';

function VideoPage() {
  const {vid}=useParams();
  // console.log(vid)
  const channel=useSelector(state=>state?.channelReducers)
  // console.log(cid)
  // const currentchannel=channel.filter(c=>c._id===vidid)[0];
  const vids=useSelector(state=>state.videoReducer);
  // console.log(vids)
  const vv=vids?.data.filter(q=>q._id=== vid)[0];
  const CurrentUser =useSelector((state)=>state?.currentUserReducer);
  const dispatch=useDispatch();

  const handleHistory=()=>{
    dispatch(
      addToHistory(
        {
          videoId:vid,
          viewer:CurrentUser?.result._id, 
        }
      )
    );
  };
  const handleViews=()=>{
    dispatch(viewVideo({
      id:vid
    }))
  }
  useEffect(()=>{
    if(CurrentUser){
      handleHistory();
    }
    handleViews();
  },[]);
  return (
    <div className="container_videoPage">
      <div className="container2_videoPage">
        <div className='video_display_screen_videoPage'>
          <video
            // src={`http://localhost:5500/${vv?.filePath}`} 
            src={`https://yt-final-ze2n.onrender.com/${vv?.filePath}`} 
            className={"video_ShowVideo_videoPage"}
            controls
            // autoPlay
          ></video>
          <div className='video_details_videoPage'>
            <div className="video_btns_title_videoPage_cont">
              <p className='video_title_videoPage'>{vv?.videoTitle}</p>
              <div className='views-date_btns_videoPage'>
                <div className="views_videoPage">
                  {vv?.Views} views <div className="dot"></div> {moment(vid?.createdAt).fromNow()}
                </div>
                <LikeWatchlaterSaveBtns vv={vv} vid={vid}/> 
              </div>
            </div>           
                <Link to={`/channel/${vv?.videoChannel}`} className='channel_details_videoPage'>
                    <b className='channel_logo_videoPage'>
                        <p>{vv?.Uploader.charAt(0).toUpperCase()}</p>
                    </b>
                    <p className='channel_name_videoPage'>{vv?.Uploader}</p>
                </Link>
                <div className='comments_VideoPage'>
                    <h2>
                        <u>Comments</u>
                        
                    </h2>
                    <Comments videoId={vv._id}/>
                    
                </div>
          </div>
        </div>
        <div className='moreVideoBar'>
            More Video
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
