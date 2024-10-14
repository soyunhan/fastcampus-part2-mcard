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

const OneLine = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  border-bottom: 1px solid #ccc;
`

interface GuideItemProps {
  title?: string
  description: string
}

const GuideItem: React.FC<GuideItemProps> = ({ title, description }) => {
  return (
    <ItemWrapper>
      {title && <ItemTitle>{title}</ItemTitle>}
      {title ? (
        <ItemDescription>{description}</ItemDescription>
      ) : (
        <OneLine>{description}</OneLine>
      )}
    </ItemWrapper>
  )
}

export default GuideItem
