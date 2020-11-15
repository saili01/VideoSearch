import React from 'react';
import './VideoItem.css';

const VideoItem=({video,onVideoSelect})=>{
return (
<div  onClick={()=> onVideoSelect(video)} className="item item-video">
<img className="ui image" src={video.snippet.thumbnails.medium.url}/>
<div className="content">
<div className="header title">{video.snippet.title}</div></div>
</div>    
);
}
export default VideoItem;
