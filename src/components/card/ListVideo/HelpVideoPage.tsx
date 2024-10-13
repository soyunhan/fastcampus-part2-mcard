/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import styled from '@emotion/styled'
import VideoList from './VideoList' // VideoList component, already defined
import LoadMoreButton from './LoadMoreButton'

const Wrapper = styled.div`
  width: 100%;
  /* padding: 20px;
  margin: 0 auto; */
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
      thumbnail: '', // No thumbnail, use placeholder
      duration: '',
    },
    {
      title: 'Up to 2 lines of service will be displayed in the post...',
      date: '2024.09.02',
      thumbnail: 'https://via.placeholder.com/80', // Actual thumbnail URL
      duration: '16:00',
    },
    {
      title: 'Up to 2 lines of service will be displayed in the post...',
      date: '2024.09.02',
      thumbnail: '', // No thumbnail, use placeholder
      duration: '23:00',
    },
  ])
  const [loadingMore, setLoadingMore] = useState(false)

  const loadMoreVideos = () => {
    setLoadingMore(true)
    // Simulate fetching new videos (could be an API call)
    setTimeout(() => {
      const newVideos = [
        {
          title: 'New video added from load more...',
          date: '2024.10.01',
          thumbnail: 'https://via.placeholder.com/80',
          duration: '10:00',
        },
        {
          title: 'Another new video...',
          date: '2024.10.02',
          thumbnail: '',
          duration: '12:00',
        },
      ]
      setVideos((prevVideos) => [...prevVideos, ...newVideos])
      setLoadingMore(false)
    }, 1000) // Simulate network delay
  }

  return (
    <Wrapper>
      <Header>Help Video</Header>
      <ResultCount>{videos.length}건의 결과</ResultCount>
      <VideoList videos={videos} />{' '}
      {/* VideoList component to display videos */}
      {!loadingMore && <LoadMoreButton onClick={loadMoreVideos} />}
      {loadingMore && <div>Loading more videos...</div>}{' '}
      {/* Optional loading indicator */}
    </Wrapper>
  )
}

export default HelpVideoPage
