import React from 'react';
import "./VideoHeader.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
function VideoHeader() {
    return (
        <div className="videoHeader">
            <ArrowBackIcon/>
            <h2>Reels</h2>
            <CameraAltIcon/>
        </div>
    )
}

export default VideoHeader
