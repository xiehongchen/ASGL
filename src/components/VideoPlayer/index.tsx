import { useRef } from "react";

const VideoPlayer = () => {
  // 引用video元素
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div>
      <video
        ref={videoRef}
        controls
        src="your-video-source.mp4"
        width="400"
        height="300"
      />
    </div>
  );
};

export default VideoPlayer;
