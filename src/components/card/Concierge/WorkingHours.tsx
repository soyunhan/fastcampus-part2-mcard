/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FaClock } from 'react-icons/fa'

const HoursWrapper = styled.div`
  padding: 16px;
  background-color: #fff;
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const IconWrapper = styled.div`
  margin-right: 10px;
  font-size: 16px;
  color: #007bff;
`

const InfoText = styled.span`
  font-size: 14px;
  color: #333;
`

const WorkingHours = () => {
  return (
    <HoursWrapper>
      <InfoItem>
        <IconWrapper>
          <FaClock />
        </IconWrapper>
        <InfoText>평일 08:00 ~ 22:00</InfoText>
      </InfoItem>
      <InfoText>주말은 19:00까지 운영되며, 공휴일은 휴무</InfoText>
    </HoursWrapper>
  )
}

export default WorkingHours
