/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f7f9fc;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4a6ee0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`

const Badge = styled.div`
  position: absolute;
  background-color: #333;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 12px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
`

const Icon = styled.img`
  width: 36px;
  height: 36px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
`

const Date = styled.span`
  font-size: 14px;
  color: #99a1b3;
`

const DdayBanner = () => {
  return (
    <BannerWrapper>
      <div style={{ position: 'relative' }}>
        <IconWrapper>
          <Icon src="/path/to/coin-icon.png" alt="Coin Icon" />
        </IconWrapper>
        <Badge>D-2</Badge>
      </div>
      <ContentWrapper>
        <Title>JB와 함께하는 진심케어 이벤트</Title>
        <Date>2024.10.01 ~ 10.31</Date>
      </ContentWrapper>
    </BannerWrapper>
  )
}

export default DdayBanner
