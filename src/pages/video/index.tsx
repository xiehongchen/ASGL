import React, { useState, useRef } from 'react';
import { Select } from 'antd';
import './index.scss'
function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const changeSpeed = (newSpeed: number) => {
    console.log('newSpeed', newSpeed)
    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed;
    }
  };
  const [file, setFile] = useState<File | null>(null);
  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event', event)
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
    const renderFileDetails = () => {
    if (!file) return null;

    const fileDetails: { [key: string]: string | number } = {
      name: file.name,
      size: file.size,
      type: file.type,
    };

    return (
      <div>
        <p>文件信息:</p>
        <ul>
          {Object.keys(fileDetails).map((key) => (
            <li key={key}>
              <strong>{key}:</strong> {fileDetails[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className='content'>
      <video
        className='video'
        ref={videoRef} src='https://gs-files.oss-cn-hongkong.aliyuncs.com/okr/prod/file/2021/08/31/540p.mp4'
        width="320" height="240"
        controls>
      </video>
      <div>
        <span>倍数：</span>
        <Select
          defaultValue={1}
          style={{ width: 120 }}
          onChange={changeSpeed}
          options={[
            { value: '0.5', label: '0.5' },
            { value: '1', label: '1' },
            { value: '1.5', label: '1.5' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '5', label: '5' },
          ]}
        />
      </div>
      <div>
        <input type="file" onChange={onchange}/>
         {renderFileDetails()}
      </div>
    </div>
  );
}

export default VideoPlayer;
