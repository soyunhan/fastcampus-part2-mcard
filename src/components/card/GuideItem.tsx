/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const ItemWrapper = styled.div`
  margin-bottom: 16px;
`

const ItemTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 6px;
`

const ItemDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`

interface GuideItemProps {
  title: string
  description: string
}

const GuideItem: React.FC<GuideItemProps> = ({ title, description }) => {
  return (
    <ItemWrapper>
      <ItemTitle>{title}</ItemTitle>
      <ItemDescription>{description}</ItemDescription>
    </ItemWrapper>
  )
}

export default GuideItem
