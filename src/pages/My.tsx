import { useCallback } from 'react'
import { signOut } from 'firebase/auth'

import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Button from '@shared/Button'
import Spacing from '@shared/Spacing'

import useUser from '@hooks/auth/useUser'
import { auth } from '@remote/firebase'
import MyImage from '@components/my/MyImage'
import PostCard from '@/components/card/Postcards/Postcard_t'
import SelectBox from '@/components/card/SelectBox'
import DateSelectBox from '@/components/card/SelectBox2'

import styled from '@emotion/styled'
import PostForm from '@/components/card/postListDetail/PostForm'
import PollForm from '@/components/card/Poll/PollFormIndex'
import PostWithPoll from '@/components/card/postListDetail/PostWithPoll'
import DdayBanner from '@/components/card/DdayBanner'
import GuideSection from '@/components/card/GuideSection'
import ConciergeIndex from '@/components/card/Concierge/ConciergeIndex'
import StaffMainPage from '@/components/card/Staff/StaffIndex'
import Accordion from '@/components/card/Accordion/AccordionIndex'
import HelpVideoPage from '@/components/card/ListVideo/HelpVideoPage'
import PostWithFiles from '@/components/card/Postcards/PostWithFiles'
import PollResult from '@/components/card/Poll/PollBar'

const FormWrapper = styled.div`
  /* width: 100%; */
  /* max-width: 400px;
  margin: 0 auto; */
`

const postTitle = '외국인 생활금융 플랫폼 커뮤니티 제목'
const postContent = [
  "전북은행 외국인 생활금융 플랫폼 Jeonbuk Bank's Foreign Living Finance Platform 커뮤니티 내용입니다. 내용 가득",
  "전북은행 외국인 생활금융 플랫폼 Jeonbuk Bank's Foreign Living Finance Platform 커뮤니티 내용입니다. 내용 가득",
]
const postFiles = [
  {
    fileName: '파일 이름 파일 이름 파일 이름 파일 이름.jpg',
    fileType: 'image' as 'image',
  },
  { fileName: '파일 이름 파일 이름.pdf', fileType: 'pdf' as 'pdf' },
]

function MyPage() {
  const user = useUser()

  const handleLogout = useCallback(() => {
    signOut(auth)
  }, [])

  return (
    <Flex direction="column" align="center">
      {/* test */}
      <HelpVideoPage />
      <br />
      <Accordion />
      <br />
      <ConciergeIndex />
      <br />
      <StaffMainPage />
      <br />
      <SelectBox />
      <br />
      <DateSelectBox />
      <br />
      {/* test */}
      <PostForm />
      <br />
      <PollForm />
      <br />
      <PostWithFiles
        title={postTitle}
        content={postContent}
        files={postFiles}
      />
      <br />
      <PollResult />
      <br />
      <PostWithPoll />
      <br />
      <DdayBanner />
      <br />
      <GuideSection />
      <br />
      <PostCard
        profileImage="/path-to-image/profile.png"
        username="Sonnyis GOD"
        date="2024.08.28"
        image=""
        content="지난 분기 좋은 실적으로 주목받는 글로벌 OTT 넷플릭스 가입자 수는 몇 명일까요?"
        stats={['👁 3.6k', '❤️ 2.4k', '💬 610']}
        isReported={false}
        bannerText=""
      />
      <PostCard
        profileImage="/path-to-image/profile.png"
        username="Sonnyis GOD"
        date="2024.08.28"
        image="/path-to-image/post-image.png"
        content="지난 분기 좋은 실적으로 주목받는 글로벌 OTT 넷플릭스 가입자 수는 몇 명일까요?"
        stats={['👁 3.6k', '❤️ 2.4k', '💬 610']}
        isReported={true}
        bannerText={'공지사항'}
      />
      <PostCard
        profileImage="/path-to-image/profile.png"
        username="Sonnyis GOD"
        date="2024.08.28"
        content="지난 분기 좋은 실적으로 주목받는 글로벌 OTT 넷플릭스 가입자 수는 몇 명일까요?"
        stats={['👁 3.6k', '❤️ 2.4k', '💬 610']}
        poll={{
          isActive: true,
          participants: 7489,
        }}
      />
      <PostCard
        profileImage="/path-to-image/profile.png"
        username="Sonnyis GOD"
        date="2024.08.28"
        content="지난 분기 좋은 실적으로 주목받는 글로벌 OTT 넷플릭스 가입자 수는 몇 명일까요?"
        stats={['👁 3.6k', '❤️ 2.4k', '💬 610']}
        poll={{
          isActive: false,
          participants: 7489,
          result: '2억 6천만명',
          winnerRank: '1위',
        }}
      />
      {/* test */}
      <Spacing size={40} />
      <MyImage size={80} mode="upload" />

      <Spacing size={20} />
      <Text bold={true}>{user?.displayName}</Text>

      <Spacing size={20} />
      <Button onClick={handleLogout}>로그아웃</Button>
      {/* test */}
    </Flex>
  )
}

export default MyPage
