import JoLPlayer, { callBackType, JoLPlayerRef, qualityKey } from "jol-player";
import { useRef, useEffect } from "react";
import './index.scss'
export default function Video() {
  const videoRef = useRef<JoLPlayerRef>(null!);
  const onProgressMouseUp: callBackType = (val) => {
    console.log(`onProgressMouseUp`, val);
  };
  const onEndEd: callBackType = (val) => {
    console.log(`onEndEd`, val);
  };
  const onPause: callBackType = (val) => {
    console.log(`onPause`, val);
  };
  const onProgressMouseDown: callBackType = (val) => {
    console.log(`onProgressMouseDown`, val);
  };
  const onPlay: callBackType = (val) => {
    console.log(`onPlay`, val);
  };
  const onTimeChange: callBackType = (val) => {
    console.log(`onTimeChange`, val);
  };
  const onvolumechange: callBackType = (val) => {
    console.log(`onvolumechange`, val);
  };
  const onError = () => {
    console.log(`onError`);
  };
  const onQualityChange: callBackType<qualityKey> = (val) => {
    console.log(`onQualityChange`, val);
  };
  useEffect(() => {
    console.log(`videoRef.current`, videoRef.current);
  }, [videoRef.current]);
  return (
    <div className="content">
      <JoLPlayer
        ref={videoRef}
        onProgressMouseUp={onProgressMouseUp}
        onEndEd={onEndEd}
        onPause={onPause}
        onProgressMouseDown={onProgressMouseDown}
        onPlay={onPlay}
        onTimeChange={onTimeChange}
        onvolumechange={onvolumechange}
        onError={onError}
        onQualityChange={onQualityChange}
        option={{
          videoSrc:
            "https://gs-files.oss-cn-hongkong.aliyuncs.com/okr/prod/file/2021/08/31/540p.mp4",
          width: 300,
          // height: 100,
          mode: 'widthFix',
          theme: "#C91314",
          pausePlacement: "center",
          isToast: true,
          isShowScreenshot: false,
          isShowPicture: false,
          isProgressFloat: true
        }}
      />
    </div>
  );
}
