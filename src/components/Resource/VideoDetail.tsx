import { useState } from 'react'
import './VideoDetail.css'

const VideoDetail = ({ resource }: { resource: any }) => {
  const [playbackRate, setPlaybackRate] = useState(1)
  
  const handleRateChange = (rate: number) => {
    const video = document.querySelector('video')
    if (video) {
      video.playbackRate = rate
      setPlaybackRate(rate)
    }
  }

  return (
    <div className="video-detail-container">
      <h2 className="video-title">{resource.title}</h2>
      
      <div className="video-player-wrapper">
        <video
          controls
          className="video-player"
          src=""  // 这里稍后填入本地视频 URL
        >
          你的浏览器不支持 HTML5 视频播放
        </video>
        
        <div className="video-controls">
          <div className="playback-rates">
            倍速：
            {[0.5, 1, 1.5, 2].map(rate => (
              <span
                key={rate}
                className={`rate-option ${playbackRate === rate ? 'active' : ''}`}
                onClick={() => handleRateChange(rate)}
              >
                {rate}x
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail