/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'

interface SocialLinksProps {
  facebook?: string
  instagram?: string
  telegram?: string
}

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #007bff;
  margin-bottom: 8px;
  text-decoration: none;
`

const IconWrapper = styled.div`
  margin-right: 8px;
  font-size: 18px;
`

const SocialLinks: React.FC<SocialLinksProps> = ({
  facebook,
  instagram,
  telegram,
}) => {
  return (
    <SocialWrapper>
      {facebook && (
        <SocialLink href={facebook}>
          <IconWrapper>
            <FaFacebook />
          </IconWrapper>
          Facebook
        </SocialLink>
      )}
      {instagram && (
        <SocialLink href={instagram}>
          <IconWrapper>
            <FaInstagram />
          </IconWrapper>
          Instagram
        </SocialLink>
      )}
      {telegram && (
        <SocialLink href={telegram}>
          <IconWrapper>
            <FaTelegram />
          </IconWrapper>
          Telegram
        </SocialLink>
      )}
    </SocialWrapper>
  )
}

export default SocialLinks
