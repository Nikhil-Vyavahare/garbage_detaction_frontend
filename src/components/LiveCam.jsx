import React from "react";
import CameraDetector from "../components/CameraDetector";

const LiveCam = () => {
  return (
    <div className="live-camera">
      <h1>Live Camera Feed</h1>
      <p>Monitor garbage detection in real-time</p>
      <CameraDetector />
    </div>
  );
};

export default LiveCam;