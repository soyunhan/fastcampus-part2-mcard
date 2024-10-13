/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import styled from '@emotion/styled'
import VideoList from './VideoList' // VideoList는 이미 정의된 대로 사용 가능

const Wrapper = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`

const ResultCount = styled.div`
  color: #99a1b3;
  font-size: 14px;
  margin-bottom: 20px;
`

const HelpVideoPage: React.FC = () => {
  const [videos, setVideos] = useState([
    {
      title: 'Up to 2 lines of service will be displayed in the post...',
      date: '2024.09.02',
      thumbnail: '', // 썸네일이 없을 경우 가상 이미지 사용
      duration: '',
    },
    {
      title: 'Up to 2 lines of service will be displayed in the post...',
      date: '2024.09.02',
      thumbnail: 'https://via.placeholder.com/80', // 실제 이미지 URL
      duration: '16:00',
    },
    {
      title: 'Up to 2 lines of service will be displayed in the post...',
      date: '2024.09.02',
      thumbnail: '', // 썸네일이 없을 경우 가상 이미지 사용
      duration: '23:00',
    },
  ])

  return (
    <Wrapper>
      <Header>Help Video</Header>
      <ResultCount>{videos.length}건의 결과</ResultCount>
      <VideoList videos={videos} /> {/* VideoList는 VideoItem을 받음 */}
    </Wrapper>
  )
}

export default HelpVideoPage
