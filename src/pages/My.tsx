import { useCallback } from 'react'
import { signOut } from 'firebase/auth'

import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Button from '@shared/Button'
import Spacing from '@shared/Spacing'

import useUser from '@hooks/auth/useUser'
import { auth } from '@remote/firebase'
import MyImage from '@components/my/MyImage'
import PostCard from '@/components/card/Postcard_t'
import SelectBox from '@/components/card/SelectBox'
import DateSelectBox from '@/components/card/SelectBox2'
import TextInput from '@/components/card/TextInput'
import TextareaInput from '@/components/card/TextareaInput'
import VoteForm from '@/components/card/VoteForm'

import styled from '@emotion/styled'
import PostForm from '@/components/card/PostForm'
import PollForm from '@/components/card/PollFormIndex'
import PostWithPoll from '@/components/card/PostWithPoll'
import DdayBanner from '@/components/card/DdayBanner'

const FormWrapper = styled.div`
  width: 100%;
  /* max-width: 400px;
  margin: 0 auto; */
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`

function MyPage() {
  const user = useUser()

  const handleLogout = useCallback(() => {
    signOut(auth)
  }, [])

  return (
    <Flex direction="column" align="center">
      <Spacing size={40} />
      <MyImage size={80} mode="upload" />

      <Spacing size={20} />
      <Text bold={true}>{user?.displayName}</Text>

      <Spacing size={20} />
      <Button onClick={handleLogout}>로그아웃</Button>

      {/* test */}
      <SelectBox />
      <DateSelectBox />
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
      {/* <CategorySelectBox /> */}
      <TextInput label="제목" placeholder="제목을 입력해주세요" />
      <TextareaInput label="내용" placeholder="내용을 입력해주세요" />
      <VoteForm />
      <SubmitButton>게시물 등록</SubmitButton>
      {/* test */}
      <PostForm />
      <PollForm />
      <PostWithPoll />
      <DdayBanner />
    </Flex>
  )
}

export default MyPage
