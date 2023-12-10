import likedVideo from '../models/watchLater.js'

import mongoose from 'mongoose'


export const likeVideoController = async(req,res)=>{
    const likeVideoData=req.body;
    // console.log(likeVideoData)

    const addToLikedVideo= new likedVideo(likeVideoData);

    try {
        await addToLikedVideo.save();
        res.status(200).json('added to liked videos')
        // console.log("Done")
    } catch (error) {
        res.status(400).json(error)
    }
}
export const getAlllikeVideoController=async(req,res)=>{
    try {
        const files=await likedVideo.find();
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
    }
}
export const deleteLikeVideoController=async(req,res)=>{
    const {videoId:videoId,Viewer:Viewer}=req.params;
    console.log(videoId,Viewer)
    try {
        await likedVideo.findOneAndDelete({
            videoId:videoId,Viewer:Viewer
        })
        res.status(200).json({message:"removed from your watch later"})
    } catch (error) {
        res.status(400).json({message:error.message})

    }
};
