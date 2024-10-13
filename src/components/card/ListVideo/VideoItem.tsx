/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'

interface VideoItemProps {
  title: string
  date: string
  thumbnail?: string // 썸네일을 선택적으로 받을 수 있도록 설정
  duration?: string
}

const VideoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e1e8ed;
`

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const VideoTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
  line-height: 1.5;
  max-height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const VideoDate = styled.span`
  font-size: 14px;
  color: #99a1b3;
`

const ThumbnailWrapper = styled.div`
  position: relative;
`

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
`

const Duration = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 12px;
  padding: 2px 4px;
  border-radius: 3px;
`

const VideoItem: React.FC<VideoItemProps> = ({
  title,
  date,
  thumbnail,
  duration,
}) => {
  const placeholderImage = 'https://via.placeholder.com/80' // 가상 이미지 URL

  return (
    <VideoItemWrapper>
      <VideoInfo>
        <VideoTitle>{title}</VideoTitle>
        <VideoDate>{date}</VideoDate>
      </VideoInfo>
      <ThumbnailWrapper>
        <Thumbnail src={thumbnail || placeholderImage} alt="비디오 썸네일" />
        {duration && <Duration>{duration}</Duration>}{' '}
        {/* duration이 있으면 보여주고 없으면 숨김 */}
      </ThumbnailWrapper>
    </VideoItemWrapper>
  )
}

export default VideoItem
