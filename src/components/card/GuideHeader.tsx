/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FaSearch } from 'react-icons/fa'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`

const ActionLink = styled.a`
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
`

const IconWrapper = styled.div`
  font-size: 20px;
  color: #007bff;
`

// Define the prop type for conditional rendering
interface GuideHeaderProps {
  actionText?: string // This controls the visibility of the "참여방법" link
  titleText: string
}

const GuideHeader: React.FC<GuideHeaderProps> = ({ actionText, titleText }) => {
  return (
    <HeaderWrapper>
      <div>
        {/* Conditionally render the ActionLink */}
        {actionText && <ActionLink>{actionText}</ActionLink>}
        <Title>{titleText}</Title>
      </div>
      <IconWrapper>
        <FaSearch />
      </IconWrapper>
    </HeaderWrapper>
  )
}

export default GuideHeader
