/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'
import VideoItem from './VideoItem'

interface VideoData {
  title: string
  date: string
  thumbnail: string
  duration: string
}

const VideoListWrapper = styled.div`
  border-top: 1px solid #e1e8ed;
`

interface VideoListProps {
  videos: VideoData[]
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  return (
    <VideoListWrapper>
      {videos.map((video, index) => (
        <VideoItem
          key={index}
          title={video.title}
          date={video.date}
          thumbnail={video.thumbnail}
          duration={video.duration}
        />
      ))}
    </VideoListWrapper>
  )
}

export default VideoList
