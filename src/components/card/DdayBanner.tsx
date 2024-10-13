/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'

const BannerWrapper = styled.div`
  width: 100%;
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
  position: relative; /* Allows Badge positioning */
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
  border-radius: 50%;
`

const PlaceholderIcon = styled.div`
  width: 36px;
  height: 36px;
  background-color: #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
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

const DdayBanner = ({ imageSrc }: { imageSrc?: string }) => {
  return (
    <BannerWrapper>
      <IconWrapper>
        {imageSrc ? (
          <Icon src={imageSrc} alt="Icon" />
        ) : (
          <PlaceholderIcon>JB</PlaceholderIcon> // Default placeholder with initials
        )}
        <Badge>D-2</Badge>
      </IconWrapper>
      <ContentWrapper>
        <Title>JB와 함께하는 진심케어 이벤트</Title>
        <Date>2024.10.01 ~ 10.31</Date>
      </ContentWrapper>
    </BannerWrapper>
  )
}

export default DdayBanner
