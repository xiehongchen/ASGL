import { useState, useRef } from "react";

const VideoPlayer = () => {
  // 定义状态来存储视频是否播放
  const [isPlaying, setIsPlaying] = useState(false);
  // 引用video元素
  const videoRef = useRef<HTMLVideoElement>(null);

  // 播放/暂停视频
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        controls
        src="your-video-source.mp4"
        width="400"
        height="300"
      />
      <button onClick={togglePlay}>{isPlaying ? "暂停" : "播放"}</button>
    </div>
  );
};

export default VideoPlayer;
