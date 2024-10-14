/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FaMapMarkerAlt, FaPhoneAlt, FaFax } from 'react-icons/fa'

const InfoWrapper = styled.div`
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

// interface ContactInfoProps {
//   address: string;
//   phone: string;
//   fax: string;
// }

const ContactInfo = () => {
  return (
    <InfoWrapper>
      <InfoItem>
        <IconWrapper>
          <FaMapMarkerAlt />
        </IconWrapper>
        <InfoText>서울 영등포구 여의나루로 77</InfoText>
      </InfoItem>
      <InfoItem>
        <IconWrapper>
          <FaPhoneAlt />
        </IconWrapper>
        <InfoText>1588-2266</InfoText>
        <IconWrapper>
          <FaFax />
        </IconWrapper>
        <InfoText>031-248-8193</InfoText>
      </InfoItem>
    </InfoWrapper>
  )
}

export default ContactInfo
