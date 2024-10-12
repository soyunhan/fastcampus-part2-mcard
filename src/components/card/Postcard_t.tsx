/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FaArrowRight } from 'react-icons/fa'
import { FaBullhorn } from 'react-icons/fa' // 공지사항 아이콘

interface PostCardProps {
  profileImage: string
  username: string
  date: string
  content: string
  image?: string
  stats: Array<string>
  isLink?: boolean
  linkText?: string
  isReported?: boolean // 신고 뱃지 여부
  bannerText?: string // 배너 텍스트 (공지사항)
  poll?: {
    isActive: boolean
    participants: number
    result?: string
    winnerRank?: string
  }
}

const CardWrapper = styled.div`
  border: 1px solid #e1e8ed;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  background-color: white;
  max-width: 600px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const BannerWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e1e8ed;
`

const BannerIcon = styled(FaBullhorn)`
  margin-right: 8px;
  color: #ff4d4d;
`

const BannerText = styled.span`
  font-size: 14px;
  font-weight: bold;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between; /* 왼쪽에는 프로필, 오른쪽에는 신고 뱃지 */
  align-items: center;
  margin-bottom: 10px;
`

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const Username = styled.span`
  font-weight: bold;
  font-size: 16px;
`

const Date = styled.span`
  font-size: 12px;
  color: gray;
`

const ReportBadge = styled.div`
  background-color: #ffcccc;
  color: red;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const ContentText = styled.div`
  flex: 1;
`

const Content = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`

const LinkText = styled.a`
  font-size: 16px;
  color: blue;
  cursor: pointer;
`

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`

const StatLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StatRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const StatItem = styled.span`
  display: flex;
  align-items: center;
  margin-right: 15px;
`

const PostImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  margin-left: 10px;
`

const PollBox = styled.div`
  border: 1px solid #e1e8ed;
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PollStatus = styled.span`
  font-size: 16px;
  font-weight: bold;
`

const PollParticipants = styled.span`
  color: blue;
  font-weight: bold;
  display: flex;
  align-items: center;
`

const PollArrow = styled(FaArrowRight)`
  margin-left: 5px;
`

const PollResultBox = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  margin-top: 15px;
`

const PollResultButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  display: inline-block;
`

function PostCard({
  profileImage,
  username,
  date,
  content,
  image,
  stats,
  isLink,
  linkText,
  isReported, // 신고 뱃지 여부
  bannerText, // 공지사항 텍스트
  poll,
}: PostCardProps) {
  // 왼쪽 3개의 아이콘과 오른쪽 2개의 아이콘을 분리
  const leftStats = stats.slice(0, 3)
  const rightStats = stats.slice(3)

  return (
    <CardWrapper>
      {/* 배너가 있을 경우에만 표시 */}
      {bannerText && (
        <BannerWrapper>
          <BannerIcon />
          <BannerText>{bannerText}</BannerText>
        </BannerWrapper>
      )}
      <Header>
        <ProfileInfo>
          <ProfileImage src={profileImage} alt="Profile" />
          <UserInfo>
            <Username>{username}</Username>
            <Date>{date}</Date>
          </UserInfo>
        </ProfileInfo>
        {isReported && <ReportBadge>신고 게시물</ReportBadge>}
      </Header>
      <ContentWrapper>
        <ContentText>
          <Content>{content}</Content>
          {isLink && <LinkText>{linkText}</LinkText>}
          {/* 투표 섹션 */}
          {poll && poll.isActive && (
            <PollBox>
              <PollStatus>🗳️ 투표</PollStatus>
              <PollParticipants>
                {poll.participants.toLocaleString()}명 참여중
                <PollArrow />
              </PollParticipants>
            </PollBox>
          )}
          {poll && !poll.isActive && (
            <PollResultBox>
              <PollStatus>🗳️ 투표 종료</PollStatus>
              <p>
                {poll.winnerRank} {poll.result}
              </p>
              <PollResultButton>투표결과 확인하기</PollResultButton>
            </PollResultBox>
          )}
          <Stats>
            <StatLeft>
              {leftStats.map((stat, index) => (
                <StatItem key={index}>{stat}</StatItem>
              ))}
            </StatLeft>
            <StatRight>
              {rightStats.map((stat, index) => (
                <StatItem key={index}>{stat}</StatItem>
              ))}
            </StatRight>
          </Stats>
        </ContentText>
        {image && <PostImage src={image} alt="Post Image" />}
      </ContentWrapper>
    </CardWrapper>
  )
}

export default PostCard
