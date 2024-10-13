/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import {
  FaPhoneAlt,
  FaMobileAlt,
  FaFax,
  FaEnvelope,
  FaFacebook,
} from 'react-icons/fa'

interface StaffProfileProps {
  name: string
  title: string
  country: string
  countryFlagUrl: string
  imageUrl: string
  phone: string
  mobile: string
  fax: string
  email: string
  customerCenter: string
  facebook: string
}

const ProfileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
`

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  margin-left: auto;
`

const ProfileInfo = styled.div`
  flex: 1;
`

const Name = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
`

const Title = styled.p`
  font-size: 14px;
  color: #99a1b3;
  margin-bottom: 8px;
`

const CountryInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`

const FlagImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
const CountryInfoleft = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 6px;
`

const ContactLabel = styled.span`
  font-weight: bold;
  color: #99a1b3;
  margin-right: 8px;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #007bff;
  margin-top: 12px;
  text-decoration: none;
`

const IconWrapper = styled.div`
  margin-right: 8px;
  color: #007bff;
`

const StaffProfile: React.FC<StaffProfileProps> = ({
  name,
  title,
  country,
  countryFlagUrl,
  imageUrl,
  phone,
  mobile,
  fax,
  email,
  customerCenter,
  facebook,
}) => {
  return (
    <ProfileWrapper>
      <ProfileInfo>
        <CountryInfo>
          <CountryInfoleft>
            <Name>{name}</Name>
            <Title>{title}</Title>
            <FlagImage src={countryFlagUrl} alt={`${country} flag`} />
            {country}
          </CountryInfoleft>
          <ProfileImage src={imageUrl} alt={name} />
        </CountryInfo>
        <ContactInfo>
          <ContactItem>
            <ContactLabel>T.</ContactLabel>
            {phone}
          </ContactItem>
          <ContactItem>
            <ContactLabel>M.</ContactLabel>
            {mobile}
          </ContactItem>
          <ContactItem>
            <ContactLabel>F.</ContactLabel>
            {fax}
          </ContactItem>
          <ContactItem>
            <ContactLabel>E.</ContactLabel>
            {email}
          </ContactItem>
          <ContactItem>
            <ContactLabel>C.</ContactLabel>
            <a href="#">{customerCenter}</a>
          </ContactItem>
        </ContactInfo>
        <SocialLink href={facebook}>
          <IconWrapper>
            <FaFacebook />
          </IconWrapper>
          JB BANK Karuna
        </SocialLink>
      </ProfileInfo>
    </ProfileWrapper>
  )
}

export default StaffProfile
