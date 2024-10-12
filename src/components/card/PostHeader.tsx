/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Content = styled.p`
  font-size: 16px;
  color: #666;
`

interface PostHeaderProps {
  title: string
  content: string
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, content }) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </HeaderWrapper>
  )
}

export default PostHeader
