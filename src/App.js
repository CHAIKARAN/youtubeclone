import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './components/AllRoutes';
import DrawerSidebar from './components/LeftSidebar/DrawerSidebar';
import { useState } from 'react';
import CreateEditChannel from './pages/channel/CreateEditChannel';
import { useDispatch } from 'react-redux';
import { fetchAllChanel } from './actions/channelUser';
import VideoUpload from './pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchLater';
import { getAllHistory } from './actions/History';
function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  
  }, [dispatch])
  
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if (toggleDrawerSidebar.display==="none"){
      setToggleDrawerSidebar({
        display: "flex"
      })      
    }else{
      setToggleDrawerSidebar({
        display: "none"
      })     
    }
  }
  const [videoUploadPage, setVideoUploadPage] = useState(false)
  const [EditCreateChannelBtn, setEditCreateChannelBtn] = useState(fasle)
  return (
    <Router>
      <VideoUpload/>
      {
        videoUploadPage && <VideoUpload setVideoUploadPage={setVideoUploadPage}/>
      }
      {
        EditCreateChannelBtn && <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn}/>
      }
      <Navbar setEditCreateChannelBtn={setEditCreateChannelBtn}
      toggleDrawer={toggleDrawer}
      />
      {
        <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
        />
      }
      <AllRoutes setVideoUploadPage={setVideoUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn} />
    </Router>
  );
}

export default App;
