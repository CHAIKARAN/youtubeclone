import React, { useState } from 'react';
import './VideoUpload.css';
import { useDispatch, useSelector } from 'react-redux';
import { uploadVideo } from '../../actions/video';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
function VideoUpload({setVideoUploadPage}) {
  const CurrentUser=useSelector(state=>state.currentuserReducer)  
  const dispatch=useDispatch();
  const [title, setTitle] = useState('');
  const [videoFile, setVideoFile] = useState('');
  const handleSetVideoFile=(e)=>{
    setVideoFile(e.target.files[0]);
  }
  const [progress, setProgress] = useState(0)
  const fileOptions={
    onUploadProgress:(ProgressEvent)=>{
        const {loaded,total}=ProgressEvent;
        const percentage=Math.floor(((loaded/1000)*100)/(total/1000));
        setProgress(percentage)
        if(percentage===100){
            setTimeout(function(){},3000)
            setVideoUploadPage(false);

        }
    }
  };
  const uploadVideoFile=()=>{
    if(!title){
        alert("pleases enter the title of the video")
    }else if(!videoFile){
        alert("please attach a video file")
    }else if(videoFile.size > 1000000){
        alert("please attach video file less than 1kb")
    }else{
        const fileData=new fileData();
        fileData.append("file",videoFile);
        fileData.append("title",title);
        fileData.append("channel",CurrentUser?.result._id);
        fileData.append("uploader",CurrentUser?.result.name);
        // console.log(videoFile)
        dispatch(uploadVideo({
            fileData:fileData,
            fileOptions:fileOptions
        }));

    }

  }

  return (
    <div className='container_VideoUpload'>
      <input
        type='submit'
        name='text'
        value={"X"}
        onClick={()=>setVideoUploadPage(false)}
        className='ibtn_x'
      />
      <div className='container2_VideoUpload'>
        <div className="ibox_div_videoupload">
          <input
          onChange={(e)=>{setTitle(e.target.value)}}
            type='text'
            className='ibox_videoupload'
            maxLength={30}
            placeholder='enter title of your video'
          />
          <label htmlFor='file' className='ibox_videoupload  btn_videoupload'>
            <input
              type="file"
              name="file"
              className='ibox_videoupload'
              style={{ fontSize: "1rem" }}
              onChange={e=>{handleSetVideoFile(e)}}
            />
          </label>
        </div>
        <div className="ibox_div_videoupload">
          <input
          onClick={()=>uploadVideoFile()}
            type="submit"
            value="Upload"
            className='ibox_videoupload  btn_videoupload'
          />
        </div>
        <div className="loader ibox_div_videoupload" >
            <CircularProgressbar
            value={progress}
            text={`${progress}`}
            styles={
                buildStyles({
                    rotation:0.25,
                    strokeLinecap:"butt",
                    textSize:"20px",
                    pathTransitionDuration:0.5,
                    pathColor:` rgba(255,255,255,${progress/100})`,
                    textColor:"#f88",
                    trailColor:"#adff2f",
                    backgroundColor:"#3e98c7"
                })
            }
            />
        </div>
      </div>
    </div>
  );
}

export default VideoUpload;
