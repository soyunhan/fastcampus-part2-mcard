/** @jsxImportSource @emotion/react */
import PostHeader from './PostHeader'
import PostImage from './PostImage'
import PollComponent from '../Poll/PollComponent'

const PostWithPoll = () => {
  const postTitle = '외국인 생활금융 플랫폼 커뮤니티 제목 두줄일경우'
  const postContent =
    "전북은행 외국인 생활금융 플랫폼 Jeonbuk Bank's Foreign Living Finance Platform 커뮤니티 내용입니다. 내용 가득"
  const postImageUrl = 'https://via.placeholder.com/400x300' // 대체 이미지 사용
  const pollTitle = '투표 제목'
  const pollItems = ['투표항목 1', '투표항목 2', '투표항목 3', '투표항목 4']
  const pollEndDate = '2024년 8월 29일'

  return (
    <div>
      <PostHeader title={postTitle} content={postContent} />
      <PostImage imageUrl={postImageUrl} />
      <PollComponent
        pollTitle={pollTitle}
        pollItems={pollItems}
        endDate={pollEndDate}
      />
    </div>
  )
}

export default PostWithPoll
