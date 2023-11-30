import React from 'react'
import { FaEdit, FaUpload } from 'react-icons/fa'
import './DescribeChannel.css'
import { useSelector } from 'react-redux'
function DescribeChannel({setEditCreateChannelBtn,cid, setVideoUploadPage}) {
  const channel=useSelector(state=>state?.channelReducers)
  // console.log(cid)
  const currentchannel=channel.filter(c=>c._id===cid)[0];
  const CurrentUser =useSelector((state)=>state?.currentUserReducer);
  return (
    <div className='container3_channel'>
      <div className="channel_logo_channel">
        <b>
          {currentchannel?.name.charAt(0).toUpperCase}
        </b>
      </div>
      <div className="description_channel">
        <b>{currentchannel?.name}</b> 
        <p>{currentchannel?.desc}</p>
      </div>
      {
        CurrentUser?.result._id ===currentchannel?._id &&<>
        
      <p className='editbtn_channel'
      onClick={()=>{
        setEditCreateChannelBtn(true);
        }}>
        <FaEdit/>
        <b> Edit Channel</b>
      </p>
      <p className='uploadbtn_channel' onClick={()=>setVideoUploadPage(true)}>
        <FaUpload/>
        <b> Upload Video</b>
      </p>
        </>
      }
    </div>
  )
}

export default DescribeChannel